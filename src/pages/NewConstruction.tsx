import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { Lightbox } from "@/components/ui/lightbox";

// Import images
import groverExteriorFront from "@/assets/grover-exterior-front.jpg";
import groverBathroom from "@/assets/grover-bathroom.jpg";
import groverConstruction2 from "@/assets/grover-construction-2.jpeg";
import groverConstruction3 from "@/assets/grover-construction-3.jpeg";
import groverConstruction4 from "@/assets/grover-construction-4.jpeg";
import groverConstruction15 from "@/assets/grover-construction-15.jpeg";

const NewConstruction = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<Array<{src: string; alt: string; title: string}>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images: Array<{src: string; alt: string; title: string}>, index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Grover Ave construction images
  const groverConstructionImages = [
    { src: groverExteriorFront, alt: "5401 Grover Ave exterior front view", title: "Exterior Front View" },
    { src: groverBathroom, alt: "5401 Grover Ave bathroom", title: "Modern Bathroom" },
    { src: groverConstruction2, alt: "5401 Grover Ave construction progress", title: "Construction Progress" },
    { src: groverConstruction3, alt: "5401 Grover Ave interior construction", title: "Interior Construction" },
    { src: groverConstruction4, alt: "5401 Grover Ave building progress", title: "Building Progress" },
    { src: groverConstruction15, alt: "5401 Grover Ave construction detail", title: "Construction Detail" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="New Construction Gallery | Kennedy Equity Real Estate"
        description="Explore our custom new construction projects in Austin. View progress photos and architectural details of modern homes being built by Kennedy Equity Investments."
        path="/new-construction"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Kennedy Equity New Construction Gallery",
          description: "New construction projects and custom home builds by Kennedy Equity Investments in Austin, Texas",
          url: "https://kennedyequity.com/new-construction",
          creator: {
            "@type": "Organization",
            name: "Kennedy Equity Investments",
            url: "https://kennedyequity.com",
            description: "Austin-based real estate investment company specializing in new construction and custom home builds"
          },
          about: [
            {
              "@type": "Place",
              name: "Austin, Texas",
              description: "New construction projects in Greater Austin area"
            },
            {
              "@type": "Service",
              name: "New Construction",
              description: "Custom home building and new construction development"
            },
            {
              "@type": "Service", 
              name: "Real Estate Development",
              description: "Ground-up construction and property development"
            }
          ]
        }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="container mt-10">
          <h1 className="text-3xl font-normal">New Construction Gallery</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Explore our portfolio of custom new construction projects across Greater Austin. 
            See the craftsmanship and attention to detail that goes into every Kennedy Equity build.
          </p>

          <div className="mt-8">
            {/* Project 1: 5401 Grover Ave */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-normal mb-2">5401 Grover Ave</h2>
                <p className="text-muted-foreground">Austin, TX 78756</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Stunning contemporary two-unit property built in 2019, located in the highly desired Brentwood neighborhood. 
                  This practically new home features designer detailing throughout, from beautiful wood flooring to stylish high-end lighting, 
                  creating a warm and welcoming ambiance in Central Austin.
                </p>
              </div>
              
              {/* Construction Progress Photos */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-center">Project Photos</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groverConstructionImages.map((image, index) => (
                    <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={() => openLightbox(groverConstructionImages, index)}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">{image.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-card rounded-lg p-6 mt-8">
                <h3 className="text-lg font-medium mb-4">Project Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-muted-foreground uppercase tracking-wider">Location</h4>
                    <p className="mb-4">5401 Grover Ave, Austin, TX 78756</p>
                    
                    <h4 className="font-medium text-sm mb-2 text-muted-foreground uppercase tracking-wider">Project Type</h4>
                    <p className="mb-4">New Construction - Custom Home</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-muted-foreground uppercase tracking-wider">Features</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Hunter green custom cabinetry with gold hardware</li>
                      <li>• Waterfall quartz countertops on oversized center island</li>
                      <li>• Commercial Bertazzoni stainless steel appliances</li>
                      <li>• 14 ft soaring vaulted ceiling in owner's suite</li>
                      <li>• Hunter Douglas shades and oversized windows</li>
                      <li>• Private backyard with deck and grassy area</li>
                      <li>• Modern 2-car carport with native landscaping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <Lightbox
        images={currentImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={currentImageIndex}
      />
    </div>
  );
};

export default NewConstruction;