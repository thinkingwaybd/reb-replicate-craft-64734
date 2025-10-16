import { GraduationCap, Building2, ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Expert Faculty",
      description: "150+ experienced teachers",
    },
    {
      icon: Users,
      title: "Active Students",
      description: "2000+ enrolled students",
    },
    {
      icon: Award,
      title: "Success Rate",
      description: "98% pass rate annually",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: `radial-gradient(circle, #FF5722 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-2">
            Take Action
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Start Your <span className="text-gradient">Journey</span> With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join one of the most prestigious educational institutions in Bangladesh
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Apply for Admission Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 md:p-10 relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Apply for Admission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Start your academic journey with us. Admission open for new session 2025. 
                    Easy online application process with instant confirmation.
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="gradient-primary hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 font-bold text-base px-8 py-6 rounded-full w-full"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t">
                  {highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="text-center">
                        <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-xs text-muted-foreground font-medium">
                          {highlight.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Explore Campus Card */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-8 md:p-10 relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Explore Campus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take a virtual tour of our modern facilities, classrooms, laboratories, 
                    library, and sports complex. Experience campus life before joining.
                  </p>
                </div>

                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 font-bold text-base px-8 py-6 rounded-full w-full"
                >
                  Virtual Tour
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="w-full pt-4 border-t space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">Campus Open Daily 8AM - 5PM</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Schedule a physical visit or explore online
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Stats Banner */}
        <div className="bg-gradient-to-r from-primary via-primary/95 to-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-bold">50+</div>
              <div className="text-white/90 font-medium text-sm md:text-base">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-bold">2000+</div>
              <div className="text-white/90 font-medium text-sm md:text-base">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-bold">150+</div>
              <div className="text-white/90 font-medium text-sm md:text-base">Expert Teachers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-bold">98%</div>
              <div className="text-white/90 font-medium text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
