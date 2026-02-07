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
    image: "/images/mockup-flow.png",
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
    image: "/images/mockup-artisan.png",
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
    image: "/images/mockup-nexus.png",
    tech: [
      { name: "Grafana" },
      { name: "Prometheus" },
      { name: "Datadog" },
    ],
  },
  {
    id: "4",
    name: "Pulse Health",
    description: "Care coordination and telemedicine",
    image: "/images/mockup-pulse.png",
    tech: [
      { name: "React Native" },
      { name: "Kubernetes" },
      { name: "MLOps" },
    ],
  },
  {
    id: "5",
    name: "CloudForge",
    description: "Multi-cloud infrastructure platform",
    image: "/images/mockup-vault.png",
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
    image: "/images/mockup-lens.png",
    tech: [
      { name: "LangChain" },
      { name: "OpenAI" },
      { name: "Python" },
    ],
  },
];
