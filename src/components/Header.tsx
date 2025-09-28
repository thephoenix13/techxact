
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="section-container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TX</span>
            </div>
            <span className="text-xl font-bold text-primary">Tech Xact</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`transition-colors ${location.pathname === '/services' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">

            <Button className="bg-gradient-accent text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                          <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' }`}
            >
              Get Started
                            </Link>
            </Button>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/services" 
                className={`transition-colors ${location.pathname === '/services' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${location.pathname === '/about' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${location.pathname === '/contact' ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-gradient-accent text-white px-6 py-2 rounded-lg w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
