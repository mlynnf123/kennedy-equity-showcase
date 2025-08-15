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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkdjwgd";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return; // bot detected
    if (!name || !email || !message) {
      toast({ 
        title: "Please fill all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
          _subject: `Kennedy Equity Contact Form - ${name}`,
        }),
      });

      if (response.ok) {
        toast({ 
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible."
        });
        // Clear form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({ 
        title: "Failed to send message",
        description: "Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your full name" 
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="name@email.com" 
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="hidden">
            <label>Company</label>
            <input 
              name="_gotcha" 
              value={hp} 
              onChange={(e) => setHp(e.target.value)} 
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <Textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="How can we help?" 
              rows={6} 
              required
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" variant="cta" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Request Information"}
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
