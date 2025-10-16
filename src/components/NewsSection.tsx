import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      date: "Oct 15, 2024",
      title: "HSC Admission 2024-25 Circular Published",
      excerpt: "Applications are now open for HSC admission. Interested candidates can apply through our online portal before the deadline.",
      category: "Admission",
      color: "from-orange-500 to-red-500",
      badge: "🎓"
    },
    {
      date: "Oct 10, 2024",
      title: "Annual Sports Day 2024 Announcement",
      excerpt: "The annual sports day will be held next month. Students are encouraged to participate in various sporting events.",
      category: "Event",
      color: "from-blue-500 to-cyan-500",
      badge: "🏆"
    },
    {
      date: "Oct 5, 2024",
      title: "Outstanding Results in HSC Examination",
      excerpt: "Our students have achieved remarkable success in this year's HSC examination with 98% pass rate and excellent grades.",
      category: "Results",
      color: "from-green-500 to-emerald-500",
      badge: "📊"
    },
    {
      date: "Sep 28, 2024",
      title: "Science Fair 2024 Winners Announced",
      excerpt: "Congratulations to all participants and winners of our annual science fair. The projects demonstrated exceptional creativity.",
      category: "Achievement",
      color: "from-purple-500 to-pink-500",
      badge: "🔬"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
              Latest Updates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              News & <span className="text-gradient">Announcements</span>
            </h2>
            <p className="text-muted-foreground text-lg flex items-center gap-2 justify-center md:justify-start">
              <TrendingUp className="h-5 w-5 text-primary" />
              Stay updated with the latest happenings
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105 font-semibold px-6 py-6 rounded-full"
          >
            View All News
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              
              <CardContent className="pt-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.badge}</span>
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-bold rounded-full shadow-md`}>
                    {item.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{item.date}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button 
                  variant="link" 
                  className="px-0 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Read More 
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button 
            variant="outline" 
            className="items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105 font-semibold px-8 py-6 rounded-full"
          >
            View All News
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
