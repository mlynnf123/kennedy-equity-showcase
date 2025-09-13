import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { Lightbox } from "@/components/ui/lightbox";
import { useGalleryItems } from "@/hooks/useSanity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<Array<{src: string; alt: string; title: string}>>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch gallery data from Sanity
  const { data: allGalleryItems, isLoading, error } = useGalleryItems();
  const { data: residentialItems } = useGalleryItems("Residential");
  const { data: commercialItems } = useGalleryItems("Commercial");
  const { data: newConstructionItems } = useGalleryItems("New Construction");

  const openLightbox = (images: Array<{src: string; alt: string; title: string}>, index: number) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Helper function to create before/after image pairs from Sanity data
  const createImagePairsFromGalleryItems = (items: Array<any>) => {
    return items?.map(item => ({
      before: {
        src: item.beforeImage || "/placeholder.svg",
        alt: `${item.propertyName} ${item.roomType} - Before`,
        title: `${item.propertyName} - ${item.roomType} (Before)`
      },
      after: {
        src: item.afterImage || "/placeholder.svg", 
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

    if (error) {
      return (
        <div className="text-center text-muted-foreground py-8">
          Unable to load gallery images at this time.
        </div>
      );
    }

    const properties = groupItemsByProperty(items || []);

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
                  src: item.beforeImage || "/placeholder.svg",
                  alt: `${item.propertyName} ${item.roomType} - Before`,
                  title: `${item.propertyName} - ${item.roomType} (Before)`
                }];
                const afterImages = [{
                  src: item.afterImage || "/placeholder.svg",
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
                          src={item.beforeImage || "/placeholder.svg"}
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
                          src={item.afterImage || "/placeholder.svg"}
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