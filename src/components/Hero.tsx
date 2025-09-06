
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Target, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
      
      <div className="section-container relative">
        <div className="flex flex-col items-center text-center min-h-screen py-20 justify-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
              Precision Hiring
              <span className="block text-gradient-primary">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto slide-up">
              We connect top-tier candidates to life-changing opportunities
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center slide-up">
              <Button className="btn-hero-primary group text-lg px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-hero-secondary text-lg px-8 py-4">
                Browse Jobs
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-4xl mx-auto mb-16 slide-up">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Job title or keyword" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-700"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center slide-up max-w-2xl mx-auto">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent-cyan mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-white/70">Successful Placements</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Globe className="h-6 w-6 text-accent-emerald mr-2" />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-white/70">Global Clients</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-accent-purple mr-2" />
                <span className="text-3xl font-bold text-white">95%</span>
              </div>
              <p className="text-white/70">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
