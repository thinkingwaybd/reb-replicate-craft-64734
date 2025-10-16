import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { label: t("home"), href: "/" },
    { 
      label: t("about"), 
      href: "#about",
      submenu: [t("atAGlance"), t("history"), t("visionMission"), t("principalMessage")]
    },
    { 
      label: t("information"), 
      href: "#information",
      submenu: [t("teachers"), t("staffInfo"), t("students"), t("uniform")]
    },
    { 
      label: t("noticeBoard"), 
      href: "#notices",
      submenu: [t("notice"), t("officialNotice"), t("circulars")]
    },
    { label: t("admission"), href: "#admission" },
    { 
      label: t("results"), 
      href: "#results",
      submenu: [t("currentResult"), t("academic2024"), t("academic2023"), t("academic2022")]
    },
    { 
      label: t("gallery"), 
      href: "#gallery",
      submenu: [t("photoGallery"), t("videoGallery"), t("events")]
    },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Phone className="h-4 w-4" />
                <span className="font-medium">{t("callUs")}: 01309134670</span>
              </span>
              <span className="hidden md:flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@rmc.edu.bd</span>
              </span>
              <span className="hidden lg:inline font-semibold">{t("eiin")}: 134670</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-2 h-8 px-3 hover:bg-white/10 text-primary-foreground font-medium"
              >
                <Languages className="h-4 w-4" />
                <span>{language === "en" ? "বাংলা" : "English"}</span>
              </Button>
              <a href="#login" className="hover:underline font-medium transition-all hover:scale-105">
                {t("login")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-primary/10">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and College Name */}
            <div className="flex items-center gap-3 md:gap-5 group">
              <div className="relative flex-shrink-0">
                <img 
                  src={schoolLogo} 
                  alt="College Logo" 
                  className="h-16 md:h-24 lg:h-28 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  {t("collegeNameBangla")}
                </h1>
                <p className="text-sm md:text-lg lg:text-2xl xl:text-3xl font-semibold text-primary tracking-wide">
                  {t("collegeName")}
                </p>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="default" 
                className="gradient-primary hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105 font-semibold px-6 py-6 text-base"
              >
                {t("admission")}
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 font-semibold px-6 py-6 text-base"
              >
                {t("teacherLogin")}
              </Button>
              <Button 
                variant="secondary" 
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all hover:scale-105 font-semibold px-6 py-6 text-base shadow-md"
              >
                {t("downloadApp")}
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
      <nav className="bg-gradient-to-r from-primary via-primary/98 to-primary text-primary-foreground shadow-lg border-t border-white/10">
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
                  className="flex items-center gap-1 px-6 py-4 font-bold text-sm tracking-wider hover:bg-white/15 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.submenu && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-300" />}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
                {item.submenu && activeDropdown === item.label && (
                  <ul className="absolute left-0 top-full bg-white text-foreground shadow-2xl min-w-[260px] z-50 rounded-b-xl overflow-hidden animate-fade-in-up border-t-4 border-primary">
                    {item.submenu.map((subitem, idx) => (
                      <li key={subitem}>
                        <a
                          href="#"
                          className="block px-6 py-3.5 hover:bg-primary/10 hover:text-primary transition-all hover:pl-8 border-l-4 border-transparent hover:border-primary font-medium"
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
                      className="block px-4 py-3 hover:bg-white/15 rounded-lg transition-all font-bold text-sm tracking-wide"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-2 px-4">
                <Button variant="secondary" className="w-full gradient-primary font-semibold shadow-lg">
                  {t("admission")}
                </Button>
                <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold">
                  {t("teacherLogin")}
                </Button>
                <Button variant="secondary" className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 font-semibold shadow-lg">
                  {t("downloadApp")}
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
