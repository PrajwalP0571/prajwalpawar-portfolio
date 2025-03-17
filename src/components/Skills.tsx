
import { 
  CheckCircle2, 
  Code2, 
  Cloud, 
  Database, 
  Shield, 
  GitBranch, 
  Terminal, 
  ServerCrash,
  Network
} from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  icon,
  skills,
  delay = 0
}) => (
  <div className={`glass-card p-6 rounded-lg animate-slide-up animation-delay-${delay}`}>
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-md bg-primary/10 mr-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle2 size={14} className="text-primary mr-2 flex-shrink-0" />
          <span className="text-muted-foreground">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 size={20} className="text-primary" />,
      skills: ['Python', 'Bash', 'Shell Scripting', 'Java', 'SDLC Knowledge']
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud size={20} className="text-primary" />,
      skills: ['AWS (EC2, VPC, IAM, S3, RDS, Lambda, ECS, EKS)', 'Azure', 'GCP', 'IaC with Terraform']
    },
    {
      title: 'DevOps',
      icon: <GitBranch size={20} className="text-primary" />,
      skills: ['Git & GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      title: 'Monitoring & Logging',
      icon: <ServerCrash size={20} className="text-primary" />,
      skills: ['CloudWatch', 'Prometheus', 'Grafana', 'ELK Stack', 'Log Analysis', 'Performance Monitoring']
    },
    {
      title: 'Security & Networking',
      icon: <Shield size={20} className="text-primary" />,
      skills: ['IAM', 'VPC Configuration', 'Security Groups', 'Load Balancers', 'NACLs', 'Network Architecture']
    },
    {
      title: 'Troubleshooting',
      icon: <Terminal size={20} className="text-primary" />,
      skills: ['System Diagnostics', 'Issue Resolution', 'Debugging', 'Root Cause Analysis', 'Performance Optimization', 'Technical Documentation']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="section-subheading">My Expertise</span>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I specialize in cloud infrastructure, DevOps practices, and automation solutions to build resilient, scalable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={(index % 3) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
