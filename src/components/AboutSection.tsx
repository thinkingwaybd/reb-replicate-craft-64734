import aboutImage from "@/assets/about-campus.jpg";
import { Award, Users, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Award, label: "50+ Years Excellence", color: "text-orange-500" },
    { icon: Users, label: "2000+ Students", color: "text-blue-500" },
    { icon: BookOpen, label: "Modern Curriculum", color: "text-green-500" },
    { icon: Target, label: "98% Success Rate", color: "text-purple-500" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with Overlay Stats */}
          <div className="order-2 md:order-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="School Campus"
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-xl animate-float">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground font-semibold">Years Legacy</div>
              </div>
            </div>

            {/* Mini Stats Cards */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all hover-lift">
                    <Icon className={`h-6 w-6 ${item.color} mb-2`} />
                    <p className="text-xs font-semibold text-muted-foreground">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                About Our Institution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Welcome to Rajshahi Education Board
                <span className="text-primary"> Govt. Model School & College</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Established as a <span className="font-semibold text-foreground">premier educational institution</span> under the Rajshahi Education Board,
                our school has been a beacon of academic excellence for over five decades. We are committed to
                providing quality education and nurturing future leaders.
              </p>
              <p>
                Our institution offers education from primary through higher secondary levels, with
                <span className="font-semibold text-foreground"> state-of-the-art facilities</span> and experienced faculty members dedicated to student success.
                We believe in holistic development that combines academic rigor with character building.
              </p>
              <p>
                With over <span className="font-semibold text-primary">2000 students enrolled</span> and a dedicated team of 150+ faculty members,
                we maintain a perfect balance between academic rigor and co-curricular activities, ensuring 
                holistic development of every student.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Our Vision & Mission
              </h3>
              <ul className="space-y-3">
                {[
                  "Provide world-class education accessible to all students",
                  "Develop critical thinking and innovative problem-solving skills",
                  "Foster moral values, ethics, and responsible leadership",
                  "Prepare students to excel in global challenges and opportunities"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
