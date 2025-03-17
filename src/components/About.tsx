
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="section-subheading animate-slide-right">About Me</span>
            <h2 className="section-heading animate-slide-right animation-delay-100">
              Cloud & DevOps Professional
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="animate-slide-right animation-delay-200">
                I'm a skilled Cloud Computing and DevOps engineer with extensive experience in building and maintaining robust, scalable infrastructure. My approach combines automation, security best practices, and continuous integration to create efficient, resilient systems.
              </p>
              
              <p className="animate-slide-right animation-delay-300">
                I specialize in transforming traditional infrastructure into modern, cloud-native architectures. My expertise lies in optimizing deployment pipelines, implementing infrastructure as code, and ensuring high availability and security across cloud environments.
              </p>
              
              <div className="pt-2 animate-slide-right animation-delay-400">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  What I offer:
                </h3>
                <ul className="space-y-2">
                  {[
                    'Cloud architecture and migration strategies',
                    'DevOps implementation and optimization',
                    'CI/CD pipeline automation',
                    'Infrastructure as Code (IaC) solutions',
                    'Security-focused cloud configurations',
                    'Performance monitoring and optimization'
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
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Cloud Computing"
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
