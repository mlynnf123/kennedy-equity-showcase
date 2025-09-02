import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import rosedaleExteriorBefore from "@/assets/gallery-rosedale-exterior-before.jpg";
import rosedalePorchBefore from "@/assets/gallery-rosedale-porch-before.jpg";
import rosedaleBathroomBefore from "@/assets/gallery-rosedale-bathroom-before.jpg";
import rosedaleKitchenAfter1 from "@/assets/gallery-rosedale-kitchen-after-1.jpg";
import rosedaleKitchenAfter2 from "@/assets/gallery-rosedale-kitchen-after-2.jpg";
import rosedaleLivingAfter from "@/assets/gallery-rosedale-living-after.jpg";
import rosedaleExteriorAfter1 from "@/assets/gallery-rosedale-exterior-after-1.jpg";
import rosedaleExteriorAfter2 from "@/assets/gallery-rosedale-exterior-after-2.jpg";
import yauponKitchenBefore1 from "@/assets/gallery-yaupon-kitchen-before-1.jpg";
import yauponLivingBefore from "@/assets/gallery-yaupon-living-before.jpg";
import yauponExteriorBefore from "@/assets/gallery-yaupon-exterior-before.jpg";
import yauponOfficeBefore from "@/assets/gallery-yaupon-office-before.jpg";
import yauponKitchenBefore2 from "@/assets/gallery-yaupon-kitchen-before-2.jpg";
import yauponKitchenAfter1 from "@/assets/gallery-yaupon-kitchen-after-1.jpg";
import yauponKitchenAfter2 from "@/assets/gallery-yaupon-kitchen-after-2.jpg";
import yauponLivingAfter from "@/assets/gallery-yaupon-living-after.jpg";

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
                
                {/* After Photos */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-center">After</h3>
                  <div className="space-y-6">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleExteriorAfter1} 
                        alt="4506 Rosedale Ave exterior after renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Beautiful renovation with updated siding, porch, and professional landscaping
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleKitchenAfter1} 
                        alt="4506 Rosedale Ave kitchen after renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Modern Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Complete kitchen renovation with marble countertops and premium appliances
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleLivingAfter} 
                        alt="4506 Rosedale Ave living area after renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Living Area</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Renovated living space with updated flooring and staircase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: 1900 Yaupon Valley Rd */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-normal mb-2">1900 Yaupon Valley Rd</h2>
                <p className="text-muted-foreground">West Lake Hills, TX 78746</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Comprehensive renovation of this West Lake Hills home featuring modern updates 
                  while preserving the natural beauty of the hill country setting.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before Photos */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-center">Before</h3>
                  <div className="space-y-6">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponExteriorBefore} 
                        alt="1900 Yaupon Valley Rd exterior before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original exterior with mature landscaping and established trees
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponKitchenBefore1} 
                        alt="1900 Yaupon Valley Rd kitchen before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original kitchen with bay window and existing cabinetry
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponLivingBefore} 
                        alt="1900 Yaupon Valley Rd living room before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Living Room</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Spacious living area with vaulted ceilings and exposed beams
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponOfficeBefore} 
                        alt="1900 Yaupon Valley Rd office before renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Office/Study</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Home office space with natural lighting and wood trim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* After Photos */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-center">After</h3>
                  <div className="space-y-6">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponKitchenAfter1} 
                        alt="1900 Yaupon Valley Rd kitchen after renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Modern Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Stunning kitchen renovation with marble countertops, white subway tile, and floating shelves
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponKitchenAfter2} 
                        alt="1900 Yaupon Valley Rd kitchen island after renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Kitchen Island</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Beautiful kitchen island with marble countertops and modern lighting
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponLivingAfter} 
                        alt="1900 Yaupon Valley Rd living room after renovation"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Living Room</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Transformed living space with exposed white beams and modern furnishings
                        </p>
                      </div>
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