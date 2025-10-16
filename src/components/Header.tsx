import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "HOME", href: "/" },
    { 
      label: "ABOUT", 
      href: "#about",
      submenu: ["At a Glance", "History", "Vision & Mission", "Principal's Message"]
    },
    { 
      label: "INFORMATION", 
      href: "#information",
      submenu: ["Teachers", "Staff Info", "Students", "Uniform"]
    },
    { 
      label: "NOTICE BOARD", 
      href: "#notices",
      submenu: ["Notice", "Official Notice", "Circulars"]
    },
    { label: "ADMISSION", href: "#admission" },
    { 
      label: "RESULTS", 
      href: "#results",
      submenu: ["Current Result", "Academic 2024", "Academic 2023", "Academic 2022"]
    },
    { 
      label: "GALLERY", 
      href: "#gallery",
      submenu: ["Photo Gallery", "Video Gallery", "Events"]
    },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:scale-105 transition-transform">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">Call Us: 01309134670</span>
              </span>
              <span className="hidden md:flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span className="font-medium">info@rebmsc.edu.bd</span>
              </span>
              <span className="hidden lg:inline font-semibold">EIIN NO: 134670</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#login" className="hover:underline font-medium transition-all hover:scale-105">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b-2 border-primary/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo and School Name */}
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src={schoolLogo} 
                  alt="School Logo" 
                  className="h-14 md:h-20 w-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-1">
                  রাজশাহী শিক্ষা বোর্ড সরকারি মডেল স্কুল এন্ড কলেজ
                </h1>
                <p className="text-base md:text-xl lg:text-2xl font-semibold text-primary">
                  Rajshahi Shikkha Board Govt. Model School and College
                </p>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="default" 
                className="gradient-primary hover:shadow-primary transition-all hover:scale-105 font-semibold px-6"
              >
                Admission
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105 font-semibold px-6"
              >
                Teacher Login
              </Button>
              <Button 
                variant="secondary" 
                className="bg-teal-500 text-white hover:bg-teal-600 transition-all hover:scale-105 font-semibold px-6"
              >
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-center">
            {menuItems.map((item) => (
              <li 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-5 py-4 font-semibold text-sm tracking-wide hover:bg-white/10 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
                {item.submenu && activeDropdown === item.label && (
                  <ul className="absolute left-0 top-full bg-white text-foreground shadow-xl min-w-[240px] z-50 rounded-b-lg overflow-hidden animate-fade-in-up">
                    {item.submenu.map((subitem, idx) => (
                      <li key={subitem} className={idx === 0 ? "border-t-2 border-primary" : ""}>
                        <a
                          href="#"
                          className="block px-5 py-3 hover:bg-primary/5 hover:text-primary transition-all hover:pl-7 border-l-4 border-transparent hover:border-primary"
                        >
                          {subitem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 animate-fade-in-up">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all font-semibold"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2 px-4">
                <Button variant="secondary" className="w-full gradient-primary font-semibold">
                  Admission
                </Button>
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold">
                  Teacher Login
                </Button>
                <Button variant="secondary" className="w-full bg-teal-500 hover:bg-teal-600 font-semibold">
                  Download App
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
