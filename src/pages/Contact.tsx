import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState(""); // honeypot

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot detected
    if (!name || !email || !message) {
      toast({ title: "Please fill all fields." });
      return;
    }
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:info@kennedyequity.com?subject=${subject}&body=${body}`;
    toast({ title: "Thank you! We'll be in touch shortly." });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact | Kennedy Equity"
        description="Contact Kennedy Equity for investment inquiries, partnerships, or portfolio information."
        path="/contact"
      />
      <Navbar />
      <main className="container flex-1 py-10">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          For investment opportunities, partnerships, or general inquiries, please reach out using the form below.
        </p>

        <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" />
            </div>
          </div>
          <div className="hidden">
            <label>Company</label>
            <input value={hp} onChange={(e) => setHp(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" rows={6} />
          </div>
          <Button type="submit" variant="cta">Request Information</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
