
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className = "", 
  iconSize = 20 
}) => {
  const socialLinks = [
    { 
      name: 'Github', 
      icon: <Github size={iconSize} />, 
      url: 'https://github.com/' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={iconSize} />, 
      url: 'https://twitter.com/' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={iconSize} />, 
      url: 'https://linkedin.com/in/' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={iconSize} />, 
      url: 'https://instagram.com/' 
    },
    { 
      name: 'Email', 
      icon: <Mail size={iconSize} />, 
      url: 'mailto:example@example.com' 
    },
  ];

  return (
    <div className={`flex items-center space-x-5 ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-foreground transition-colors duration-200"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
