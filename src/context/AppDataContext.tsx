import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { blogPosts as seedBlogPosts, type BlogPost } from "@/data/blogPosts";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";

type BlogPostInput = Omit<BlogPost, "sections"> & {
  content: string;
};

type AppDataContextType = {
  isAdminAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  blogPosts: BlogPost[];
  createBlog: (input: BlogPostInput) => Promise<void>;
  updateBlog: (slug: string, input: BlogPostInput) => Promise<void>;
  deleteBlog: (slug: string) => Promise<void>;
};

const BLOGS_KEY = "karsaaz.blogs";
const AUTH_KEY = "karsaaz.admin.auth";
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

const AppDataContext = createContext<AppDataContextType | null>(null);

const getInitialBlogs = (): BlogPost[] => {
  const raw = localStorage.getItem(BLOGS_KEY);
  if (!raw) return seedBlogPosts;
  try {
    const parsed = JSON.parse(raw) as BlogPost[];
    return Array.isArray(parsed) ? parsed : seedBlogPosts;
  } catch {
    return seedBlogPosts;
  }
};

const toSections = (content: string) => [
  {
    heading: "Introduction",
    paragraphs: content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean),
  },
];

const sectionsToContent = (sections: BlogPost["sections"]) => sections.flatMap((s) => s.paragraphs ?? []).join("\n");

const normalizeBlog = (input: BlogPostInput): BlogPost => ({
  ...input,
  coverImage: input.coverImage?.trim() ? input.coverImage : undefined,
  sections: toSections(input.content),
});

export const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(localStorage.getItem(AUTH_KEY) === "1");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(getInitialBlogs);

  const persistBlogs = (next: BlogPost[]) => {
    setBlogPosts(next);
    localStorage.setItem(BLOGS_KEY, JSON.stringify(next));
  };

  const login = (username: string, password: string) => {
    const ok = username === ADMIN_USER && password === ADMIN_PASS;
    if (ok) {
      setIsAdminAuthenticated(true);
      localStorage.setItem(AUTH_KEY, "1");
    }
    return ok;
  };

  const logout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  useEffect(() => {
    const loadSupabaseBlogs = async () => {
      if (!hasSupabaseConfig || !supabase) return;
      const { data, error } = await supabase
        .from("blogs")
        .select("slug,title,excerpt,cover_image,date,tag,seo_title,seo_description,content")
        .order("created_at", { ascending: false });

      if (error || !data) return;

      const mapped: BlogPost[] = data.map((row) => ({
        slug: row.slug,
        title: row.title,
        excerpt: row.excerpt,
        coverImage: row.cover_image ?? undefined,
        date: row.date,
        tag: row.tag,
        seoTitle: row.seo_title,
        seoDescription: row.seo_description,
        sections: toSections(row.content ?? ""),
      }));

      setBlogPosts(mapped);
    };

    loadSupabaseBlogs();
  }, []);

  const createBlog = async (input: BlogPostInput) => {
    const next = normalizeBlog(input);
    if (hasSupabaseConfig && supabase) {
      const { error } = await supabase.from("blogs").insert({
        slug: next.slug,
        title: next.title,
        excerpt: next.excerpt,
        cover_image: next.coverImage ?? null,
        date: next.date,
        tag: next.tag,
        seo_title: next.seoTitle,
        seo_description: next.seoDescription,
        content: sectionsToContent(next.sections),
      });
      if (!error) {
        setBlogPosts((prev) => [next, ...prev]);
        return;
      }
    }
    persistBlogs([next, ...blogPosts]);
  };

  const updateBlog = async (slug: string, input: BlogPostInput) => {
    const updated = normalizeBlog(input);
    if (hasSupabaseConfig && supabase) {
      const { error } = await supabase
        .from("blogs")
        .update({
          slug: updated.slug,
          title: updated.title,
          excerpt: updated.excerpt,
          cover_image: updated.coverImage ?? null,
          date: updated.date,
          tag: updated.tag,
          seo_title: updated.seoTitle,
          seo_description: updated.seoDescription,
          content: sectionsToContent(updated.sections),
        })
        .eq("slug", slug);
      if (!error) {
        setBlogPosts((prev) => prev.map((post) => (post.slug === slug ? updated : post)));
        return;
      }
    }

    const next = blogPosts.map((post) =>
      post.slug === slug
        ? updated
        : post,
    );
    persistBlogs(next);
  };

  const deleteBlog = async (slug: string) => {
    if (hasSupabaseConfig && supabase) {
      const { error } = await supabase.from("blogs").delete().eq("slug", slug);
      if (!error) {
        setBlogPosts((prev) => prev.filter((post) => post.slug !== slug));
        return;
      }
    }
    persistBlogs(blogPosts.filter((post) => post.slug !== slug));
  };

  const value = useMemo(
    () => ({ isAdminAuthenticated, login, logout, blogPosts, createBlog, updateBlog, deleteBlog }),
    [isAdminAuthenticated, blogPosts],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used within AppDataProvider");
  return ctx;
};
