
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@techxact.com",
      color: "text-accent-cyan"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91-8652620646",
      color: "text-accent-emerald"
    },
    {
      icon: MapPin,
      label: "Headquarters",
      value: "Maharashtra, India",
      color: "text-accent-purple"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "text-accent-cyan"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your perfect match? Get in touch with our recruitment experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-primary">
                Send us a message
              </h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input placeholder="John" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="john@company.com" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input placeholder="Your Company Name" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your recruitment needs..."
                  className="w-full h-32"
                />
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-primary">Get in Touch</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Our team is ready to discuss your recruitment needs and create a customized solution for your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm font-medium">{item.label}</div>
                      <div className="text-primary font-semibold">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent-cyan/5 p-8 rounded-xl border border-primary/10">
              <h4 className="text-primary font-semibold mb-4 text-lg">Why Work With Us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-emerald rounded-full mr-3"></div>
                  Personalized recruitment strategies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></div>
                  Global talent network access
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-purple rounded-full mr-3"></div>
                  Guaranteed quality placements
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent-emerald rounded-full mr-3"></div>
                  Ongoing support and consultation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
