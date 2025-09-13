import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { Lightbox } from "@/components/ui/lightbox";
import { useGalleryItems } from "@/hooks/useSanity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import all the original images
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

  // Fetch gallery data from Sanity
  const { data: allGalleryItems, isLoading, error } = useGalleryItems();
  const { data: residentialItems } = useGalleryItems("Residential");
  const { data: commercialItems } = useGalleryItems("Commercial");
  const { data: newConstructionItems } = useGalleryItems("New Construction");

  // Define original gallery data as fallback
  const fallbackGalleryData = [
    // 3210 Cupid Dr Properties
    {
      _id: 'cupid-exterior',
      propertyName: '3210 Cupid Dr',
      roomType: 'Front Exterior',
      beforeImageUrl: cupidExteriorBefore,
      afterImageUrl: cupidExteriorAfter,
      description: 'Strategic renovation of this South Austin brick home featuring updated interior spaces and enhanced functionality while maintaining its classic charm.',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'cupid-kitchen',
      propertyName: '3210 Cupid Dr',
      roomType: 'Kitchen',
      beforeImageUrl: cupidKitchenBefore1,
      afterImageUrl: cupidKitchenAfter,
      description: 'Complete kitchen transformation with sage green cabinets, white quartz island, and designer fixtures',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'cupid-living',
      propertyName: '3210 Cupid Dr',
      roomType: 'Living Area',
      beforeImageUrl: cupidLivingBefore,
      afterImageUrl: cupidLivingAfter,
      description: 'Open concept living with floating staircase and contemporary design',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'cupid-loft',
      propertyName: '3210 Cupid Dr',
      roomType: 'Loft Office',
      beforeImageUrl: cupidBedroomBefore,
      afterImageUrl: cupidLoftAfter,
      description: 'Converted bedroom to sophisticated loft office with modern railings',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'cupid-bathroom',
      propertyName: '3210 Cupid Dr',
      roomType: 'Master Bathroom',
      beforeImageUrl: cupidKitchenBefore2,
      afterImageUrl: cupidBathroomAfter,
      description: 'Luxury spa bathroom with glass shower and freestanding tub',
      category: 'Residential',
      yearCompleted: '2023'
    },
    // 4506 Rosedale Ave Properties
    {
      _id: 'rosedale-exterior',
      propertyName: '4506 Rosedale Ave',
      roomType: 'Front Exterior',
      beforeImageUrl: rosedaleExteriorBeforeNew,
      afterImageUrl: rosedaleExteriorAfter,
      description: 'Beautiful craftsman renovation with white columns and updated siding',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'rosedale-kitchen',
      propertyName: '4506 Rosedale Ave',
      roomType: 'Kitchen',
      beforeImageUrl: rosedaleKitchenBeforeNew,
      afterImageUrl: rosedaleKitchenAfter,
      description: 'Stunning kitchen with white shaker cabinets and marble countertops',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'rosedale-living',
      propertyName: '4506 Rosedale Ave',
      roomType: 'Living Room',
      beforeImageUrl: rosedaleLivingBeforeNew,
      afterImageUrl: rosedaleLivingAfter,
      description: 'Open living space with updated staircase and hardwood floors',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'rosedale-dining',
      propertyName: '4506 Rosedale Ave',
      roomType: 'Kitchen Island & Dining',
      beforeImageUrl: rosedalePorchBeforeNew,
      afterImageUrl: rosedaleKitchenIslandAfter,
      description: 'Large gray kitchen island with marble top and elegant dining area',
      category: 'Residential',
      yearCompleted: '2023'
    },
    // 1900 Yaupon Valley Rd Properties
    {
      _id: 'yaupon-kitchen',
      propertyName: '1900 Yaupon Valley Rd',
      roomType: 'Kitchen',
      beforeImageUrl: yauponKitchenBeforeNew,
      afterImageUrl: yauponKitchenAfterNew,
      description: 'Modern kitchen with marble countertops and floating shelves',
      category: 'Residential',
      yearCompleted: '2023'
    },
    {
      _id: 'yaupon-living',
      propertyName: '1900 Yaupon Valley Rd',
      roomType: 'Living Room',
      beforeImageUrl: yauponDiningBefore,
      afterImageUrl: yauponLivingAfter,
      description: 'Transformed living space with exposed white beams',
      category: 'Residential',
      yearCompleted: '2023'
    }
  ];

  const openLightbox = (images: Array<{src: string; alt: string; title: string}>, index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Helper function to create before/after image pairs from Sanity data
  const createImagePairsFromGalleryItems = (items: Array<any>) => {
    return items?.map(item => ({
      before: {
        src: item.beforeImageUrl || "/placeholder.svg",
        alt: `${item.propertyName} ${item.roomType} - Before`,
        title: `${item.propertyName} - ${item.roomType} (Before)`
      },
      after: {
        src: item.afterImageUrl || "/placeholder.svg", 
        alt: `${item.propertyName} ${item.roomType} - After`,
        title: `${item.propertyName} - ${item.roomType} (After)`
      },
      description: item.description,
      propertyName: item.propertyName,
      roomType: item.roomType,
      yearCompleted: item.yearCompleted
    })) || [];
  };

  // Group gallery items by property
  const groupItemsByProperty = (items: Array<any>) => {
    const grouped = items?.reduce((acc, item) => {
      const key = item.propertyName;
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {} as Record<string, Array<any>>) || {};
    
    return Object.entries(grouped);
  };

  const renderGallerySection = (items: Array<any>, title: string) => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-muted animate-pulse rounded-lg"></div>
              <div className="h-4 bg-muted animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      );
    }

    // Use fallback data if Sanity data is empty or errored, but filter by category if specified
    let dataToUse = items;
    if (!dataToUse || dataToUse.length === 0 || error) {
      dataToUse = title === "All Projects" ? fallbackGalleryData : 
                  title === "Residential Projects" ? fallbackGalleryData.filter(item => item.category === 'Residential') :
                  title === "Commercial Projects" ? fallbackGalleryData.filter(item => item.category === 'Commercial') :
                  title === "New Construction Projects" ? fallbackGalleryData.filter(item => item.category === 'New Construction') :
                  fallbackGalleryData;
    }

    const properties = groupItemsByProperty(dataToUse || []);

    if (properties.length === 0) {
      return (
        <div className="text-center text-muted-foreground py-8">
          No gallery items available in this category.
        </div>
      );
    }

    return (
      <div className="space-y-12">
        {properties.map(([propertyName, propertyItems]) => (
          <div key={propertyName} className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{propertyName}</h3>
              {propertyItems[0]?.description && (
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                  {propertyItems[0].description}
                </p>
              )}
              {propertyItems[0]?.yearCompleted && (
                <p className="text-sm text-muted-foreground mt-1">
                  Completed: {propertyItems[0].yearCompleted}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {propertyItems.map((item, itemIndex) => {
                const beforeImages = [{
                  src: item.beforeImageUrl || "/placeholder.svg",
                  alt: `${item.propertyName} ${item.roomType} - Before`,
                  title: `${item.propertyName} - ${item.roomType} (Before)`
                }];
                const afterImages = [{
                  src: item.afterImageUrl || "/placeholder.svg",
                  alt: `${item.propertyName} ${item.roomType} - After`, 
                  title: `${item.propertyName} - ${item.roomType} (After)`
                }];

                return (
                  <div key={item._id} className="space-y-4">
                    <h4 className="text-lg font-medium text-center">{item.roomType}</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {/* Before Image */}
                      <div className="space-y-2">
                        <img
                          src={item.beforeImageUrl || "/placeholder.svg"}
                          alt={`${item.propertyName} ${item.roomType} - Before`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openLightbox(beforeImages, 0)}
                          loading="lazy"
                        />
                        <p className="text-sm text-muted-foreground text-center">Before</p>
                      </div>

                      {/* After Image */}
                      <div className="space-y-2">
                        <img
                          src={item.afterImageUrl || "/placeholder.svg"}
                          alt={`${item.propertyName} ${item.roomType} - After`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openLightbox(afterImages, 0)}
                          loading="lazy"
                        />
                        <p className="text-sm text-muted-foreground text-center">After</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Gallery | Kennedy Equity Property Transformations"
        description="Explore before and after photos of Kennedy Equity's property renovations and developments across Austin, TX. See our residential, commercial, and new construction projects."
        path="/gallery"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Kennedy Equity Property Gallery",
          description: "Before and after photos of property renovations and developments in Austin, TX",
        }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="container mt-10">
          <h1 className="text-3xl font-normal">Gallery</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Explore our portfolio of property transformations across Austin and surrounding areas. 
            From residential renovations to new construction, see how we create value through strategic improvements.
          </p>

          <Tabs defaultValue="all" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 max-w-lg">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="construction">New Construction</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              {renderGallerySection(allGalleryItems || [], "All Projects")}
            </TabsContent>

            <TabsContent value="residential" className="mt-8">
              {renderGallerySection(residentialItems || [], "Residential Projects")}
            </TabsContent>

            <TabsContent value="commercial" className="mt-8">
              {renderGallerySection(commercialItems || [], "Commercial Projects")}
            </TabsContent>

            <TabsContent value="construction" className="mt-8">
              {renderGallerySection(newConstructionItems || [], "New Construction Projects")}
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Lightbox
        images={currentImages}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />

      <Footer />
    </div>
  );
};

export default Gallery;