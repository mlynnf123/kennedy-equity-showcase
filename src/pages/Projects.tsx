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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePortfolioProperties } from "@/hooks/useSanity";

const Projects = () => {
  // Fetch portfolio data from Sanity
  const { data: sanityProjects } = usePortfolioProperties();

  // Fallback project data
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
      _id: 'flip-homes',
      name: 'Flip Homes',
      description: 'Strategic property renovations and resales in high-demand areas.',
      location: 'Greater Austin and Surrounding Areas',
      sector: 'Residential Investment',
      featuredImageUrl: flipHomesImg,
      propertyType: 'Residential Investment',
      status: 'Active',
      action: (
        <Link to="/gallery" className="inline-block">
          <Button variant="cta">View Gallery</Button>
        </Link>
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
      name: 'Co-Living Spaces',
      description: 'Modern co-living spaces for professionals and students.',
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
        } else if (project.name === "Flip Homes") {
          action = (
            <Link to="/gallery" className="inline-block">
              <Button variant="cta">View Gallery</Button>
            </Link>
          );
        } else if (project.name === "Co-Living Spaces") {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projectsToDisplay.map((project) => (
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;