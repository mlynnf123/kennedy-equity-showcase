import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import rosedaleExteriorBefore from "@/assets/gallery-rosedale-exterior-before.jpg";
import rosedalePorchBefore from "@/assets/gallery-rosedale-porch-before.jpg";
import rosedaleBathroomBefore from "@/assets/gallery-rosedale-bathroom-before.jpg";

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
            {/* Project 1: 4506 Rosedale Ave */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-normal mb-2">4506 Rosedale Ave</h2>
                <p className="text-muted-foreground">Austin, TX 78756</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete renovation of this charming Austin home, featuring exterior updates, 
                  interior improvements, and enhanced curb appeal.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before Photos */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-center">Before</h3>
                  <div className="space-y-6">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleExteriorBefore} 
                        alt="4506 Rosedale Ave exterior before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original siding and landscaping before renovation
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedalePorchBefore} 
                        alt="4506 Rosedale Ave porch before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Porch</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Porch area with original fixtures and furniture
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleBathroomBefore} 
                        alt="4506 Rosedale Ave bathroom before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Guest Bathroom</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original bathroom with dated fixtures and flooring
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* After Photos - Coming Soon */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-center">After</h3>
                  <div className="flex items-center justify-center h-full bg-muted/20 rounded-lg border-2 border-dashed border-muted">
                    <div className="text-center py-16">
                      <h4 className="text-lg font-medium mb-2">After Photos Coming Soon</h4>
                      <p className="text-sm text-muted-foreground">
                        Renovation in progress. After photos will be added upon completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;