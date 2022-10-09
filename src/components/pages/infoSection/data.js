export const lifeObj = {
  id: "life",
  lightBg: false,
  lightText: true,
  topSpace: "20px",
  lightTextDesc: true,
  topLine: "LIFE IN AUSTRALIA",
  description: (
    <p style={{ fontWeight: "520", fontSize: "19px" }}>
      Too young to drive? Looking for the easiest ways on how to set-up your
      bank account in Australia? Check out the complete guide to settle in Victoria.
      Don't miss out anything
      necessary!
    </p>
  ),
  img: require("../../../images/life.jpg"),
  alt: "svg3",
  dark: true,
  showCard: true,
  cards: [
    {
      title: "Transport",
      info: "empty",
      nav: "transport",
      col: "#f0b899",
    },
    {
      title: <p style={{ color: "black" }}>Bank Account Set Up</p>,
      info: "empty",
      nav: "bank",
      col: "#f0e9c5",
    },
  ],
  imgStart: true,
  primary: true,
  darkText: false,
};

export const learnObj = {
  id: "learn",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topSpace: "30px",
  topLine: "LEARNING ENGLISH",
  showCard: true,
  cards: [
    {
      title: "Grammar Ability Test",
      info: "empty",
      nav: "english-quiz",
      col: "#e8b582",
    },
    {
      title: "Slang Game",
      info: "empty",
      nav: "slang",
      col: "#f0e9c5",
    },
    {
      title: "Grammar Checker",
      info: "empty",
      nav: "writing",
      col: "#7eafbf",
    },
  ],
  description: (
    <p style={{ fontWeight: "520", fontSize: "19px" }}>
      Speaking English in an Australian way is not that difficult. The features
      are here for you to learn and practice your English skill.
    </p>
  ),
  img: require("../../../images/learneng.jpg"),
  alt: "svg3",
  imgStart: true,
  dark: true,
  primary: true,
  darkText: false,
};

export const socialObj = {
  id: "social",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  showCard: true,
  topSpace: "-120px",
  topLine: "EXPLORE LOCAL CULTURE",
  description: (
    <p style={{ fontWeight: "520", fontSize: "19px" }}>
      Looking for famous landmarks in Melbourne and experience local scenery by
      using the interactive feature to find your way around.
    </p>
  ),
  cards: [
    {
      title: "Explore Melbourne",
      info: "empty",
      nav: "explore-melb",
      col: "#e8b582",
    },
    {
      title: "Venues & Events Statistics",
      info: "empty",
      nav: "statistics",
      col: "#D6E187",
    },
  ],
  img: require("../../../images/entertain.jpg"),
  alt: "svg3",
  imgStart: true,
  dark: true,
  primary: true,
  darkText: false,
};
