import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import PortfolioCard from "@/components/site/PortfolioCard";
import residentialImg from "@/assets/portfolio-residential.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import flipHomesImg from "@/assets/portfolio-flip-homes.jpg";
import buyHoldImg from "@/assets/portfolio-buy-hold.jpg";
import coLivingImg from "@/assets/portfolio-co-living.jpg";
import soberLivingImg from "@/assets/portfolio-sober-living.jpg";
import remodeledImg from "@/assets/portfolio-remodeled.jpg";
import tourHomesImg from "@/assets/portfolio-tour-homes.jpg";
import modernBrickImg from "@/assets/portfolio-modern-brick.jpg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("pmi-austin");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["pmi-austin", "residential", "construction"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Portfolio | Kennedy Equity Investments"
        description="Explore Kennedy Equity's diverse portfolio: PMI Austin property management, single-family and multi-family residential properties, and active construction projects across the Austin metro area."
        path="/portfolio"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Kennedy Equity Portfolio",
          description: "Real estate investment portfolio featuring PMI Austin property management services, residential properties, and construction developments",
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
          <h1 className="text-3xl font-normal">Portfolio</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A selection of current investments. We prioritize markets with strong fundamentals and opportunities
            for operational value creation.
          </p>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 sm:max-w-lg">
              <TabsTrigger value="pmi-austin" className="text-xs sm:text-sm">PMI Austin</TabsTrigger>
              <TabsTrigger value="residential" className="text-xs sm:text-sm">Single & Multi Family</TabsTrigger>
              <TabsTrigger value="construction" className="text-xs sm:text-sm">Construction</TabsTrigger>
            </TabsList>

            <TabsContent value="pmi-austin" className="mt-6">
              <div className="relative p-6 rounded-lg border border-border bg-card">
                <div className="md:flex items-start gap-6">
                  <img src={residentialImg} alt="PMI Austin property management services" className="rounded-md w-full md:w-1/2 object-cover" />
                  <div className="flex-1 mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold">PMI Austin</h2>
                     <p className="text-muted-foreground mt-2">
                       400 units under management, specializing in single family management across Greater Austin and surrounding areas. Founded in 2019.
                     </p>
                     <ul className="mt-3 text-sm list-disc pl-5 text-muted-foreground space-y-1">
                       <li>400 units under management</li>
                       <li>Specializing in single family management</li>
                       <li>Greater Austin and surrounding areas</li>
                       <li>Founded in 2019</li>
                     </ul>
                     <a
                       href="https://www.pmiaustin.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4"
                    >
                      <Button variant="cta">Visit PMI Austin</Button>
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="residential" className="mt-6">
              <div className="space-y-6">
                <div>
                   <h3 className="text-xl font-semibold mb-4">Single Family and Multi Family Portfolio</h3>
                   <p className="text-muted-foreground mb-6">
                     Our residential portfolio includes flip homes, buy and hold properties, co-living, and sober living across Greater Austin and surrounding areas.
                   </p>
                </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <PortfolioCard
                     image={flipHomesImg}
                     name="Flip Homes"
                     description="Strategic property renovations and resales in high-demand areas."
                     location="Greater Austin and Surrounding Areas"
                     sector=""
                     action={
                       <Link
                         to={`${import.meta.env.BASE_URL}gallery`}
                         className="inline-block"
                       >
                         <Button variant="cta" size="lg">View Gallery</Button>
                       </Link>
                     }
                   />
                   <PortfolioCard
                     image={buyHoldImg}
                     name="Buy and Hold"
                     description="Long-term rental properties generating consistent cash flow."
                     location="Greater Austin and Surrounding Areas"
                     sector=""
                   />
                    <PortfolioCard
                      image={coLivingImg}
                      name="Co-Living"
                      description="Modern co-living spaces for professionals and students."
                      location="Greater Austin and Surrounding Areas"
                      sector=""
                      action={
                        <a
                          href="https://assetst.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button variant="cta" size="lg">Visit website</Button>
                        </a>
                      }
                    />
                   <PortfolioCard
                     image={soberLivingImg}
                     name="Sober Living"
                     description="Supportive residential facilities for recovery communities."
                     location="Greater Austin and Surrounding Areas"
                     sector=""
                     action={
                       <a
                         href="https://lionsdensoberliving.com/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-block"
                       >
                         <Button variant="cta" size="lg">Visit website</Button>
                       </a>
                     }
                   />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="construction" className="mt-6">
              <div className="space-y-6">
                <div>
                   <h3 className="text-xl font-semibold mb-4">Construction</h3>
                   <p className="text-muted-foreground mb-6">
                     Our construction division specializes in remodelled homes, tour homes, and new custom construction throughout Greater Austin and surrounding areas.
                   </p>
                </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <PortfolioCard
                     image={remodeledImg}
                     name="Remodelled Homes"
                     description="Complete home renovations transforming properties into modern living spaces."
                     location="Greater Austin and Surrounding Areas"
                     sector=""
                   />
                   <PortfolioCard
                     image={tourHomesImg}
                     name="Tour Homes"
                     description="Showcase homes demonstrating our construction quality and design capabilities."
                     location="Greater Austin and Surrounding Areas"
                     sector=""
                   />
                   <PortfolioCard
                     image={modernBrickImg}
                     name="New Custom Construction"
                     description="Custom homes tailored to client specifications with premium finishes."
                     location="Greater Austin and Surrounding Areas"
                     sector=""
                   />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
