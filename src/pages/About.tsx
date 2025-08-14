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
          <h2 className="text-xl font-semibold mt-8">Daniel Kennedy, Founder</h2>
          <p className="text-muted-foreground mt-2">
            Real estate has been Daniel Kennedy's passion since his early years. After relocating to Austin in 2013, 
            Daniel has built a comprehensive understanding of the local real estate market through hands-on experience 
            across multiple sectors. From investment property acquisition to founding Avenue B Development, his custom 
            home building firm, Daniel brings over a decade of diverse real estate expertise to Kennedy Equity.
          </p>
          <p className="text-muted-foreground mt-4">
            As both a property owner and manager, Daniel understands firsthand the importance of professional, 
            diligent property management. His personal portfolio of rental properties has provided valuable insights 
            into maintaining assets that remain attractive to tenants while maximizing value for owners. This 
            dual perspective drives Kennedy Equity's commitment to excellence in property management and investment.
          </p>
          <p className="text-muted-foreground mt-4">
            Daniel remains actively engaged in Austin's real estate community as a member of NARPM (National 
            Association of Residential Property Managers). When not focused on growing Kennedy Equity's portfolio, 
            he enjoys Austin's outdoor lifestyle with his wife Renee, a licensed Texas Realtor, and their two 
            daughters, Caila and Faith. The Kennedy family has proudly called Austin home for over a decade.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
