import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useAppData } from "@/context/AppDataContext";

const BlogPost = () => {
  const { slug } = useParams();
  const { blogPosts } = useAppData();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="bg-surface text-on-surface font-body min-h-screen">
        <Navbar />
        <main className="pt-32 pb-24 max-w-3xl mx-auto px-8">
          <h1 className="text-4xl font-headline font-extrabold mb-4">Blog not found</h1>
          <p className="text-secondary mb-8">The requested article does not exist.</p>
          <Link to="/blogs" className="text-primary font-bold hover:underline">
            Back to Blogs
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-surface font-body">
      <Seo title={post.seoTitle} description={post.seoDescription} canonicalPath={`/blogs/${post.slug}`} ogType="article" />
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-8">
        <Link to="/blogs" className="text-primary text-sm font-bold hover:underline">
          ← Back to Blogs
        </Link>
        {post.coverImage ? (
          <div className="mt-6 rounded-3xl overflow-hidden border border-outline-variant/30">
            <img src={post.coverImage} alt={post.title} className="w-full h-[320px] md:h-[420px] object-cover" />
          </div>
        ) : null}
        <header className="mt-6 mb-12">
          <span className="text-xs font-label font-bold uppercase tracking-widest text-primary">{post.tag} · {post.date}</span>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mt-4">{post.title}</h1>
          <p className="text-secondary text-lg leading-relaxed mt-5">{post.excerpt}</p>
        </header>

        <article className="space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-headline font-bold">{section.heading}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-secondary">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.numbered && (
                <ol className="list-decimal pl-6 space-y-2 text-secondary">
                  {section.numbered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
