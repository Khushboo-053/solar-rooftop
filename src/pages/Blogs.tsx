import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogs = [
  {
    slug: "best-solar-company-kashmir",
    title: "Best Solar Company in Kashmir | Karsaaz Solar PM Surya Ghar Subsidy",
    excerpt:
      "Looking for the best solar company in Kashmir? Karsaaz offers rooftop solar installation under PM Surya Ghar Scheme with subsidy up to ₹94,500. Get free consultation today.",
    date: "April 2026",
    tag: "Featured",
  },
  {
    slug: "pm-surya-ghar-jk-guide",
    title: "PM Surya Ghar Yojana in J&K — A Complete 2026 Guide",
    excerpt:
      "Eligibility, subsidy slabs, documents and step-by-step application process for residents of Jammu & Kashmir.",
    date: "March 2026",
    tag: "Subsidy",
  },
  {
    slug: "solar-for-kashmir-winters",
    title: "How Solar Performs in Kashmir Winters",
    excerpt:
      "Snow load, temperature coefficients, and panel selection — what makes a system survive the valley's toughest months.",
    date: "February 2026",
    tag: "Engineering",
  },
];

const Blogs = () => (
  <div className="bg-surface text-on-surface font-body">
    <Navbar />
    <main className="pt-32 pb-24 max-w-6xl mx-auto px-8">
      <header className="text-center mb-16">
        <span className="inline-block py-2 px-4 rounded-full bg-tertiary-container text-tertiary-container-foreground font-label text-xs font-bold uppercase tracking-widest mb-6">
          Karsaaz Blogs
        </span>
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-5">
          Solar insights for Kashmir.
        </h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          Guides, subsidy explainers, and engineering notes for J&amp;K homeowners.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <article key={b.slug} className="bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
            <span className="text-xs font-label font-bold uppercase tracking-widest text-primary">{b.tag} · {b.date}</span>
            <h2 className="font-headline font-bold text-xl mt-3 mb-3 leading-snug">{b.title}</h2>
            <p className="text-secondary text-sm leading-relaxed mb-6">{b.excerpt}</p>
            <Link to="/contact" className="text-primary font-bold text-sm hover:underline">Read more →</Link>
          </article>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Blogs;
