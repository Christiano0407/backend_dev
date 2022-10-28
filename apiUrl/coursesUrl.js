let infoCourses = {
  programming: [
    {
      id: 1,
      title: `Learning Python`,
      language: `Python`,
      views: 15000,
      level: `Basic`,
    },
    {
      id: 2,
      title: `Python for Data`,
      language: `Python`,
      views: 20000,
      level: `medium`,
    },
    {
      id: 3,
      title: `Python for IA`,
      language: `Python`,
      view: 30000,
      level: `Expert`,
    },
  ],
  math: [
    {
      id: 1,
      title: `Math for Developers`,
      language: `Python`,
      theme: "Calc",
      views: 10000,
      level: `medium`,
    },
  ],
  cloud: [
    {
      id: 1,
      title: `Google Cloud Basic`,
      level: `Basic`,
    },
    {
      id: 2,
      title: `Microsoft Azure Basic`,
      level: `Basic`,
    },
    {
      id: 3,
      title: `Amazon Web Service Basic`,
      level: `Basic`,
    },
  ],
  data: [
    {
      id: 1,
      title: "Basic SQL",
      language: "PHP",
      level: "Basic",
    },
    {
      id: 2,
      title: "PostgreSQL",
      language: "PHP",
      level: "Medium",
    },
    {
      id: 3,
      title: "Basic R",
      language: "Python",
      level: "Expert",
    },
  ],
  python: [
    {
      id: 1,
      title: "Fundaments of Python",
      language: "Python",
      level: "Basic",
    },
    {
      id: 2,
      title: "Basic Terminal",
      language: "Git",
      level: "Basic",
    },
    {
      id: 3,
      title: "Basic Git & GitHub",
      language: "Git",
      level: "Basic",
    },
    {
      id: 4,
      title: "Algorithm with Python",
      language: {
        basic: "PHP",
        medium: ["SQL", "MySQL", "PostgreSQL", "Python"],
        expert: "R",
      },
      level: "Medium",
    },
  ],
  developer: [
    {
      basic: [
        {
          id: 1,
          title: "Basic HTML",
          language: "HTML",
          level: "Basic",
        },
        {
          id: 2,
          title: "Basic CSS",
          language: "CSS",
          level: "Basic",
        },
        {
          id: 3,
          title: "Basic HTML & CSS",
          language: ["HTML", "CSS"],
          level: "Basic",
        },
      ],
    },
    {
      medium: [
        {
          id: 1,
          title: "Basic Javascript",
          language: "Javascript",
          level: "medium",
        },
        {
          id: 2,
          title: "Backend with Node Js",
          language: "Javascript",
          level: "medium",
        },
        {
          id: 3,
          title: "Frontend & Backend",
          language: [
            "HTML",
            "CSS",
            "Javascript",
            "NodeJs",
            "Git",
            "GitHub",
            "Npm",
          ],
          level: "Medium",
        },
      ],
    },
    {
      expert: [
        {
          id: 1,
          title: "Full React Js",
          language: ["Javascript", "NodeJs", "ExpressJs"],
          frameworks: [
            {
              basicFrameworks: ["Webpack", "Jamstack", "ViteJs", "NextJS"],
            },
          ],
          level: "Expert",
        },
        {
          id: 2,
          title: "Full VueJs",
          language: ["Javascript", "NodeJs", "ExpressJs"],
          frameworks: [
            {
              basicFrameworks: ["Webpack", "Jamstack", "ViteJs", "NextJS"],
            },
          ],
          level: "medium",
        },
        {
          id: 3,
          title: "Full Angular",
          language: ["Javascript", "Node Js", "ExpressJs"],
          frameworks: [
            {
              basicFrameworks: ["Webpack", "Jamstack", "ViteJs", "NextJS"],
            },
          ],
          level: "Expert",
        },
        {
          id: 4,
          title: "Bootcamp Developer",
          language: ["ReactJs", "VueJs", "Angular", "Svelte"],
          frameworks: [
            {
              basicFrameworks: ["Webpack", "Jamstack", "ViteJs", "NextJS"],
            },
          ],
          level: "Expert",
        },
      ],
    },
  ],
};

//console.log(infoCourses);
module.exports.infoCourses = infoCourses;
