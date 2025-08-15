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
            
          </div>
        </section>

        {/* Investment Process Section */}
        <section className="container mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Our Investment Process</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We follow a disciplined, proven approach to identify and acquire exceptional real estate opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Due Diligence</h3>
                <p className="text-sm text-muted-foreground">Comprehensive market research and property evaluation</p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Financial Analysis</h3>
                <p className="text-sm text-muted-foreground">Detailed financial modeling and risk assessment</p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Strategic Acquisition</h3>
                <p className="text-sm text-muted-foreground">Negotiation and closing with optimal terms</p>
              </div>
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
            </div>
            
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Active Management</h3>
                <p className="text-sm text-muted-foreground">Ongoing optimization and value creation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics Section */}
        <section className="container mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg border border-border bg-card">
              <div className="text-3xl text-primary">$25M+</div>
              <div className="text-sm text-muted-foreground mt-2">Investment Volume</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-card">
              <div className="text-3xl text-primary">400+</div>
              <div className="text-sm text-muted-foreground mt-2">Properties Managed</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-card">
              <div className="text-3xl text-primary">5+</div>
              <div className="text-sm text-muted-foreground mt-2">Years in Business</div>
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-card">
              <div className="text-3xl text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-2">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="container mt-16">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold">Service Areas</h2>
              <p className="text-muted-foreground mt-3">
                We focus on high-growth markets in the Greater Austin metropolitan area, 
                leveraging our deep local knowledge and established relationships.
              </p>
              <div className="mt-6">
                <Link to="/contact"><Button variant="outline">Discuss Your Property</Button></Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/50 cursor-pointer">
                <h3 className="font-semibold">Austin Metro</h3>
                <p className="text-sm text-muted-foreground mt-1">Downtown, East Austin, South Austin, West Austin</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/50 cursor-pointer">
                <h3 className="font-semibold">North Austin & Suburbs</h3>
                <p className="text-sm text-muted-foreground mt-1">Round Rock, Cedar Park, Leander, Georgetown</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/50 cursor-pointer">
                <h3 className="font-semibold">South Austin & Suburbs</h3>
                <p className="text-sm text-muted-foreground mt-1">Buda, Kyle, Dripping Springs, Bee Cave</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/50 cursor-pointer">
                <h3 className="font-semibold">East Austin & Suburbs</h3>
                <p className="text-sm text-muted-foreground mt-1">Pflugerville, Manor, Elgin, Bastrop</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
