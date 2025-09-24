import React, { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { useGalleryProperties } from "@/hooks/useSanity";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FullscreenCarousel } from "@/components/ui/image-carousel";
import { Badge } from "@/components/ui/badge";

const GalleryNew = () => {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [fullscreenImages, setFullscreenImages] = useState<Array<{src: string; alt: string; title: string}>>([]);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  // Fetch gallery data from Sanity
  const { data: allProperties, isLoading, error } = useGalleryProperties();
  const { data: residentialProperties } = useGalleryProperties("Residential");
  const { data: commercialProperties } = useGalleryProperties("Commercial");
  const { data: newConstructionProperties } = useGalleryProperties("New Construction");

  const openFullscreen = (images: Array<{src: string; alt: string; title: string}>, index: number) => {
    setFullscreenImages(images);
    setFullscreenIndex(index);
    setFullscreenOpen(true);
  };

  const renderPropertyCard = (property: any) => {
    const images = property.imageUrls || [];
    const imageObjects = images.map((img: any, idx: number) => ({
      src: img.url || img,
      alt: `${property.propertyAddress} - ${img.caption || `Image ${idx + 1}`}`,
      title: img.caption || `${property.propertyAddress} - Image ${idx + 1}`
    }));

    return (
      <Card key={property._id} className="overflow-hidden">
        <CardContent className="p-0">
          {images.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((img: any, index: number) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={img.url || img}
                        alt={`${property.propertyAddress} - ${img.caption || `Image ${index + 1}`}`}
                        className="w-full h-64 md:h-96 object-cover cursor-pointer"
                        onClick={() => openFullscreen(imageObjects, index)}
                      />
                      {img.imageType && (
                        <Badge 
                          className="absolute top-2 right-2"
                          variant={img.imageType === 'before' ? 'secondary' : 'default'}
                        >
                          {img.imageType.charAt(0).toUpperCase() + img.imageType.slice(1)}
                        </Badge>
                      )}
                      {img.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white text-sm">{img.caption}</p>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          ) : (
            <div className="flex items-center justify-center h-64 bg-muted">
              <p className="text-muted-foreground">No images available</p>
            </div>
          )}
        </CardContent>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{property.propertyAddress}</h3>
          {property.description && (
            <p className="text-muted-foreground mb-3">{property.description}</p>
          )}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {property.yearCompleted && (
              <span>Completed: {property.yearCompleted}</span>
            )}
            {property.featured && (
              <Badge variant="outline">Featured</Badge>
            )}
          </div>
        </div>
      </Card>
    );
  };

  const renderGallerySection = (properties: Array<any>, title: string) => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="h-64 bg-muted animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-muted animate-pulse rounded mb-2"></div>
                <div className="h-4 bg-muted animate-pulse rounded"></div>
              </div>
            </Card>
          ))}
        </div>
      );
    }

    if (!properties || properties.length === 0) {
      return (
        <div className="text-center text-muted-foreground py-16">
          <p>No properties available in this category.</p>
          <p className="text-sm mt-2">Please check back later for updates.</p>
        </div>
      );
    }

    // Sort properties: featured first, then by display order, then by created date
    const sortedProperties = [...properties].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.displayOrder !== b.displayOrder) {
        return (a.displayOrder || 999) - (b.displayOrder || 999);
      }
      return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProperties.map((property) => renderPropertyCard(property))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Gallery | Kennedy Equity Property Transformations"
        description="Explore Kennedy Equity's portfolio of property renovations and developments across Austin, TX. View our residential, commercial, and new construction projects."
        path="/gallery"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Kennedy Equity Property Gallery",
          description: "Property renovations and developments in Austin, TX",
        }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="container mt-10">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-normal mb-4">Property Gallery</h1>
            <p className="text-muted-foreground text-lg">
              Explore our portfolio of property transformations across Austin and surrounding areas. 
              Each property showcases our commitment to quality and strategic value creation.
            </p>
          </div>

          <Tabs defaultValue="all" className="mt-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-2xl mx-auto gap-1 h-auto p-1">
              <TabsTrigger value="all" className="px-4 py-2 text-sm font-medium">All Properties</TabsTrigger>
              <TabsTrigger value="residential" className="px-4 py-2 text-sm font-medium">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="px-4 py-2 text-sm font-medium">Commercial</TabsTrigger>
              <TabsTrigger value="construction" className="px-4 py-2 text-sm font-medium">New Construction</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              {renderGallerySection(allProperties || [], "All Properties")}
            </TabsContent>

            <TabsContent value="residential" className="mt-8">
              {renderGallerySection(residentialProperties || [], "Residential Properties")}
            </TabsContent>

            <TabsContent value="commercial" className="mt-8">
              {renderGallerySection(commercialProperties || [], "Commercial Properties")}
            </TabsContent>

            <TabsContent value="construction" className="mt-8">
              {renderGallerySection(newConstructionProperties || [], "New Construction Properties")}
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <FullscreenCarousel
        images={fullscreenImages}
        initialIndex={fullscreenIndex}
        isOpen={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default GalleryNew;