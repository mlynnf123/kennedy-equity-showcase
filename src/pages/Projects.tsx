import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/site/ProjectCard";
import residentialImg from "@/assets/portfolio-residential.jpg";
import flipHomesImg from "@/assets/portfolio-flip-homes.jpg";
import buyHoldImg from "@/assets/portfolio-buy-hold.jpg";
import coLivingImg from "@/assets/portfolio-co-living.jpg";
import soberLivingImg from "@/assets/portfolio-sober-living.png";
import remodeledImg from "@/assets/portfolio-remodeled.jpg";
import tourHomesImg from "@/assets/portfolio-tour-homes.jpg";
import modernBrickImg from "@/assets/portfolio-modern-brick.jpg";

// Import gallery images
import rosedaleExteriorAfter from "@/assets/gallery-rosedale-exterior-after-new.jpg";
import rosedaleKitchenAfter from "@/assets/gallery-rosedale-kitchen-after-new.jpg";
import rosedaleLivingAfter from "@/assets/gallery-rosedale-living-after-new.jpg";
import cupidExteriorAfter from "@/assets/gallery-cupid-exterior-after-new.webp";
import cupidKitchenAfter from "@/assets/gallery-cupid-kitchen-after-new.webp";
import cupidLivingAfter from "@/assets/gallery-cupid-living-after-new.webp";
import yauponKitchenAfter from "@/assets/gallery-yaupon-kitchen-after-new.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePortfolioProperties, useGalleryProperties } from "@/hooks/useSanity";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FullscreenCarousel } from "@/components/ui/image-carousel";
import { useState } from "react";

const Projects = () => {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [fullscreenImages, setFullscreenImages] = useState<Array<{src: string; alt: string; title: string}>>([]);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  // Fetch portfolio and gallery data from Sanity
  const { data: sanityProjects } = usePortfolioProperties();
  const { data: galleryProperties } = useGalleryProperties();

  // Fallback gallery data
  const fallbackGalleryData = [
    {
      _id: 'rosedale-property',
      propertyAddress: '4506 Rosedale Ave',
      imageUrls: [rosedaleExteriorAfter, rosedaleKitchenAfter, rosedaleLivingAfter],
      description: 'Beautiful craftsman renovation with modern updates throughout',
      yearCompleted: '2023'
    },
    {
      _id: 'cupid-property', 
      propertyAddress: '3210 Cupid Dr',
      imageUrls: [cupidExteriorAfter, cupidKitchenAfter, cupidLivingAfter],
      description: 'Strategic renovation of this South Austin brick home featuring updated interior spaces',
      yearCompleted: '2023'
    },
    {
      _id: 'yaupon-property',
      propertyAddress: '1900 Yaupon Valley Rd', 
      imageUrls: [yauponKitchenAfter],
      description: 'Hill country home renovation with modern kitchen and living spaces',
      yearCompleted: '2023'
    }
  ];

  const openFullscreen = (images: Array<{src: string; alt: string; title: string}>, index: number) => {
    setFullscreenImages(images);
    setFullscreenIndex(index);
    setFullscreenOpen(true);
  };

  // Fallback project data - organized for anchor navigation
  const fallbackProjects = [
    {
      _id: 'pmi-austin',
      name: 'PMI Austin',
      description: '400 units under management, specializing in single family management across Greater Austin and surrounding areas. Founded in 2019.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Property Management',
      featuredImageUrl: residentialImg,
      propertyType: 'Property Management Company',
      investmentAmount: '400 units',
      status: 'Active',
      action: (
        <a
          href="https://www.pmiaustin.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="cta">Visit PMI Austin</Button>
        </a>
      )
    },
    {
      _id: 'avenue-b',
      name: 'Avenue B',
      description: 'Strategic property renovations and resales in high-demand areas.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Residential Investment',
      featuredImageUrl: flipHomesImg,
      propertyType: 'Residential Investment',
      status: 'Active',
      action: (
        <Button variant="cta" onClick={() => {
          const gallerySection = document.querySelector('[data-gallery-section]');
          if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}>View Photos</Button>
      )
    },
    {
      _id: 'buy-hold',
      name: 'Buy and Hold Properties',
      description: 'Long-term rental properties generating consistent cash flow.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Rental Properties',
      featuredImageUrl: buyHoldImg,
      propertyType: 'Rental Properties',
      status: 'Active'
    },
    {
      _id: 'co-living',
      name: 'Co-Living Housing',
      description: 'Modern co-living housing for professionals and students.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Co-Living',
      featuredImageUrl: coLivingImg,
      propertyType: 'Co-Living',
      status: 'Active',
      action: (
        <a href="https://assetst.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <Button variant="cta">Visit website</Button>
        </a>
      )
    },
    {
      _id: 'sober-living',
      name: 'Lions Den Sober Living',
      description: 'Supportive residential facilities for recovery communities.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Sober Living',
      featuredImageUrl: soberLivingImg,
      propertyType: 'Sober Living Facilities',
      status: 'Active',
      action: (
        <a href="https://lionsdensoberliving.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <Button variant="cta">Visit website</Button>
        </a>
      )
    },
    {
      _id: 'remodeled-homes',
      name: 'Remodelled Homes',
      description: 'Complete home renovations transforming properties into modern living spaces.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Construction',
      featuredImageUrl: remodeledImg,
      propertyType: 'Renovation Projects',
      status: 'Active'
    },
    {
      _id: 'tour-homes',
      name: 'Tour Homes',
      description: 'Showcase homes demonstrating our construction quality and design capabilities.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Construction',
      featuredImageUrl: tourHomesImg,
      propertyType: 'Showcase Properties',
      status: 'Active'
    },
    {
      _id: 'custom-construction',
      name: 'New Custom Construction',
      description: 'Custom homes tailored to client specifications with premium finishes.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Construction',
      featuredImageUrl: modernBrickImg,
      propertyType: 'Custom Homes',
      status: 'Active'
    }
  ];

  // Use Sanity data if available, otherwise use fallback
  const projectsToDisplay = sanityProjects && sanityProjects.length > 0 
    ? sanityProjects.map(project => {
        // Map action based on project name for Sanity data
        let action = null;
        if (project.name === "PMI Austin") {
          action = (
            <a href="https://www.pmiaustin.net" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="cta">Visit PMI Austin</Button>
            </a>
          );
        } else if (project.name === "Avenue B") {
          action = (
            <Button variant="cta" onClick={() => {
              const gallerySection = document.querySelector('[data-gallery-section]');
              if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}>View Photos</Button>
          );
        } else if (project.name === "Co-Living Housing") {
          action = (
            <a href="https://assetst.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="cta">Visit website</Button>
            </a>
          );
        } else if (project.name === "Lions Den Sober Living") {
          action = (
            <a href="https://lionsdensoberliving.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button variant="cta">Visit website</Button>
            </a>
          );
        }
        return { ...project, action };
      })
    : fallbackProjects;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Projects | Kennedy Equity Investments"
        description="Explore Kennedy Equity's diverse projects: PMI Austin property management, single-family and multi-family residential properties, and active construction projects across the Austin metro area."
        path="/projects"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Kennedy Equity Projects",
          description: "Real estate investment projects featuring PMI Austin property management services, residential properties, and construction developments",
          mainEntity: [
            {
              "@type": "RealEstateAgent",
              name: "PMI Austin",
              url: "https://www.propertymanagementinc.com/offices/pmi-austin/",
              areaServed: "Austin, TX"
            }
          ]
        }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="container mt-10">
          <h1 className="text-3xl font-normal">Projects</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A comprehensive view of our current investments and developments. We prioritize markets with strong fundamentals 
            and opportunities for operational value creation across property management, residential investments, and construction.
          </p>

          {/* Property Management Section */}
          <div id="pmi-austin" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-6">Property Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsToDisplay.filter(p => p._id === 'pmi-austin').map((project) => (
                <ProjectCard
                  key={project._id}
                  image={project.featuredImageUrl || residentialImg}
                  name={project.name}
                  description={project.description || ""}
                  location={project.location || ""}
                  action={project.action}
                />
              ))}
            </div>
          </div>

          {/* Residential Investment Section */}
          <div id="residential" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-semibold mb-6">Residential Investments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsToDisplay.filter(p => ['avenue-b', 'buy-hold', 'co-living', 'sober-living'].includes(p._id)).map((project) => (
                <div key={project._id} id={project._id}>
                  <ProjectCard
                    image={project.featuredImageUrl || residentialImg}
                    name={project.name}
                    description={project.description || ""}
                    location={project.location || ""}
                    action={project.action}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Construction Section */}
          <div id="construction" className="scroll-mt-20 mt-12">
            <h2 className="text-2xl font-semibold mb-6">Construction Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsToDisplay.filter(p => ['remodeled-homes', 'tour-homes', 'custom-construction'].includes(p._id)).map((project) => (
                <div key={project._id} id={project._id}>
                  <ProjectCard
                    image={project.featuredImageUrl || residentialImg}
                    name={project.name}
                    description={project.description || ""}
                    location={project.location || ""}
                    action={project.action}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Gallery Section */}
        <section className="container mt-16" data-gallery-section>
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-normal mb-4">Property Gallery</h2>
              <p className="text-muted-foreground text-lg">
                Explore our completed property transformations across Austin and surrounding areas.
              </p>
            </div>

            <div className="space-y-12">
              {(galleryProperties && galleryProperties.length > 0 ? galleryProperties : fallbackGalleryData).map((property) => {
                const images = property.imageUrls || [];
                const imageObjects = images.map((img: string, idx: number) => ({
                  src: img,
                  alt: `${property.propertyAddress} - Image ${idx + 1}`,
                  title: `${property.propertyAddress} - Image ${idx + 1}`
                }));

                return (
                  <div key={property._id} className="bg-card border border-border rounded-lg p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold">{property.propertyAddress}</h3>
                      {property.description && (
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                          {property.description}
                        </p>
                      )}
                      {property.yearCompleted && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Completed: {property.yearCompleted}
                        </p>
                      )}
                    </div>

                    {images.length > 0 && (
                      <Carousel className="w-full max-w-4xl mx-auto">
                        <CarouselContent>
                          {images.map((imgUrl: string, index: number) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1">
                                <img
                                  src={imgUrl}
                                  alt={`${property.propertyAddress} - Image ${index + 1}`}
                                  className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => openFullscreen(imageObjects, index)}
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {images.length > 3 && (
                          <>
                            <CarouselPrevious />
                            <CarouselNext />
                          </>
                        )}
                      </Carousel>
                    )}
                  </div>
                );
              })}
            </div>
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

export default Projects;