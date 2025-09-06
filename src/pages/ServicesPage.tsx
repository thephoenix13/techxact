import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserCheck, Briefcase, TrendingUp, Globe2, Shield, Code, Building2, Users2, CheckCircle, Award, Target, Zap, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import itTeamImage from "@/assets/it-team.jpg";
import officeWorkspaceImage from "@/assets/office-workspace.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Strategic leadership recruitment for C-suite and senior management positions across global markets.",
      color: "from-accent-cyan/20 to-accent-emerald/20"
    },
    {
      icon: UserCheck,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions from sourcing to onboarding for all organizational levels.",
      color: "from-accent-emerald/20 to-accent-purple/20"
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based and temporary positions with quality assurance.",
      color: "from-accent-purple/20 to-accent-cyan/20"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Comprehensive market analysis and salary benchmarking to inform your talent strategy.",
      color: "from-accent-cyan/20 to-accent-emerald/20"
    },
    {
      icon: Globe2,
      title: "Global Expansion",
      description: "International recruitment support for companies expanding into new markets worldwide.",
      color: "from-accent-emerald/20 to-accent-purple/20"
    },
    {
      icon: Shield,
      title: "Compliance Support",
      description: "Expert guidance on employment regulations and compliance across different jurisdictions.",
      color: "from-accent-purple/20 to-accent-cyan/20"
    }
  ];

  const itRoles = [
    "Full Stack & Backend Development (Java, Python, .NET, Node.js)",
    "Mobile/Web App Development",
    "Cloud & DevOps (AWS, Azure, GCP)",
    "Data Engineering & Analytics, UI/UX Design",
    "Cybersecurity, QA, Tech Support",
    "Specialist Microsoft technology hiring (D365 CRM, Power Apps)"
  ];

  const nonItRoles = [
    "Sales & Business Development",
    "Finance & Accounting",
    "Pharma and Life Sciences",
    "Human Resources",
    "Customer Support & BPO",
    "Operations & Logistics",
    "Compliance & Administration"
  ];

  const stats = [
    {
      icon: Building2,
      number: "50+",
      label: "Global Clients",
      subtitle: "Trusted partnerships across continents."
    },
    {
      icon: Users2,
      number: "500+",
      label: "Successful Placements",
      subtitle: "Connecting talent with opportunity consistently."
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      subtitle: "A testament to our precision and dedication."
    },
    {
      icon: Clock,
      number: "15+",
      label: "Years of Experience",
      subtitle: "Deep industry knowledge and established networks."
    },
    {
      icon: Users2,
      number: "10K+",
      label: "Candidates in Pool",
      subtitle: "Extensive database of pre-vetted professionals."
    },
    {
      icon: Target,
      number: "15",
      label: "Days Average Hiring Time",
      subtitle: "Efficient processes for rapid talent acquisition."
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: "Precision Matching",
      description: "We excel in aligning talent with specific role requirements and organisational culture."
    },
    {
      icon: Zap,
      title: "Rapid, Quality-First Shortlisting",
      description: "Our streamlined process ensures quick delivery of highly qualified candidates."
    },
    {
      icon: Users2,
      title: "Transparent Communication",
      description: "We maintain open dialogue throughout the entire hiring journey."
    },
    {
      icon: Shield,
      title: "Vast Talent Pool",
      description: "Access to a large, meticulously verified database of pre-screened professionals."
    },
    {
      icon: Code,
      title: "Tech-Enabled & Ethical",
      description: "Our approach is driven by advanced tools and unwavering ethical standards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-cyan/5">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive recruitment solutions tailored to your organization's unique needs. 
                From tech talent to operational excellence, we deliver precision hiring across all domains.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Tech Xact?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic hiring solutions that scale with your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialised Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Specialised Solutions
              </h2>
            </div>

            {/* IT Recruitment */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-medium text-accent-cyan mb-2">Specialised Solutions</p>
                  <h3 className="text-3xl font-bold text-primary mb-6">IT Recruitment Expertise</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Tech Xact offers end-to-end IT recruitment solutions tailored for today's dynamic tech landscape. 
                    We connect you with top-tier professionals across a spectrum of critical roles:
                  </p>
                  <div className="space-y-3 mb-8">
                    {itRoles.map((role, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-emerald rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{role}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    Whether you need permanent hires, contractual support, leadership talent, bulk recruitment, 
                    or niche skill placements, we have the flexibility and expertise to deliver.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={itTeamImage} 
                    alt="IT team collaboration" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Non-IT Recruitment */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                  <img 
                    src={officeWorkspaceImage} 
                    alt="Office workspace" 
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-sm font-medium text-accent-purple mb-2">Beyond Technology</p>
                  <h3 className="text-3xl font-bold text-primary mb-6">Comprehensive Non-IT Recruitment</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our expertise extends beyond IT, providing a holistic approach to your talent acquisition needs. 
                    We efficiently source high-calibre candidates for a wide range of non-IT roles:
                  </p>
                  <div className="space-y-3 mb-8">
                    {nonItRoles.map((role, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{role}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    With pan-India and international reach, we offer flexible models for both 
                    bulk hiring initiatives and highly specific recruitment needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Tech Xact Advantage */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-sm font-medium text-accent-emerald mb-2">The Tech Xact Advantage</p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  What Makes Us Your Ideal Partner
                </h2>
                <div className="space-y-6">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <advantage.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">{advantage.title}:</h4>
                        <p className="text-muted-foreground">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={teamCollaborationImage} 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-accent-cyan mb-2">Impact & Reach</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Track Record of Success
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent-cyan/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-muted-foreground text-sm">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-cyan/5">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our tailored recruitment solutions can help you build the perfect team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-accent text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started Today
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;