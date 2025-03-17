
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import SocialIcons from './SocialIcons';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="section-subheading animate-slide-down">Hello, my name is</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-4 animate-slide-down animation-delay-100">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground mb-6 animate-slide-down animation-delay-200">
            I'm a{' '}
            <AnimatedText
              texts={[
                'Web Developer',
                'UI/UX Designer',
                'Software Engineer'
              ]}
              className="text-foreground"
            />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-slide-down animation-delay-300">
            Building digital experiences that blend form and function. I craft clean, intuitive, and performant websites that deliver exceptional user experiences.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 animate-slide-down animation-delay-400">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium flex items-center group hover:translate-y-[-2px] transition-transform"
            >
              Contact Me
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
