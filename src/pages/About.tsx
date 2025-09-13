import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SEO from "@/components/SEO";
import { useTeamMembers } from "@/hooks/useSanity";

const About = () => {
  const { data: teamMembers, isLoading, error } = useTeamMembers();

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
          <h1 className="text-3xl font-normal">About Us</h1>
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
          {/* Team Members Section */}
          {isLoading ? (
            <div className="mt-8">
              <div className="h-6 bg-muted animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-muted animate-pulse rounded"></div>
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="mt-8 text-muted-foreground">
              Unable to load team information at this time.
            </div>
          ) : (
            teamMembers?.map((member) => (
              <div key={member._id} className="mt-8">
                <div className="flex items-start gap-6">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{member.name}, {member.title}</h2>
                    {member.bio && (
                      <div className="text-muted-foreground mt-2 space-y-4">
                        {member.bio.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
