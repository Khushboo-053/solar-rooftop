import { useEffect, useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAppData } from "@/context/AppDataContext";
import type { BlogPost } from "@/data/blogPosts";
import { hasSupabaseConfig, supabase } from "@/lib/supabase";

type SolarRequest = {
  id: number;
  name: string;
  phone: string;
  created_at: string;
};

type FormState = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  tag: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
};

const emptyForm: FormState = {
  slug: "",
  title: "",
  excerpt: "",
  coverImage: "",
  date: "",
  tag: "",
  seoTitle: "",
  seoDescription: "",
  content: "",
};

type DashboardProps = {
  section: "blogs" | "leads";
};

const Dashboard = ({ section }: DashboardProps) => {
  const { isAdminAuthenticated, blogPosts, createBlog, updateBlog, deleteBlog, logout } = useAppData();
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [requests, setRequests] = useState<SolarRequest[]>([]);
  const [requestsLoading, setRequestsLoading] = useState(true);

  if (!isAdminAuthenticated) return <Navigate to="/admin/login" replace />;

  const sortedPosts = useMemo(() => [...blogPosts], [blogPosts]);
  const sortedRequests = useMemo(
    () => [...requests].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    [requests],
  );

  useEffect(() => {
    const loadRequests = async () => {
      if (!hasSupabaseConfig || !supabase) {
        setRequestsLoading(false);
        return;
      }
      const { data } = await supabase
        .from("solar_requests")
        .select("id,name,phone,created_at")
        .order("created_at", { ascending: false });
      if (data) setRequests(data as SolarRequest[]);
      setRequestsLoading(false);
    };

    loadRequests();

    if (!hasSupabaseConfig || !supabase) return;

    const channel = supabase
      .channel("solar-requests-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "solar_requests" },
        (payload) => {
          setRequests((prev) => [payload.new as SolarRequest, ...prev]);
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, []);

  const populateForm = (post: BlogPost) => {
    const content = post.sections.flatMap((s) => s.paragraphs ?? []).join("\n");
    setEditingSlug(post.slug);
    setForm({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage ?? "",
      date: post.date,
      tag: post.tag,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      content,
    });
  };

  const resetForm = () => {
    setEditingSlug(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.slug.trim()) return;
    if (editingSlug) {
      await updateBlog(editingSlug, form);
    } else {
      await createBlog(form);
    }
    resetForm();
  };

  const handleImageUpload = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setForm((prev) => ({ ...prev, coverImage: result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-surface px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <aside className="bg-card rounded-3xl shadow-sm p-5 h-fit">
          <h2 className="font-headline font-extrabold text-xl mb-5">Admin Panel</h2>
          <nav className="space-y-2">
            <Link
              to="/admin/dashboard/blogs"
              className={`block px-4 py-3 rounded-xl font-bold transition ${
                section === "blogs"
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-container-low text-on-surface hover:bg-surface-container"
              }`}
            >
              Blogs
            </Link>
            <Link
              to="/admin/dashboard/leads"
              className={`block px-4 py-3 rounded-xl font-bold transition ${
                section === "leads"
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-container-low text-on-surface hover:bg-surface-container"
              }`}
            >
              Contact Leads
            </Link>
          </nav>
          <button onClick={logout} className="mt-6 w-full bg-on-surface text-surface px-5 py-2.5 rounded-lg font-bold">
            Logout
          </button>
        </aside>

        <div className="space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-headline font-extrabold">
              {section === "blogs" ? "Blogs" : "Contact Leads"}
            </h1>
            <p className="text-secondary mt-1">
              {section === "blogs" ? "Manage blog posts (create, update, delete)." : "View all consultation requests from users."}
            </p>
          </div>
        </header>

        {section === "leads" && (
          <section className="bg-card rounded-3xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-headline font-bold mb-6">Solar Consultation Requests</h2>
          {!hasSupabaseConfig ? (
            <p className="text-secondary">Supabase is not configured for this environment.</p>
          ) : requestsLoading ? (
            <p className="text-secondary">Loading requests...</p>
          ) : (
            <div className="overflow-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-left border-b border-outline-variant/30">
                    <th className="py-3 pr-4 font-bold">ID</th>
                    <th className="py-3 pr-4 font-bold">Name</th>
                    <th className="py-3 pr-4 font-bold">Phone</th>
                    <th className="py-3 pr-4 font-bold">Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedRequests.map((req) => (
                    <tr key={req.id} className="border-b border-outline-variant/20">
                      <td className="py-3 pr-4">{req.id}</td>
                      <td className="py-3 pr-4">{req.name}</td>
                      <td className="py-3 pr-4">{req.phone}</td>
                      <td className="py-3 pr-4">{new Date(req.created_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {sortedRequests.length === 0 ? <p className="text-secondary pt-4">No requests yet.</p> : null}
            </div>
          )}
          </section>
        )}

        {section === "blogs" && (
          <>
            <section className="bg-card rounded-3xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-headline font-bold mb-6">{editingSlug ? "Update Blog" : "Create Blog"}</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(
              [
                ["slug", "Slug (unique URL key)"],
                ["title", "Title"],
                ["date", "Date (e.g. April 2026)"],
                ["tag", "Tag"],
                ["seoTitle", "SEO Title"],
              ] as const
            ).map(([key, label]) => (
              <input
                key={key}
                value={form[key]}
                onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                placeholder={label}
                className="rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
              />
            ))}

            <textarea
              value={form.excerpt}
              onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
              placeholder="Excerpt"
              rows={3}
              className="md:col-span-2 rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              value={form.coverImage ?? ""}
              onChange={(e) => setForm((prev) => ({ ...prev, coverImage: e.target.value }))}
              placeholder="Cover image URL (optional)"
              className="md:col-span-2 rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files?.[0] ?? null)}
              className="md:col-span-2 rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none"
            />
            {form.coverImage ? (
              <img src={form.coverImage} alt="Cover preview" className="md:col-span-2 w-full max-h-64 object-cover rounded-xl border border-outline-variant/40" />
            ) : null}
            <textarea
              value={form.seoDescription}
              onChange={(e) => setForm((prev) => ({ ...prev, seoDescription: e.target.value }))}
              placeholder="SEO Description"
              rows={3}
              className="md:col-span-2 rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              value={form.content}
              onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
              placeholder="Blog content (each new line creates a new paragraph)"
              rows={8}
              className="md:col-span-2 rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none focus:ring-2 focus:ring-primary/30"
            />
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold">
                {editingSlug ? "Update Blog" : "Create Blog"}
              </button>
              {editingSlug && (
                <button type="button" onClick={resetForm} className="bg-surface-container-high px-6 py-3 rounded-xl font-bold">
                  Cancel
                </button>
              )}
            </div>
          </form>
            </section>

            <section className="bg-card rounded-3xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-headline font-bold mb-6">All Blogs</h2>
          <div className="space-y-4">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="p-4 rounded-2xl bg-surface-container-low flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-headline font-bold">{post.title}</p>
                  <p className="text-sm text-secondary">{post.slug}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => populateForm(post)} className="px-4 py-2 rounded-lg bg-primary-container text-primary-container-foreground font-bold">
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      await deleteBlog(post.slug);
                    }}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white font-bold"
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
            </section>
          </>
        )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
