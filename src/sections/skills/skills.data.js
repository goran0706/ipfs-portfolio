import { images } from "../../constants";

const {
  blockchain,
  eth,
  angular,
  cucumber,
  figma,
  git,
  mongo,
  nextjs,
  nodejs,
  psql,
  react,
  ruby,
  selenium,
  sol,
} = images;

export const data = {
  title: "Skills & Experience",
  skills: [
    {
      icons: [ruby, cucumber, selenium],
      year: "2018",
      expTitle: "QA / Automation Tester",
      expCompany: "Company / ",
    },
    {
      icons: [figma, git, angular, react, nextjs],
      year: "2018",
      expTitle: "Frontend Developer",
      expCompany: "Company / ",
    },
    {
      icons: [nodejs, mongo, psql],
      year: "2018",
      expTitle: "Backend Developer",
      expCompany: "Company / ",
    },
    {
      icons: [blockchain, eth, sol],
      year: "2018",
      expTitle: "Blockchain Developer",
      expCompany: "Company / ",
    },
  ],
};
