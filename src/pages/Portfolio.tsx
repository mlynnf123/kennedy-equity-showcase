import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import PortfolioCard from "@/components/site/PortfolioCard";
import residentialImg from "@/assets/portfolio-residential.jpg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePortfolioProperties } from "@/hooks/useSanity";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("pmi-austin");
  
  // Fetch portfolio data from Sanity
  const { data: pmiAustinProperties } = usePortfolioProperties("PMI Austin");
  const { data: residentialProperties } = usePortfolioProperties("Single & Multi Family");
  const { data: constructionProperties } = usePortfolioProperties("Construction");

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
              {pmiAustinProperties?.map((property) => (
                <div key={property._id} className="relative p-6 rounded-lg border border-border bg-card">
                  <div className="md:flex items-start gap-6">
                    <img 
                      src={property.featuredImageUrl || residentialImg} 
                      alt={`${property.name} - ${property.description}`} 
                      className="rounded-md w-full md:w-1/2 object-cover" 
                    />
                    <div className="flex-1 mt-4 md:mt-0">
                      <h2 className="text-2xl font-semibold">{property.name}</h2>
                      <p className="text-muted-foreground mt-2">
                        {property.description}
                      </p>
                      {property.location && (
                        <p className="mt-3 text-sm text-muted-foreground">
                          <strong>Location:</strong> {property.location}
                        </p>
                      )}
                      {property.investmentAmount && (
                        <p className="text-sm text-muted-foreground">
                          <strong>Investment:</strong> {property.investmentAmount}
                        </p>
                      )}
                      {property.status && (
                        <p className="text-sm text-muted-foreground">
                          <strong>Status:</strong> {property.status}
                        </p>
                      )}
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
              )) || (
                <div className="text-center text-muted-foreground py-8">
                  Loading PMI Austin properties...
                </div>
              )}
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
                  {residentialProperties?.map((property) => {
                    // Special actions for specific properties
                    let action = null;
                    if (property.name === "Flip Homes") {
                      action = (
                        <Link to="/gallery" className="inline-block">
                          <Button variant="cta" size="lg">View Gallery</Button>
                        </Link>
                      );
                    } else if (property.name === "Co-Living Spaces") {
                      action = (
                        <a href="https://assetst.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
                          <Button variant="cta" size="lg">Visit website</Button>
                        </a>
                      );
                    } else if (property.name === "Lions Den Sober Living") {
                      action = (
                        <a href="https://lionsdensoberliving.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
                          <Button variant="cta" size="lg">Visit website</Button>
                        </a>
                      );
                    }

                    return (
                      <PortfolioCard
                        key={property._id}
                        image={property.featuredImageUrl || residentialImg}
                        name={property.name}
                        description={property.description || ""}
                        location={property.location || ""}
                        sector=""
                        action={action}
                      />
                    );
                  }) || (
                    <div className="col-span-full text-center text-muted-foreground py-8">
                      Loading residential properties...
                    </div>
                  )}
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
                  {constructionProperties?.map((property) => (
                    <PortfolioCard
                      key={property._id}
                      image={property.featuredImageUrl || residentialImg}
                      name={property.name}
                      description={property.description || ""}
                      location={property.location || ""}
                      sector=""
                    />
                  )) || (
                    <div className="col-span-full text-center text-muted-foreground py-8">
                      Loading construction properties...
                    </div>
                  )}
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
