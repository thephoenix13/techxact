
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Clock, Users2, Target, Zap, Building2, Code, Briefcase, Globe, Shield, TrendingUp } from "lucide-react";

const About = () => {
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
      number: "30",
      label: "Average Days to Hire",
      color: "text-accent-purple"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Precision Hiring Across Tech and Non-Tech Roles
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            At Techxact, we specialize in connecting ambitious organizations with top-tier talent across both IT and Non-IT domains. 
            We are not just recruiters – we are strategic hiring partners committed to helping businesses scale with precision, efficiency, and the right people.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            TechXact is built for companies that demand accuracy in hiring — whether you're scaling your IT infrastructure or expanding your operations team. 
            Our platform intelligently matches candidates to roles across industries, ensuring every hire is a strategic win.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
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
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">What We Do</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* IT Recruitment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Code className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-2xl font-bold text-primary">IT Recruitment</h4>
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
            </div>

            {/* Non-IT Recruitment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-2xl font-bold text-primary">Non-IT Recruitment</h4>
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
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatSetsUsApart.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3 text-center">{item.title}</h4>
                <p className="text-muted-foreground text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Why Choose Us */}
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
            <div className="space-y-4 mb-8">
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
        <div className="bg-gradient-to-br from-primary/5 to-accent-cyan/5 rounded-2xl p-8 mb-20 border border-primary/10">
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

        {/* Who We Work With */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold text-primary mb-8">Who We Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-gray-700 font-medium text-center">{client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200 text-center"
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
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16 text-center">
          <h3 className="text-2xl font-bold text-primary mb-6">What Our Clients Say</h3>
          <blockquote className="text-xl italic text-gray-600 mb-4">
            "TechXact helped us hire a DevOps engineer and a finance controller in under a week. It's like having two platforms in one."
          </blockquote>
          <cite className="text-primary font-semibold">— Anjali M., HR Director, NexaCore</cite>
        </div>

        {/* Partner With Us Section */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent-cyan/5 rounded-2xl p-12 border border-primary/10">
          <h3 className="text-3xl font-bold text-primary mb-6">Partner With Us</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            If you believe talent is the foundation of growth, let's build that foundation together.
            At Techxact, we don't just fill vacancies — we build high-performing teams.
          </p>
          <div className="text-muted-foreground">
            📧 Drop us a message: <a href="mailto:info@techxacts.com" className="text-primary hover:underline">info@techxacts.com</a> | 
            🌐 Website: <a href="https://techxacts.com/" className="text-primary hover:underline">https://techxacts.com/</a> (in process)
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
