import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { Lightbox } from "@/components/ui/lightbox";
import rosedaleExteriorBeforeNew from "@/assets/gallery-rosedale-exterior-before-new.jpg";
import rosedaleKitchenBeforeNew from "@/assets/gallery-rosedale-kitchen-before-new.jpg";
import rosedaleLivingBeforeNew from "@/assets/gallery-rosedale-living-before-new.jpg";
import rosedalePorchBeforeNew from "@/assets/gallery-rosedale-porch-before-new.jpg";
import rosedaleExteriorAfter from "@/assets/gallery-rosedale-exterior-after-new.jpg";
import rosedaleKitchenAfter from "@/assets/gallery-rosedale-kitchen-after-new.jpg";
import rosedaleKitchenIslandAfter from "@/assets/gallery-rosedale-kitchen-island-after-new.jpg";
import rosedaleLivingAfter from "@/assets/gallery-rosedale-living-after-new.jpg";
import yauponDiningBefore from "@/assets/gallery-yaupon-dining-before.webp";
import yauponBathroomBefore from "@/assets/gallery-yaupon-bathroom-before.webp";
import yauponMasterBathroomBefore from "@/assets/gallery-yaupon-master-bathroom-before.webp";
import yauponKitchenBeforeNew from "@/assets/gallery-yaupon-kitchen-before-new.webp";
import yauponExteriorBeforeNew from "@/assets/gallery-yaupon-exterior-before-new.webp";

import yauponKitchenAfter1 from "@/assets/gallery-yaupon-kitchen-after-1.jpg";
import yauponKitchenAfter2 from "@/assets/gallery-yaupon-kitchen-after-2.jpg";
import yauponKitchenAfterNew from "@/assets/gallery-yaupon-kitchen-after-new.jpg";
import yauponLivingAfter from "@/assets/gallery-yaupon-living-after.jpg";
import cupidExteriorBefore from "@/assets/gallery-cupid-exterior-before-new.jpg";
import cupidKitchenBefore1 from "@/assets/gallery-cupid-kitchen-before-new-1.jpg";
import cupidKitchenBefore2 from "@/assets/gallery-cupid-kitchen-before-new-2.jpg";
import cupidLivingBefore from "@/assets/gallery-cupid-living-before-new.jpg";
import cupidBedroomBefore from "@/assets/gallery-cupid-bedroom-before-new.jpg";
import cupidExteriorAfter from "@/assets/gallery-cupid-exterior-after-new.webp";
import cupidKitchenAfter from "@/assets/gallery-cupid-kitchen-after-new.webp";
import cupidLivingAfter from "@/assets/gallery-cupid-living-after-new.webp";
import cupidLoftAfter from "@/assets/gallery-cupid-loft-after-new.webp";
import cupidBathroomAfter from "@/assets/gallery-cupid-bathroom-after-new.webp";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<Array<{src: string; alt: string; title: string}>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (images: Array<{src: string; alt: string; title: string}>, index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Define image arrays for each project
  const cupidBeforeImages = [
    { src: cupidExteriorBefore, alt: "3210 Cupid Dr exterior before renovation", title: "Front Exterior - Before" },
    { src: cupidKitchenBefore1, alt: "3210 Cupid Dr kitchen before renovation", title: "Original Kitchen - Before" },
    { src: cupidKitchenBefore2, alt: "3210 Cupid Dr kitchen alternate view before renovation", title: "Kitchen Detail - Before" },
    { src: cupidLivingBefore, alt: "3210 Cupid Dr living area before renovation", title: "Living & Dining Area - Before" },
    { src: cupidBedroomBefore, alt: "3210 Cupid Dr bedroom before renovation", title: "Master Bedroom - Before" }
  ];

  const cupidAfterImages = [
    { src: cupidExteriorAfter, alt: "3210 Cupid Dr exterior after renovation", title: "Modern Exterior - After" },
    { src: cupidKitchenAfter, alt: "3210 Cupid Dr kitchen after renovation", title: "Modern Kitchen - After" },
    { src: cupidLivingAfter, alt: "3210 Cupid Dr living area after renovation", title: "Living Area - After" },
    { src: cupidLoftAfter, alt: "3210 Cupid Dr loft after renovation", title: "Upper Loft Office - After" },
    { src: cupidBathroomAfter, alt: "3210 Cupid Dr master bathroom after renovation", title: "Master Bathroom - After" }
  ];

  const rosedaleBeforeImages = [
    { src: rosedaleExteriorBeforeNew, alt: "4506 Rosedale Ave exterior before renovation", title: "Front Exterior - Before" },
    { src: rosedaleKitchenBeforeNew, alt: "4506 Rosedale Ave kitchen before renovation", title: "Kitchen - Before" },
    { src: rosedaleLivingBeforeNew, alt: "4506 Rosedale Ave living room before renovation", title: "Living Room - Before" },
    { src: rosedalePorchBeforeNew, alt: "4506 Rosedale Ave porch before renovation", title: "Front Porch - Before" }
  ];

  const rosedaleAfterImages = [
    { src: rosedaleExteriorAfter, alt: "4506 Rosedale Ave exterior after renovation", title: "Charming Craftsman Exterior - After" },
    { src: rosedaleKitchenAfter, alt: "4506 Rosedale Ave kitchen after renovation", title: "Designer Kitchen - After" },
    { src: rosedaleLivingAfter, alt: "4506 Rosedale Ave living area after renovation", title: "Modern Living Area - After" },
    { src: rosedaleKitchenIslandAfter, alt: "4506 Rosedale Ave kitchen island after renovation", title: "Kitchen Island & Dining - After" }
  ];

  const yauponBeforeImages = [
    { src: yauponExteriorBeforeNew, alt: "1900 Yaupon Valley Rd exterior before renovation", title: "Front Exterior - Before" },
    { src: yauponKitchenBeforeNew, alt: "1900 Yaupon Valley Rd kitchen before renovation", title: "Kitchen - Before" },
    { src: yauponDiningBefore, alt: "1900 Yaupon Valley Rd dining room before renovation", title: "Dining Room - Before" },
    { src: yauponBathroomBefore, alt: "1900 Yaupon Valley Rd bathroom before renovation", title: "Guest Bathroom - Before" },
    { src: yauponMasterBathroomBefore, alt: "1900 Yaupon Valley Rd master bathroom before renovation", title: "Master Bathroom - Before" }
  ];

  const yauponAfterImages = [
    { src: yauponKitchenAfter1, alt: "1900 Yaupon Valley Rd kitchen after renovation", title: "Modern Kitchen - After" },
    { src: yauponKitchenAfter2, alt: "1900 Yaupon Valley Rd kitchen island after renovation", title: "Kitchen Island - After" },
    { src: yauponKitchenAfterNew, alt: "1900 Yaupon Valley Rd kitchen complete renovation", title: "Complete Kitchen Renovation - After" },
    { src: yauponLivingAfter, alt: "1900 Yaupon Valley Rd living room after renovation", title: "Living Room - After" }
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Property Transformation Gallery | Kennedy Equity Real Estate"
        description="View stunning before and after photos of our Austin area property renovations. See complete transformations of homes in Austin, West Lake Hills, and surrounding areas with professional interior design and modern upgrades."
        path="/gallery"
        image={cupidExteriorAfter}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Kennedy Equity Property Transformation Gallery",
          description: "Professional before and after photos showcasing complete property renovations and flips by Kennedy Equity Investments across Greater Austin and surrounding areas",
          url: "https://kennedyequity.com/gallery",
          image: [
            cupidExteriorAfter,
            cupidKitchenAfter,
            rosedaleExteriorAfter,
            rosedaleKitchenAfter,
            yauponKitchenAfterNew
          ],
          creator: {
            "@type": "Organization",
            name: "Kennedy Equity Investments",
            url: "https://kennedyequity.com",
            description: "Austin-based real estate investment company specializing in property renovations and flips"
          },
          about: [
            {
              "@type": "Place",
              name: "Austin, Texas",
              description: "Greater Austin area property renovations"
            },
            {
              "@type": "Service",
              name: "Property Renovation",
              description: "Complete home transformations and modern upgrades"
            },
            {
              "@type": "Service", 
              name: "Real Estate Investment",
              description: "Strategic property acquisitions and value-add improvements"
            }
          ],
          mainEntity: [
            {
              "@type": "PropertyValue",
              name: "Location Focus",
              value: "Austin, West Lake Hills, Greater Austin Area"
            },
            {
              "@type": "PropertyValue",
              name: "Project Types", 
              value: "Single-family home renovations, kitchen remodels, complete transformations"
            },
            {
              "@type": "PropertyValue",
              name: "Portfolio Size",
              value: "15+ completed renovations showcased"
            }
          ]
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
            {/* Project 1: 3210 Cupid Dr */}
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-normal mb-2">3210 Cupid Dr</h2>
                <p className="text-muted-foreground">Austin, TX 78735</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Strategic renovation of this South Austin brick home featuring updated interior spaces 
                  and enhanced functionality while maintaining its classic charm.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before Photos */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-center">Before</h3>
                  <div className="space-y-6">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidExteriorBefore} 
                        alt="3210 Cupid Dr exterior before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidBeforeImages, 0)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original brick ranch home with carport under mature oak tree
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidKitchenBefore1} 
                        alt="3210 Cupid Dr kitchen before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidBeforeImages, 1)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Original Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Galley kitchen with white cabinets, tile flooring, and breakfast bar
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidKitchenBefore2} 
                        alt="3210 Cupid Dr kitchen alternate view before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidBeforeImages, 2)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Kitchen Detail</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Close-up view of original white cabinetry and laminate countertops
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidLivingBefore} 
                        alt="3210 Cupid Dr living area before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidBeforeImages, 3)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Living & Dining Area</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Open living space with stone accent wall, hardwood floors, and track lighting
                        </p>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidBedroomBefore} 
                        alt="3210 Cupid Dr bedroom before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidBeforeImages, 4)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Master Bedroom</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Spacious bedroom with hardwood floors, wood closet doors, and ceiling fan
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
                        src={cupidExteriorAfter} 
                        alt="3210 Cupid Dr exterior after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidAfterImages, 0)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Modern Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Stunning contemporary design featuring stone, wood accents, and clean lines under mature oak trees
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidKitchenAfter} 
                        alt="3210 Cupid Dr kitchen after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidAfterImages, 1)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Modern Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Designer kitchen with sage green cabinets, white quartz island, and pendant lighting
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidLivingAfter} 
                        alt="3210 Cupid Dr living area after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidAfterImages, 2)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Living Area</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Open concept living with floating staircase, built-in cabinetry, and contemporary design
                        </p>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidLoftAfter} 
                        alt="3210 Cupid Dr loft after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidAfterImages, 3)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Upper Loft Office</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Sophisticated loft office with modern railings, clerestory windows, and hardwood floors
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={cupidBathroomAfter} 
                        alt="3210 Cupid Dr master bathroom after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(cupidAfterImages, 4)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Master Bathroom</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Luxury spa bathroom with glass shower, freestanding tub, and modern fixtures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: 4506 Rosedale Ave */}
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
                        src={rosedaleExteriorBeforeNew} 
                        alt="4506 Rosedale Ave exterior before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleBeforeImages, 0)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Charming Austin home with original siding, stone pathway, and mature trees
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleKitchenBeforeNew} 
                        alt="4506 Rosedale Ave kitchen before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleBeforeImages, 1)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original galley kitchen with white cabinetry, tile flooring, and black appliances
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleLivingBeforeNew} 
                        alt="4506 Rosedale Ave living room before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleBeforeImages, 2)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Living Room</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Cozy living space with brick fireplace, hardwood floors, and natural lighting
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedalePorchBeforeNew} 
                        alt="4506 Rosedale Ave porch before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleBeforeImages, 3)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Porch</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Covered front porch with concrete flooring and traditional outdoor furniture
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
                        src={rosedaleExteriorAfter} 
                        alt="4506 Rosedale Ave exterior after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleAfterImages, 0)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Charming Craftsman Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Beautiful craftsman renovation with white columns, updated siding, and mature tree landscaping
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleKitchenAfter} 
                        alt="4506 Rosedale Ave kitchen after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleAfterImages, 1)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Designer Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Stunning kitchen with white shaker cabinets, marble countertops, subway tile, and stainless appliances
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleLivingAfter} 
                        alt="4506 Rosedale Ave living area after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleAfterImages, 2)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Modern Living Area</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Open living space with updated staircase, beautiful hardwood floors, and contemporary lighting
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={rosedaleKitchenIslandAfter} 
                        alt="4506 Rosedale Ave kitchen island after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(rosedaleAfterImages, 3)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Kitchen Island & Dining</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Large gray kitchen island with marble top, pendant lighting, and dining area with elegant chandelier
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: 1900 Yaupon Valley Rd */}
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
                        src={yauponExteriorBeforeNew} 
                        alt="1900 Yaupon Valley Rd exterior before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponBeforeImages, 0)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Front Exterior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Hill country home nestled among mature oak trees with original siding and natural landscape
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponKitchenBeforeNew} 
                        alt="1900 Yaupon Valley Rd kitchen before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponBeforeImages, 1)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Kitchen</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Original galley kitchen with wood cabinetry, tile floors, and large windows overlooking the trees
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponDiningBefore} 
                        alt="1900 Yaupon Valley Rd dining room before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponBeforeImages, 2)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Dining Room</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Elegant dining space with crystal chandelier, hardwood floors, and panoramic windows
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponBathroomBefore} 
                        alt="1900 Yaupon Valley Rd bathroom before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponBeforeImages, 3)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Guest Bathroom</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Clean guest bathroom with white tile surround and wood trim accents
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponMasterBathroomBefore} 
                        alt="1900 Yaupon Valley Rd master bathroom before renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponBeforeImages, 4)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Master Bathroom</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Spacious master bath with double vanity, tile countertops, and abundant natural light
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
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponAfterImages, 0)}
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
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponAfterImages, 1)}
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
                        src={yauponKitchenAfterNew} 
                        alt="1900 Yaupon Valley Rd kitchen complete renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponAfterImages, 2)}
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-sm">Complete Kitchen Renovation</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Stunning kitchen transformation featuring modern cabinetry, quartz countertops, and premium appliances
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={yauponLivingAfter} 
                        alt="1900 Yaupon Valley Rd living room after renovation"
                        className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => openLightbox(yauponAfterImages, 3)}
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
      
      <Lightbox
        images={currentImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        initialIndex={currentImageIndex}
      />
    </div>
  );
};

export default Gallery;