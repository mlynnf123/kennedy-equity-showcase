import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Flip Homes Gallery | Kennedy Equity Investments"
        description="Browse our before and after photos showcasing strategic property renovations and transformations across Greater Austin and surrounding areas."
        path="/gallery"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Kennedy Equity Flip Homes Gallery",
          description: "Before and after photos of property renovations and flips by Kennedy Equity Investments",
          creator: {
            "@type": "Organization",
            name: "Kennedy Equity Investments"
          }
        }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="container mt-10">
          <h1 className="text-3xl font-normal">Flip Homes Gallery</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Explore our portfolio of strategic property renovations across Greater Austin and surrounding areas. 
            See the transformations from initial acquisition to completed renovation.
          </p>

          <div className="mt-8">
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold mb-4">Gallery Coming Soon</h2>
              <p className="text-muted-foreground">
                We're preparing an impressive collection of before and after photos showcasing our renovation projects.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;