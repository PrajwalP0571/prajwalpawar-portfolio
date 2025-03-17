
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const WorkExperience = () => {
  const experiences: Experience[] = [
    {
      title: "AWS DevOps Intern",
      company: "Digital Edify",
      location: "Hyderabad",
      period: "Aug 2024 – present",
      responsibilities: [
        "Developed and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate build, test, and deployment processes.",
        "Implemented containerization using Docker and deployed microservices on Amazon EKS (Elastic Kubernetes Service).",
        "Created Infrastructure as Code (IaC) templates using Terraform to automate provisioning and management of AWS resources.",
        "Managed application releases with version control using Git and automated Docker image creation and deployment.",
        "Enhanced system resilience by setting up monitoring and logging with Prometheus and Grafana for real-time insights.",
        "Improved system availability and fault tolerance by configuring multi-AZ deployments and automated failover strategies.",
        "Performed regular security audits and implemented encryption and secure communication protocols to protect sensitive data."
      ]
    },
    {
      title: "Cloud Engineer Intern",
      company: "Digital Edify",
      location: "Hyderabad",
      period: "Mar 2024 – Aug 2024",
      responsibilities: [
        "Designed and deployed a highly available Virtual Private Cloud (VPC) on AWS for Kona LMS, ensuring fault tolerance and scalability across multiple Availability Zones.",
        "Configured AWS Load Balancers to distribute traffic across the backend (Node.js), frontend (React.js), and PostgreSQL database tiers.",
        "Managed and secured AWS resources using IAM roles, security groups, and NACLs to control access and enhance security.",
        "Set up Auto Scaling to dynamically adjust EC2 instances based on demand, ensuring optimal performance and cost efficiency.",
        "Deployed and managed storage solutions using Amazon S3 and EBS, optimizing storage access and performance.",
        "Monitored system health using CloudWatch and configured CloudTrail for auditing and security analysis."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-6 md:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <span className="section-subheading animate-slide-right">My Background</span>
          <h2 className="section-heading animate-slide-right animation-delay-100">
            Work Experience
          </h2>
          
          <div className="mt-10 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="animate-slide-right" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}, {exp.location}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </p>
                  </div>
                </div>
                
                <div className="glass-card p-5 rounded-lg bg-card/50">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="pl-5 relative text-muted-foreground">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
