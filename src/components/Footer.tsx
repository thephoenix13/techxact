
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Executive Search",
    "Talent Acquisition",
    "Contract Staffing",
    "Market Intelligence"
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TX</span>
              </div>
              <span className="text-xl font-bold">Tech Xact</span>
            </div>
            <p className="text-white/80 mb-6">
              Global recruitment excellence connecting top talent with leading organizations worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-cyan" />
                <span className="text-white/80">info@techxacts.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-emerald" />
                <span className="text-white/80">+91-8652620646</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-purple" />
                <span className="text-white/80">Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-white/80 mb-4">
              Get the latest recruitment insights and industry news.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Tech Xact Recruitment Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
