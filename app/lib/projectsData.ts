import { Project} from '@/app/components/ProjectCard';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Analytics Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses to track sales, customer behavior, and inventory. Features interactive charts and real-time data updates.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Prisma'],
    imagePlaceholder: '📊 E-Commerce',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'TaskFlow - Smart Task Manager',
    description: 'A productivity app with drag-and-drop task organization, due date tracking, and team collaboration features. Includes local storage persistence and dark mode.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React DnD'],
    imagePlaceholder: '✅ TaskFlow',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'A web app that uses AI to generate blog posts, social media captions, and marketing copy. Features multiple templates and export options.',
    techStack: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    imagePlaceholder: '🤖 AI Gen',
    liveUrl: '#',
    repoUrl: '#',
  },
];