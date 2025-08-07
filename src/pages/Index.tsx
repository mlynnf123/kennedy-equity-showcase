import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import SEO from "@/components/SEO";
import officeImg from "@/assets/portfolio-office.jpg";
import residentialImg from "@/assets/portfolio-residential.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Kennedy Equity | Strategic Real Estate Investments"
        description="Kennedy Equity is a real estate holding company delivering sustainable growth through strategic acquisitions and trusted property management."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kennedy Equity",
          url: typeof window !== "undefined" ? window.location.origin : "",
          description:
            "Kennedy Equity is a real estate holding company delivering sustainable growth through strategic acquisitions and trusted property management.",
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section className="container mt-12 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-bold">What We Do</h2>
            <p className="text-muted-foreground mt-3">
              We invest in and manage a diverse portfolio spanning residential, commercial, and association
              properties. Our disciplined approach focuses on long-term value creation, prudent risk management,
              and operational excellence.
            </p>
            <div className="mt-6">
              <Link to="/approach"><Button variant="outline">Our Investment Philosophy</Button></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={officeImg} alt="Class A office building investment" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <img src={residentialImg} alt="Residential neighborhood managed properties" className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
            <div className="col-span-2 text-sm text-muted-foreground">Representative portfolio imagery</div>
          </div>
        </section>

        <section className="container mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Featured: PMI Austin</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                PMI Austin is a full-service real estate asset management company offering residential, commercial,
                association, and realty services across Austin and surrounding communities.
              </p>
            </div>
            <Link to="/portfolio"><Button variant="cta">View Portfolio</Button></Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold">Why PMI Austin</h3>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-muted-foreground">
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
                <Button variant="outline">Visit PMI Austin</Button>
              </a>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold">Scope</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Residential, commercial, HOA, and realty sectors, backed by technology and award-winning service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
