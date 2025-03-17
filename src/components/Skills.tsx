
import { 
  CheckCircle2, 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  PenTool, 
  Terminal 
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
      title: 'Frontend',
      icon: <Code2 size={20} className="text-primary" />,
      skills: ['HTML/CSS', 'JavaScript (ES6+)', 'React', 'Vue.js', 'TypeScript', 'Next.js']
    },
    {
      title: 'Backend',
      icon: <Terminal size={20} className="text-primary" />,
      skills: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'REST API']
    },
    {
      title: 'Database',
      icon: <Database size={20} className="text-primary" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      title: 'Design',
      icon: <Palette size={20} className="text-primary" />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Tools',
      icon: <PenTool size={20} className="text-primary" />,
      skills: ['Git', 'Docker', 'Webpack', 'Vite', 'GitHub Actions', 'CI/CD']
    },
    {
      title: 'Other',
      icon: <Globe size={20} className="text-primary" />,
      skills: ['SEO', 'Performance Optimization', 'Accessibility', 'Testing', 'PWA', 'Technical Writing']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="text-center mb-12">
          <span className="section-subheading">My Expertise</span>
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I continuously expand my technical toolkit to stay at the forefront of web development.
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
