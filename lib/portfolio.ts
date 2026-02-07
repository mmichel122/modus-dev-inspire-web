export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  image: string;
  tech: { name: string; icon?: string }[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    name: "AppStudio",
    description: "Cross-platform app and web builder",
    image: "/images/mockup-appstudio.png",
    tech: [
      { name: "React Native" },
      { name: "Next.js" },
      { name: "TypeScript" },
    ],
  },
  {
    id: "2",
    name: "DevOps Pipeline",
    description: "CI/CD automation platform",
    image: "/images/mockup-devops.png",
    tech: [
      { name: "Jenkins" },
      { name: "Terraform" },
      { name: "Docker" },
    ],
  },
  {
    id: "3",
    name: "Observability Hub",
    description: "Real-time monitoring dashboard",
    image: "/images/mockup-observability.png",
    tech: [
      { name: "Grafana" },
      { name: "Prometheus" },
      { name: "Datadog" },
    ],
  },
  {
    id: "5",
    name: "CloudForge",
    description: "Multi-cloud infrastructure platform",
    image: "/images/mockup-cloudforge.png",
    tech: [
      { name: "AWS" },
      { name: "GCP" },
      { name: "Azure" },
    ],
  },
  {
    id: "6",
    name: "AI Implementation",
    description: "Enterprise AI integration platform",
    image: "/images/mockup-ai.png",
    tech: [
      { name: "LangChain" },
      { name: "OpenAI" },
      { name: "Python" },
    ],
  },
  {
    id: "7",
    name: "Automation Hub",
    description: "Workflow automation & RPA platform",
    image: "/images/mockup-automation.png",
    tech: [
      { name: "n8n" },
      { name: "IaC" },
      { name: "Custom" },
    ],
  },
];
