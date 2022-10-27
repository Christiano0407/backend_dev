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
};

//console.log(infoCourses);
module.exports.infoCourses = infoCourses;
