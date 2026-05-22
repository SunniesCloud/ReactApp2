import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imagePlaceholder: string;
  liveUrl?: string;
  repoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-linear-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
        {project.imagePlaceholder}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              
              {tech}
            </span>
            ))}
        </div>
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-blue-600 hover:underline text-sm">Live Demo →</a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} className="text-gray-600 hover:underline text-sm">GitHub →</a>
          )}
        </div>
      </div>
    </div>
  );
}