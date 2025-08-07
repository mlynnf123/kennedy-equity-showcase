import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="News & Insights | Kennedy Equity"
        description="Updates on recent acquisitions, highlights, and insights from Kennedy Equity."
        path="/news"
      />
      <Navbar />
      <main className="container flex-1 py-10">
        <h1 className="text-3xl font-bold">News & Insights</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Stay tuned for updates on acquisitions, portfolio highlights, and industry perspectives.
        </p>
        <div className="mt-10 p-6 rounded-lg border border-border bg-card text-sm text-muted-foreground">
          No posts yet. Check back soon.
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
