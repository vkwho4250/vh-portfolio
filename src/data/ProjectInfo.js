const vueBulletJournal = {
   title: "Vue Bullet Journal",
   folder: "vue-bj",
   description: "The perfect tool to track and organize",
   achievements: [
      "to plan and structure databases for efficient access and manipulation",
      "how to create an API that follows the REST model",
      "to bridge back-end and front-end",
   ],
   reasons: [
      "a direct comparison between React and Vue",
      "lesson learned from prior project -- I needed global state management",
      "could now focus on creating a RESTful API and the accompanying back-end server",
      "each user required their own storage space and authentication",
   ],
   tech: ["Vue", "Vuex", "Node.js", "MongoDB", "REST API"],
   screenshots: ["vue-bj-1", "vue-bj-2", "vue-bj-2"],
   github: "https://github.com/vkwho4250/vue-bullet-journal",
   site: "https://vue-bullet-journal-vkwho.herokuapp.com/",
};

const reactBulletJournal = {
   title: "React Bullet Journal",
   folder: "react-bj",
   description: "In Progress",
   reasons: [
      "contained many reusuable features/components which made sense to switch vanilla JS over to this framework",
      "required all 4 core operations (CRUD) to prelude making a RESTful API ",
      "Having once been a bullet journal user, imagine how much nicer it'd be if I didn't run out of pages?",
   ],
   achievements: [
      "the underlying structure of component-based frameworks",
      "states, props and the lifecycle of a component",
      "really digging into the React docs (or docs in general) to fix bugs and learn WHY something works (or mostly, doesn't)",
   ],
   tech: ["React", "Responsive Design"],
   screenshots: ["react-bj-1", "react-bj-2", "react-bj-3"],
   github: "https://github.com/vkwho4250/react-frontend-journal",
   site: "",
};

const yahtzee = {
   title: "Yahtzee",
   folder: "yahtzee",
   description: "The classic dice strategy game",
   reasons: [
      "required user participation",
      "involved routine, turn-based operations -- meant reuse of a couple key functions",
      "game logic covered many of the JavaScript fundamentals",
   ],
   achievements: [
      "to structure code for readability and reusability",
      "the DOM structure and how to access/manipulate elements",
      "where/how to use key JS concepts: conditions, loops, forEach, reduce and more",
      "to comment, debug and google (maniacally) when stuck",
   ],
   tech: ["HTML5", "CSS3", "JavaScript"],
   screenshots: ["yahtzee-1", "yahtzee-2", "yahtzee-3"],
   github: "https://github.com/vkwho4250/JavaScript-Yahtzee",
   site: "https://yahtzee-vkwho.netlify.app/",
};

const rockPaperScissors = {
   title: "Rock-Paper-Scissors",
   folder: "rps",
   description: "The game that never gets old",
   reasons: [
      "break out of the tutorial trap and test my HTML, CSS and JS knowledge",
      "get a sense of this common design-to-code process",
      "very simple game logic -- allowed me to focus on styling and learning the jQuery syntax",
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
   reactBulletJournal,
   rockPaperScissors,
];

export default ProjectInfo;
