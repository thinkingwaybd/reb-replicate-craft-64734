import { Bell } from "lucide-react";

const AnnouncementTicker = () => {
  const announcements = [
    "🎓 HSC Admission 2024-25 is now open - Apply before the deadline",
    "📚 Class 11 Admission (HSC 2025-26) starting soon",
    "🏆 Annual Sports Day scheduled for next month",
    "📊 New academic results published for 2024 - Excellent performance!",
    "👨‍👩‍👧‍👦 Parent-teacher meeting on 25th October - All parents requested to attend",
    "🎉 Science Fair winners announced - Congratulations to all participants",
  ];

  return (
    <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 border-y-2 border-primary/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-md whitespace-nowrap animate-pulse">
            <Bell className="h-5 w-5" />
            <span className="font-bold text-sm md:text-base">Latest Updates</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...announcements, ...announcements].map((announcement, index) => (
                <span 
                  key={index} 
                  className="inline-block mx-12 text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {announcement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
