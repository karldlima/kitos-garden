// TODO: typing
export function getOrderedProjects(projects: any) {
  const orderedProjects = [];
  projects.map((project, i) => {
    if (i % 2 !== 0) {
      orderedProjects.push(project);
    }
  });
  projects.map((project, i) => {
    if (i % 2 === 0) {
      orderedProjects.push(project);
    }
  });
  return orderedProjects;
}

// TODO: typing
export function getTechnologies(technologies: any) {
  return technologies?.map((technology) => technology?.attributes?.Title);
}
