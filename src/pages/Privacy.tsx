import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Privacy Policy | Kennedy Equity" description="How Kennedy Equity handles your information." path="/privacy" />
      <Navbar />
      <main className="container flex-1 py-10 max-w-3xl">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mt-4">
          We respect your privacy. We do not collect personal information unless you provide it to us via the contact form or email.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
