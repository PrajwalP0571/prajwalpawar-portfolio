
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Deployment',
      description: 'Implemented a scalable Kubernetes infrastructure across AWS and GCP with automated CI/CD pipelines and monitoring.',
      tags: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'CI/CD'],
      imageUrl: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Infrastructure as Code Framework',
      description: 'Developed a comprehensive Terraform framework for consistent cloud resource provisioning with built-in security controls.',
      tags: ['Terraform', 'AWS', 'Security', 'IaC', 'Python'],
      imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Automated Monitoring Platform',
      description: 'Created a centralized monitoring solution using Prometheus, Grafana, and custom alerts for proactive incident response.',
      tags: ['Prometheus', 'Grafana', 'Docker', 'Python', 'AWS'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Serverless Microservices Architecture',
      description: 'Designed and implemented a serverless application with AWS Lambda, API Gateway, and DynamoDB with CI/CD automation.',
      tags: ['AWS Lambda', 'Serverless', 'DynamoDB', 'GitHub Actions', 'Python'],
      imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
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
            A selection of my cloud and DevOps projects that showcase my expertise in building secure, scalable infrastructure.
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
