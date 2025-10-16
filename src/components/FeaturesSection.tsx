import { GraduationCap, Library, Award, Users, Microscope, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "Experienced faculty members providing excellent education with modern teaching methods and curriculum.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Library,
      title: "Rich Library",
      description: "Well-stocked library with thousands of books, journals, and digital resources for students.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Microscope,
      title: "Science Labs",
      description: "Fully equipped laboratories for Physics, Chemistry, Biology, and Computer Science.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Excellent Results",
      description: "Consistent outstanding results in SSC and HSC examinations year after year.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Co-curricular Activities",
      description: "Sports, cultural programs, debates, and various clubs for holistic development.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Digital Campus",
      description: "Smart classrooms, online learning resources, and modern educational technology.",
      color: "from-teal-500 to-blue-500"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
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
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Facilities & <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide world-class facilities and resources to ensure the best learning environment
            for our students to thrive and excel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 hover-lift overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="pt-8 pb-6 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Container with Gradient */}
                    <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-0 group-hover:w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mt-4 transition-all duration-500 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary-hover to-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">50+</div>
              <div className="text-white/90 font-medium">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">2000+</div>
              <div className="text-white/90 font-medium">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">150+</div>
              <div className="text-white/90 font-medium">Expert Teachers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-white/90 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
