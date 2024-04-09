import { Project, TechnologyData } from '../types';

export function getOrderedProjects(projects: Project[]): Project[] {
  const orderedProjects: Project[] = [];
  projects?.map((project, i) => {
    if (i % 2 !== 0) {
      orderedProjects.push(project);
    }
  });
  projects?.map((project, i) => {
    if (i % 2 === 0) {
      orderedProjects.push(project);
    }
  });
  return orderedProjects;
}

export function getTechnologies(technologies: TechnologyData[]): string[] {
  return technologies?.map((technology) => technology?.attributes?.Title);
}
