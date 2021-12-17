const skills = {
  frontendSkill: {
    html: 90,
    css: 80,
    javascript: 60,
    react: 70,
  },
  backendSkills: {
    php: 60,
    node: 50,
    mysql: 60,
    python: 40,
  },
  designSkills: {
    figma: 60,
    sketch: 50,
    photoshop: 80,
    illustrator: 40,
  },
};

for (const key in skills) {
  if (Object.hasOwnProperty.call(skills, key)) {
    const element = skills[key];

    for (const [key, value] of Object.entries(element)) {
      const skillContainer = document.getElementsByClassName(`skills-${key}`);

      if (skillContainer.length) {
        skillContainer[0].style.width = `${value}px`;
      }
    }
  }
}