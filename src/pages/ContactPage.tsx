import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Globe, CheckCircle, Award, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@techxacts.com",
      color: "text-accent-cyan",
      description: "Drop us a message anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8652620646",
      color: "text-accent-emerald",
      description: "Call us for immediate assistance",
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Maharashtra, India",
      color: "text-accent-purple",
      description: "Strong presence in metro cities",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "text-accent-cyan",
      description: "Quick response guaranteed",
    },
  ];

  const whyWorkWithUs = [
    {
      icon: CheckCircle,
      title: "Personalized recruitment strategies",
      description: "Tailored approaches for your specific industry and role requirements",
    },
    {
      icon: Globe,
      title: "Global talent network access",
      description: "Pan-India and international reach with established networks",
    },
    {
      icon: Award,
      title: "Guaranteed quality placements",
      description: "Rigorous screening process ensuring the right cultural and skill fit",
    },
    {
      icon: Users,
      title: "Ongoing support and consultation",
      description: "Continuous partnership beyond just placement",
    },
  ];

  const services = [
    {
      icon: Briefcase,
      title: "IT & Non-IT Recruitment",
      description: "Comprehensive hiring solutions across technology and business domains",
    },
    {
      icon: Users,
      title: "Flexible Hiring Models",
      description: "Permanent, Contractual, Leadership, and Bulk hiring options",
    },
    {
      icon: Award,
      title: "Executive Search",
      description: "Strategic leadership recruitment for C-suite and senior management",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-cyan/5">
          <div className="section-container">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to find your perfect match? Get in touch with our recruitment experts today. Whether you're
                looking to hire or seeking opportunities, we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <MessageSquare className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-semibold text-primary">Send us a message</h2>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input placeholder="John" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input placeholder="Doe" className="w-full" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input type="email" placeholder="john@company.com" className="w-full" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <Input placeholder="Your Company Name" className="w-full" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in:</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select your interest</option>
                        <option value="hiring">Hiring Talent</option>
                        <option value="job-seeking">Seeking Opportunities</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        placeholder="Tell us about your recruitment needs or career goals..."
                        className="w-full h-32"
                      />
                    </div>

                    <Button className="bg-gradient-accent text-white px-8 py-3 rounded-lg w-full hover:shadow-lg transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h2 className="text-2xl font-semibold text-primary">Get in Touch</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our team is ready to discuss your recruitment needs and create a customized solution for your
                    organization. We're here to connect talent with opportunity.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-gray-600 text-sm font-medium">{item.label}</div>
                          <div className="text-primary font-semibold text-lg">{item.value}</div>
                          <div className="text-gray-500 text-sm">{item.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Services Overview */}
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Work With Us?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the difference of working with a recruitment partner that truly understands your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyWorkWithUs.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours & Response Promise */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-primary/5 to-accent-cyan/5 p-8 rounded-xl border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-6">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-semibold text-primary">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold text-primary">Closed</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Emergency hiring needs?</strong> We provide 24/7 support for urgent requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-emerald/5 to-accent-cyan/5 p-8 rounded-xl border border-accent-emerald/10">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Promise to You</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">24-hour response guarantee for all inquiries</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personalized consultation within 48 hours</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Transparent communication throughout the process</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent-emerald flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No hidden fees or surprise charges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-cyan/5">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to Connect?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you're a company looking to build your dream team or a professional seeking your next opportunity,
              we're here to make the perfect connection.
            </p>
            <div className="text-muted-foreground">
              📧 Email:{" "}
              <a href="mailto:info@techxacts.com" className="text-primary hover:underline font-semibold">
                info@techxacts.com
              </a>{" "}
              | 🌐 Website:{" "}
              <a href="https://techxacts.com/" className="text-primary hover:underline font-semibold">
                https://techxacts.com/
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
