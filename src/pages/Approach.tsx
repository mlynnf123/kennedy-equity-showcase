import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";

const Approach = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Our Approach | Kennedy Equity Investment Philosophy"
        description="Our disciplined approach focuses on asset protection, tax strategy, diversification, and long-term value creation."
        path="/approach"
      />
      <Navbar />
      <main className="container flex-1 py-10">
        <article className="max-w-3xl">
          <h1 className="text-3xl font-bold">Our Approach</h1>
          <p className="text-muted-foreground mt-4">
            We select properties and businesses using clear criteria aligned with our mission. We focus on cash-flowing
            assets in resilient submarkets, with upside via operations or strategic improvements.
          </p>
          <h2 className="text-xl font-semibold mt-8">Core Principles</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
            <li>Mission-driven acquisition aligned with stakeholder outcomes</li>
            <li>Diversification across asset types and markets</li>
            <li>Prudent leverage and risk management</li>
            <li>Tax-efficient structures for durable after-tax returns</li>
            <li>Operational excellence and technology enablement</li>
            <li>Community impact and stewardship</li>
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Approach;
