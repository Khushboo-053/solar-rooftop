import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useAppData } from "@/context/AppDataContext";

const monthOrder: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

const parseMonthYear = (value: string) => {
  const [monthRaw = "", yearRaw = ""] = value.trim().split(" ");
  const month = monthRaw.toLowerCase();
  const year = Number(yearRaw);
  return {
    monthName: monthRaw,
    monthNum: monthOrder[month] ?? 0,
    year: Number.isFinite(year) ? year : 0,
  };
};

const Blogs = () => {
  const { blogPosts } = useAppData();
  const [yearFilter, setYearFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [appliedFilters, setAppliedFilters] = useState({
    year: "all",
    month: "all",
    sort: "newest" as "newest" | "oldest",
  });

  const years = useMemo(() => {
    const unique = new Set(
      blogPosts
        .map((post) => parseMonthYear(post.date).year)
        .filter((year) => year > 0)
        .map(String),
    );
    return [...unique].sort((a, b) => Number(b) - Number(a));
  }, [blogPosts]);

  const months = useMemo(() => {
    const unique = new Set(
      blogPosts
        .map((post) => parseMonthYear(post.date))
        .filter((d) => d.monthNum > 0)
        .map((d) => d.monthName),
    );
    return [...unique].sort((a, b) => (monthOrder[a.toLowerCase()] ?? 0) - (monthOrder[b.toLowerCase()] ?? 0));
  }, [blogPosts]);

  const filteredBlogs = useMemo(() => {
    const next = blogPosts.filter((post) => {
      const parsed = parseMonthYear(post.date);
      const byYear = appliedFilters.year === "all" || String(parsed.year) === appliedFilters.year;
      const byMonth = appliedFilters.month === "all" || parsed.monthName.toLowerCase() === appliedFilters.month.toLowerCase();
      return byYear && byMonth;
    });

    next.sort((a, b) => {
      const da = parseMonthYear(a.date);
      const db = parseMonthYear(b.date);
      const av = da.year * 100 + da.monthNum;
      const bv = db.year * 100 + db.monthNum;
      return appliedFilters.sort === "newest" ? bv - av : av - bv;
    });

    return next;
  }, [blogPosts, appliedFilters]);

  const applyFilters = () => {
    setAppliedFilters({
      year: yearFilter,
      month: monthFilter,
      sort: sortOrder,
    });
  };

  return (
    <div className="bg-surface text-on-surface font-body">
      <Seo
        title="Karsaaz Blogs | Solar Insights, PM Surya Ghar Subsidy & Kashmir Guides"
        description="Read Karsaaz blogs on rooftop solar in Kashmir, PM Surya Ghar subsidy guides, winter performance tips and engineering notes for J&K homeowners."
        canonicalPath="/blogs"
      />
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

        <section className="mb-10 bg-card rounded-2xl p-4 md:p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none"
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              value={monthFilter}
              onChange={(e) => setMonthFilter(e.target.value)}
              className="rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none"
            >
              <option value="all">All Months</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
              className="rounded-xl px-4 py-3 bg-surface-container-low border border-outline-variant/30 outline-none"
            >
              <option value="newest">Sort: Newest First</option>
              <option value="oldest">Sort: Oldest First</option>
            </select>
            <button
              type="button"
              onClick={applyFilters}
              className="rounded-xl px-4 py-3 bg-primary text-primary-foreground font-bold"
            >
              Apply
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((b) => (
            <article key={b.slug} className="bg-card rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="aspect-[16/9] bg-surface-container-low">
                {b.coverImage ? (
                  <img src={b.coverImage} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-secondary text-sm">No cover image</div>
                )}
              </div>
              <div className="p-8">
              <span className="text-xs font-label font-bold uppercase tracking-widest text-primary">{b.tag} · {b.date}</span>
              <h2 className="font-headline font-bold text-xl mt-3 mb-3 leading-snug">{b.title}</h2>
              <p className="text-secondary text-sm leading-relaxed mb-6">{b.excerpt}</p>
              <Link to={`/blogs/${b.slug}`} className="text-primary font-bold text-sm hover:underline">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
        {filteredBlogs.length === 0 && (
          <p className="text-center text-secondary mt-8">No blogs found for the selected year/month.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
