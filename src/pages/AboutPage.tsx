import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Clock, Users2, Target, Zap, Building2, Code, Briefcase, Globe, Shield, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";

const AboutPage = () => {
  const keyFeatures = [
    "Customized Hiring Solutions: Tailored strategies for bulk hiring, niche roles, leadership hiring, and contract staffing.",
    "Candidate Screening: Rigorous assessment of skills, experience, and culture fit.",
    "Industry Insights: Domain-specific consultants who understand evolving talent demands.", 
    "Fast Turnaround: Efficient processes to reduce hiring time and costs.",
    "Pan-India & International Reach: Strong presence in metro cities and regional markets."
  ];

  const whyChooseUs = [
    "Proven track record across industries",
    "Access to a large database of pre-screened professionals",
    "Tech-enabled recruitment tools",
    "Ethical and transparent practices",
    "Strong focus on client satisfaction"
  ];

  const companyChoiceReasons = [
    "Deep domain expertise in both IT & Non-IT hiring",
    "Pre-screened talent pool across experience levels", 
    "Fast turnaround and quality-driven shortlisting",
    "Flexible hiring models: Permanent, Contractual, Leadership, Bulk",
    "Pan-India sourcing capabilities and remote hiring support",
    "Ethical, transparent, and partnership-focused approach"
  ];

  const itRoles = [
    "Full Stack & Backend Development (Java, Python, .NET, Node.js)",
    "Mobile & Web App Development",
    "Cloud & DevOps (AWS, Azure, GCP)",
    "Data Engineering, AI/ML & Analytics",
    "UI/UX Design, Product Management",
    "Cybersecurity, QA, and Tech Support"
  ];

  const nonItRoles = [
    "Sales & Business Development",
    "Finance & Accounts",
    "HR & Talent Acquisition",
    "Customer Support / BPO / KPO",
    "Operations & Logistics",
    "Legal, Admin & Compliance"
  ];

  const whatSetsUsApart = [
    {
      icon: Target,
      title: "Precision in Matching Talent with Roles",
      description: "Our AI understands the nuances of both technical and business roles, ensuring every candidate is a strategic fit."
    },
    {
      icon: Zap,
      title: "Fast Turnaround with Quality-First Approach",
      description: "Post a job today, start interviewing tomorrow with our efficient processes."
    },
    {
      icon: Users2,
      title: "Flexible Models: Permanent | Contractual | Bulk Hiring | Leadership",
      description: "Whether you're hiring one role or building entire teams, our platform adapts to your needs."
    },
    {
      icon: Globe,
      title: "Pan-India & Remote Talent Reach",
      description: "Strong presence in metro cities and regional markets with remote hiring support."
    },
    {
      icon: Shield,
      title: "Detailed Screening & Cultural Fit Analysis",
      description: "Every candidate is screened for skills, experience, and authenticity — across industries."
    },
    {
      icon: TrendingUp,
      title: "Transparent Communication and Follow-through",
      description: "Access analytics on candidate engagement, hiring timelines, and role performance."
    }
  ];

  const clientTypes = [
    "Tech Startups",
    "MSMEs & Mid-Sized Companies", 
    "Large Enterprises",
    "Recruitment Process Outsourcing (RPO) Partners"
  ];

  const advantages = [
    {
      icon: Target,
      title: "Precision Matching",
      description: "Our AI-driven approach ensures perfect alignment between candidate skills and role requirements."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Streamlined processes that get quality candidates in front of you faster than traditional methods."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous screening and verification processes ensure every candidate meets our high standards."
    },
    {
      icon: Globe,
      title: "Wide Reach",
      description: "Access to talent across India and internationally, from metro cities to emerging markets."
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-accent-cyan"
    },
    {
      icon: Users2,
      number: "10K+",
      label: "Candidates Placed", 
      color: "text-accent-emerald"
    },
    {
      icon: Clock,
      number: "15",
      label: "Average Days to Hire",
      color: "text-accent-purple"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-cyan/5">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                  Tech Xact – Precision Hiring Starts Here
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Tech Xact is a dynamic, results-driven recruitment consultancy specializing in 
                  connecting ambitious organizations with top-tier talent across both IT and Non-IT domains. 
                  We are more than recruiters—our mission is to be strategic hiring partners who help 
                  businesses scale with precision, efficiency, and the right people.
                </p>
             
              </div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Professional business collaboration" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
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
                </div>
              ))}
            </div>
          </div>
        </section>


        
        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Precision Hiring Across Tech and Non-Tech Roles
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                TechXact is built for companies that demand accuracy in hiring — whether you're scaling your IT infrastructure 
                or expanding your operations team. Our platform intelligently matches candidates to roles across industries, 
                ensuring every hire is a strategic win.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent-cyan/5 rounded-2xl p-8 mb-16 border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Mission & Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-primary mb-2">Integrity</h4>
                  <p className="text-muted-foreground">Every profile is vetted, every match is meaningful.</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-primary mb-2">Innovation</h4>
                  <p className="text-muted-foreground">We evolve with both tech and business landscapes.</p>
                </div>
                <div className="text-center">
                  <Users2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-primary mb-2">Empowerment</h4>
                  <p className="text-muted-foreground">We support hiring managers and job seekers alike — from coders to coordinators.</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <h4 className="text-xl font-semibold text-primary mb-4">Our Mission</h4>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  To empower organizations and professionals through smart, inclusive, and efficient hiring — across every domain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Do</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We are a specialized recruitment consultancy with a dual focus on IT and Non-IT hiring, helping companies 
                find the right talent faster and smarter.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* IT Recruitment */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Code className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">IT Recruitment</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We help tech-driven companies hire for roles in:
                </p>
                <div className="space-y-3">
                  {itRoles.map((role, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6">
                  We provide end-to-end talent acquisition for the technology sector, catering to startups, 
                  mid-sized firms, and large enterprises.
                </p>
              </div>

              {/* Non-IT Recruitment */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">Non-IT Recruitment</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We deliver end-to-end recruitment solutions across:
                </p>
                <div className="space-y-3">
                  {nonItRoles.map((role, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6">
                  We specialize in recruiting for non-technical roles across multiple industries such as 
                  manufacturing, retail, BFSI, healthcare, and logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Sets Us Apart</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our deep industry knowledge, tech-enabled processes, and commitment to quality make us a trusted hiring partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {whatSetsUsApart.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3 text-center">{item.title}</h4>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features & Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Features</h3>
                <div className="space-y-4">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Companies Choose Techxact */}
            <div className="bg-gradient-to-br from-primary/5 to-accent-cyan/5 rounded-2xl p-8 mb-16 border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Why Companies Choose Techxact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyChoiceReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">Who We Work With</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {clientTypes.map((client, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-gray-700 font-medium text-center">{client}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-primary/5 to-accent-cyan/5 rounded-2xl p-8 border border-primary/10 text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">What Our Clients Say</h3>
              <blockquote className="text-xl italic text-gray-600 mb-4">
                "TechXact helped us hire a DevOps engineer and a finance controller in under a week. It's like having two platforms in one."
              </blockquote>
              <cite className="text-primary font-semibold">— Anjali M., HR Director, NexaCore</cite>
            </div>
          </div>
        </section>

        {/* Partner With Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Partner With Us</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              If you believe talent is the foundation of growth, let's build that foundation together.
              At Techxact, we don't just fill vacancies — we build high-performing teams.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you're scaling a tech startup, hiring mid-level talent, or building a leadership bench 
              in a non-IT vertical, we bring precision, speed, and integrity to every hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-gradient-accent text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                💼 Looking to Hire?
              </Button>
              <Button className="bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-lg">
                🎯 Seeking Opportunities?
              </Button>
            </div>
            <div className="text-muted-foreground">
              📧 Drop us a message: <a href="mailto:info@techxacts.com" className="text-primary hover:underline">info@techxacts.com</a> | 
              🌐 Website: <a href="https://techxacts.com/" className="text-primary hover:underline">https://techxacts.com/</a> (in process)
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;