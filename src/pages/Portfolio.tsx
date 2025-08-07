import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import PortfolioCard from "@/components/site/PortfolioCard";
import residentialImg from "@/assets/portfolio-residential.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Portfolio | Kennedy Equity Investments"
        description="Explore Kennedy Equity's portfolio across residential, commercial, and association asset classes."
        path="/portfolio"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Kennedy Equity Portfolio",
        }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="container mt-10">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            A selection of current investments. We prioritize markets with strong fundamentals and opportunities
            for operational value creation.
          </p>

          <div className="mt-8 grid gap-6">
            <div className="relative p-6 rounded-lg border border-border bg-card">
              <div className="md:flex items-start gap-6">
                <img src={residentialImg} alt="PMI Austin property management services" className="rounded-md w-full md:w-1/2 object-cover" />
                <div className="flex-1 mt-4 md:mt-0">
                  <h2 className="text-2xl font-semibold">PMI Austin (Flagship)</h2>
                  <p className="text-muted-foreground mt-2">
                    Full-service real estate asset management covering residential, commercial, association, and realty
                    services across the Austin metro area. Backed by franchise technology and multi-tier guarantees.
                  </p>
                  <ul className="mt-3 text-sm list-disc pl-5 text-muted-foreground space-y-1">
                    <li>21-Day Lease Guarantee</li>
                    <li>Eviction Protection</li>
                    <li>On-Time Rent Promise</li>
                    <li>Pet/Results/Leasing Guarantees</li>
                  </ul>
                  <a
                    href="https://www.propertymanagementinc.com/offices/pmi-austin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <Button variant="cta">Visit PMI Austin</Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <PortfolioCard
                image={officeImg}
                name="Commerce Plaza"
                description="Modern Class A office with stabilized tenancy and amenity upgrades."
                location="Austin, TX"
                sector="Commercial"
              />
              <PortfolioCard
                image={residentialImg}
                name="Greenview Townhomes"
                description="Townhome community with value-add potential and professional management."
                location="Round Rock, TX"
                sector="Residential"
              />
              <PortfolioCard
                image={officeImg}
                name="Riverside Center"
                description="Mixed-use asset with diversified income streams and strong foot traffic."
                location="Cedar Park, TX"
                sector="Mixed-Use"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
