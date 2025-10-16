import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    collegeName: "Rajshahi Metropolitan College",
    collegeNameBangla: "রাজশাহী মেট্রোপলিটন কলেজ",
    callUs: "Call Us",
    email: "Email",
    eiin: "EIIN NO",
    login: "Login",
    admission: "Admission",
    teacherLogin: "Teacher Login",
    downloadApp: "Download App",
    home: "HOME",
    about: "ABOUT",
    information: "INFORMATION",
    noticeBoard: "NOTICE BOARD",
    results: "RESULTS",
    gallery: "GALLERY",
    contact: "CONTACT",
    atAGlance: "At a Glance",
    history: "History",
    visionMission: "Vision & Mission",
    principalMessage: "Principal's Message",
    teachers: "Teachers",
    staffInfo: "Staff Info",
    students: "Students",
    uniform: "Uniform",
    notice: "Notice",
    officialNotice: "Official Notice",
    circulars: "Circulars",
    currentResult: "Current Result",
    academic2024: "Academic 2024",
    academic2023: "Academic 2023",
    academic2022: "Academic 2022",
    photoGallery: "Photo Gallery",
    videoGallery: "Video Gallery",
    events: "Events",
  },
  bn: {
    collegeName: "রাজশাহী মেট্রোপলিটন কলেজ",
    collegeNameBangla: "Rajshahi Metropolitan College",
    callUs: "কল করুন",
    email: "ইমেইল",
    eiin: "ইআইআইএন নং",
    login: "লগইন",
    admission: "ভর্তি",
    teacherLogin: "শিক্ষক লগইন",
    downloadApp: "অ্যাপ ডাউনলোড",
    home: "হোম",
    about: "সম্পর্কে",
    information: "তথ্য",
    noticeBoard: "নোটিশ বোর্ড",
    results: "ফলাফল",
    gallery: "গ্যালারি",
    contact: "যোগাযোগ",
    atAGlance: "এক নজরে",
    history: "ইতিহাস",
    visionMission: "দৃষ্টিভঙ্গি ও লক্ষ্য",
    principalMessage: "অধ্যক্ষের বাণী",
    teachers: "শিক্ষকবৃন্দ",
    staffInfo: "কর্মচারী তথ্য",
    students: "শিক্ষার্থী",
    uniform: "পোশাক",
    notice: "নোটিশ",
    officialNotice: "অফিসিয়াল নোটিশ",
    circulars: "সার্কুলার",
    currentResult: "বর্তমান ফলাফল",
    academic2024: "একাডেমিক ২০২৪",
    academic2023: "একাডেমিক ২০২৩",
    academic2022: "একাডেমিক ২০২২",
    photoGallery: "ফটো গ্যালারি",
    videoGallery: "ভিডিও গ্যালারি",
    events: "ইভেন্ট",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
