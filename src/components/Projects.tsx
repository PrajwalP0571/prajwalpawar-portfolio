
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce solution with product management, cart functionality, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'An application that helps developers create beautiful portfolio websites without coding.',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for organizing tasks with deadlines, priorities, and team collaboration.',
      tags: ['React', 'Redux', 'Express', 'PostgreSQL'],
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that provides forecasts and historical weather data visualization.',
      tags: ['JavaScript', 'Chart.js', 'Weather API'],
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      demoUrl: '#',
      repoUrl: '#',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="section-subheading">My Work</span>
          <h2 className="section-heading">Recent Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              animationDelay={`animation-delay-${index * 100}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
