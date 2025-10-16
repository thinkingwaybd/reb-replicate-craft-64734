import { Phone, Mail, MapPin, Facebook, Youtube, Twitter, Instagram, Send, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={schoolLogo} alt="Logo" className="h-16 w-auto" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              </div>
              <h3 className="font-bold text-xl">RSBGMSC</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Rajshahi Shikkha Board Govt. Model School and College - A premier educational
              institution committed to excellence in education and nurturing future leaders.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                { icon: Youtube, href: "#", color: "hover:bg-red-600" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Instagram, href: "#", color: "hover:bg-pink-600" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href} 
                    className={`h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-primary to-orange-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Admission", "Notice Board", "Results", "Gallery", "Contact Us"].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUp className="h-3 w-3 rotate-45 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {["Teachers Portal", "Student Portal", "Online Payment", "Academic Calendar", "Download App", "Career"].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUp className="h-3 w-3 rotate-45 group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 group">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">
                    Rajshahi Education Board Area, Rajshahi, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">+880 1309 134670</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">info@rebmsc.edu.bd</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button size="icon" className="gradient-primary hover:shadow-primary flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* EIIN Badge */}
            <div className="bg-gradient-to-r from-primary to-orange-400 rounded-xl p-4 text-center shadow-lg">
              <p className="text-xs font-semibold mb-1">EIIN Number</p>
              <p className="text-2xl font-bold">134670</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-white">RSBGMSC</span>. All rights reserved. 
              <span className="mx-2">|</span>
              Developed with <span className="text-red-500">❤</span> for Education
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white shadow-xl hover:shadow-primary flex items-center justify-center hover:scale-110 transition-all z-50 group"
      >
        <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
