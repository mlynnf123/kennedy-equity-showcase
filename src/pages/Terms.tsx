import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Terms of Service | Kennedy Equity" description="Terms and conditions for using the Kennedy Equity website." path="/terms" />
      <Navbar />
      <main className="container flex-1 py-10 max-w-3xl">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground mt-4">
          The information on this website is for general informational purposes only and does not constitute an
          offer to sell or a solicitation of an offer to buy any securities. Investments involve risk and may lose value.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
