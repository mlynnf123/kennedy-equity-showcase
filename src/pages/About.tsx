import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About | Kennedy Equity"
        description="Learn about Kennedy Equity's mission, values, and leadership in real estate investment and management."
        path="/about"
      />
      <Navbar />
      <main className="container flex-1 py-10">
        <article className="max-w-3xl">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-muted-foreground mt-4">
            With a commitment to long-term value and measured growth, Kennedy Equity is a privately held real
            estate holding company dedicated to acquiring, developing, and managing exceptional properties across
            our target markets. Our mission is to deliver secure, sustainable returns for our stakeholders while
            enhancing the communities we invest in.
          </p>
          <h2 className="text-xl font-semibold mt-8">Leadership</h2>
          <p className="text-muted-foreground mt-2">
            Kennedy Equity is led by experienced operators with a track record in property management, investment,
            and asset protection. We emphasize strategic acquisitions and thoughtful stewardship.
          </p>
          <h2 className="text-xl font-semibold mt-8">Values & Philosophy</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-2">
            <li>Integrity and transparency in all partnerships</li>
            <li>Disciplined, mission-driven investment</li>
            <li>Risk-aware, tax-efficient structures</li>
            <li>Operational excellence and community impact</li>
          </ul>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
