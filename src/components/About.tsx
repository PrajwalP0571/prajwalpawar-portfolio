
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="section-subheading animate-slide-right">About Me</span>
            <h2 className="section-heading animate-slide-right animation-delay-100">
              Passionate about creating beautiful experiences
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="animate-slide-right animation-delay-200">
                I'm a versatile developer with 5+ years of experience building premium websites and applications. My approach combines technical expertise with an eye for design, resulting in solutions that are both functional and aesthetically pleasing.
              </p>
              
              <p className="animate-slide-right animation-delay-300">
                I enjoy transforming complex problems into simple, beautiful and intuitive designs. My aim is to create software that not only serves its purpose effectively but also provides a seamless user experience.
              </p>
              
              <div className="pt-2 animate-slide-right animation-delay-400">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  What I offer:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Clean and maintainable code',
                    'Responsive and accessible designs',
                    'Performance optimized applications',
                    'SEO best practices',
                    'UI/UX focused development'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mt-1 mr-2 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="About me"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 border-4 border-background rounded-lg -z-10 bg-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
