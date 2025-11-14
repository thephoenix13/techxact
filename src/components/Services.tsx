import { Card } from "@/components/ui/card";
import { Search, UserCheck, Briefcase, TrendingUp, Globe2, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description:
        "Strategic leadership recruitment for C-suite and senior management positions across global markets.",
      color: "from-accent-cyan/20 to-accent-emerald/20",
    },
    {
      icon: UserCheck,
      title: "Talent Acquisition",
      description: "End-to-end recruitment solutions from sourcing to onboarding for all organizational levels.",
      color: "from-accent-emerald/20 to-accent-purple/20",
    },
    {
      icon: Briefcase,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based and temporary positions with quality assurance.",
      color: "from-accent-purple/20 to-accent-cyan/20",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Comprehensive market analysis and salary benchmarking to inform your talent strategy.",
      color: "from-accent-cyan/20 to-accent-emerald/20",
    },
    {
      icon: Globe2,
      title: "Global Expansion",
      description: "International recruitment support for companies expanding into new markets worldwide.",
      color: "from-accent-emerald/20 to-accent-purple/20",
    },
    {
      icon: Shield,
      title: "Compliance Support",
      description: "Expert guidance on employment regulations and compliance across different jurisdictions.",
      color: "from-accent-purple/20 to-accent-cyan/20",
    },
  ];

  const featuredJobs = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp",
      location: "New York, NY",
      type: "Full-time",
      featured: true,
    },
    {
      title: "Product Manager",
      company: "InnovateLab",
      location: "San Francisco, CA",
      type: "Full-time",
      featured: false,
    },
    {
      title: "Data Scientist",
      company: "DataFlow Inc",
      location: "Remote",
      type: "Contract",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Tech Xact?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive recruitment solutions tailored to your organization's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
