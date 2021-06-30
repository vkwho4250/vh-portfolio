const yahtzee = {
  title: "Yahtzee",
  folder: "yahtzee",
  description: "A modern take on the classic dice strategy game",
  reasons: [
    "responsive to user interaction",
    "involved routine, turn-based operations which allowed reuse of key functions",
    "game logic can be executed using JavaScript fundamentals",
  ],
  achievements: [
    "to structure code for readability and reusability",
    "about the DOM structure and how to access/manipulate elements",
    "where/how to use key JS concepts: conditions, loops, forEach, reduce and more",
    "to comment, debug and google (maniacally) when stuck",
  ],
  tech: ["HTML5", "CSS3", "JavaScript"],
  screenshots: ["yahtzee-1", "yahtzee-2", "yahtzee-3"],
  github: "https://github.com/vkwho4250/JavaScript-Yahtzee",
  site: "https://yahtzee-vkwho.netlify.app/",
};

const vueBulletJournal = {
  title: "Vue Bullet Journal",
  folder: "vue-bj",
  description: "The perfect tool for users to track, input and organize",
  reasons: [
    "to compare between React and Vue",
    "every user required their own storage space and authentication",
    "to create a RESTful API and the accompanying back-end server",
    "an opportunity to use global state management",
  ],
  achievements: [
    "to plan and structure databases for efficient access and manipulation",
    "how to create an API that follows the REST model",
    "to connect back-end to front-end",
  ],
  tech: ["Vue", "Vuex", "Node.js", "MongoDB", "REST API"],
  screenshots: ["vue-bj-1", "vue-bj-3", "vue-bj-2"],
  github: "https://github.com/vkwho4250/vue-bullet-journal",
  site: "https://vue-bullet-journal-vkwho.herokuapp.com/",
};

const reactBulletJournal = {
  title: "React Bullet Journal",
  folder: "react-bj",
  description: "An 'at-a-glance' user interface for fans of BUJO",
  reasons: [
    "contained many reusuable features/components",
    "involved similar steps/functions for different tasks",
    "required all 4 core operations (CRUD) as prelude to making a RESTful API ",
  ],
  achievements: [
    "the underlying structure of component-based frameworks",
    "about states, props and the lifecycle of a component",
    "to really dig into the React docs (or docs in general) to fix bugs and learn WHY something works (or mostly, doesn't)",
  ],
  tech: ["React", "Responsive Design"],
  screenshots: ["react-bj-1", "react-bj-2", "react-bj-3"],
  github: "https://github.com/vkwho4250/react-frontend-journal",
  site: "https://react-frontend-journal.netlify.app",
};

const reactLandingPage = {
  title: "React Landing Page (WIP)",
  folder: "react-lp-clone",
  description: "A clone of an award-winning design landing page",
  reasons: [
    "aesthetically pleasing design that represents the modern landing page",
    "trains my ability to recognize detail and problem solve to achieve it",
    "involves many reusable components perfect for React environment",
  ],
  achievements: [
    "to replicate modern and professional design components with no guidance",
    "incorporated animation library into React that utilizes states",
    "used Sass to improve structure, efficiency and reusability of styling code",
  ],
  tech: ["React", "Sass", "Framer-Motion", "Responsive Design"],
  screenshots: ["react-lp-clone-1", "react-lp-clone-2", "react-lp-clone-3"],
  github: "https://github.com/vkwho4250/react-lp-clone",
  site: "https://react-lp-clone.netlify.app/",
};

const rockPaperScissors = {
  title: "Rock-Paper-Scissors",
  folder: "rps",
  description: "The game that never gets old",
  reasons: [
    "to get a sense of this common design-to-code process",
    "the simple game logic allowed me to focus on styling and the jQuery syntax",
  ],
  achievements: [
    "to translate an idea to a responsive website",
    "how to transition between mobile and desktop designs",
  ],
  tech: ["jQuery", "Responsive Design", "PSD Conversion"],
  screenshots: ["rps-1", "rps-2", "rps-3"],
  github: "https://github.com/vkwho4250/psd-conversion-rps",
  site: "https://rock-paper-scissors-vkwho.netlify.app/",
};

const ProjectInfo = [
  yahtzee,
  vueBulletJournal,
  reactLandingPage,
  rockPaperScissors,
];

export default ProjectInfo;
