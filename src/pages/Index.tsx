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

      </main>
      <Footer />
    </div>
  );
};

export default Index;
