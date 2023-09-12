import denoAlt1 from "./logos/deno-alt1.svg";
import denoAlt2 from "./logos/deno-alt2.svg";
import denoAlt3 from "./logos/deno-alt3.svg";
import denoAlt4 from "./logos/deno-alt4.svg";
import ddAlt1 from "./logos/dd-alt1.svg";
import ddAlt2 from "./logos/dd-alt2.svg";
import ddAlt3 from "./logos/dd-alt3.svg";
import ddAlt4 from "./logos/dd-alt4.svg";
// import piniaAlt1 from './logos/pinia-alt1.svg' Dropping pinia as question since it will be used as example in Hackweek video
// import piniaAlt2 from './logos/pinia-alt2.svg'
// import piniaAlt3 from './logos/pinia-alt3.svg'
// import piniaAlt4 from './logos/pinia-alt4.svg'
import vueAlt1 from "./logos/vue-alt1.svg";
import vueAlt2 from "./logos/vue-alt2.svg";
import vueAlt3 from "./logos/vue-alt3.svg";
import vueAlt4 from "./logos/vue-alt4.svg";
import vercelAlt1 from "./logos/vercel-alt1.svg";
import vercelAlt2 from "./logos/vercel-alt2.svg";
import vercelAlt3 from "./logos/vercel-alt3.svg";
import vercelAlt4 from "./logos/vercel-alt4.svg";
import bunAlt4 from "./logos/bun-alt4.svg";
import bunAlt1 from "./logos/bun-alt1.svg";
import bunAlt2 from "./logos/bun-alt2.svg";
import bunAlt3 from "./logos/bun-alt3.svg";
// import rustAlt1 from './logos/rust-alt1.svg' Dropping rust to make this 10 questions
// import rustAlt2 from './logos/rust-alt2.svg'
// import rustAlt3 from './logos/rust-alt3.svg'
// import rustAlt4 from './logos/rust-alt4.svg'
import githubAlt1 from "./logos/github-alt1.svg";
import githubAlt2 from "./logos/github-alt2.svg";
import githubAlt3 from "./logos/github-alt3.svg";
import githubAlt4 from "./logos/github-alt4.svg";
import gibAlt1 from "./logos/gib-alt1.svg";
import gibAlt2 from "./logos/gib-alt2.svg";
import gibAlt3 from "./logos/gib-alt3.svg";
import gibAlt4 from "./logos/gib-alt4.svg";
import javaAlt1 from "./logos/java-alt1.svg";
import javaAlt2 from "./logos/java-alt2.svg";
import javaAlt3 from "./logos/java-alt3.svg";
import javaAlt4 from "./logos/java-alt4.svg";
import latticeAlt1 from "./logos/lattice-alt1.svg";
import latticeAlt2 from "./logos/lattice-alt2.svg";
import latticeAlt3 from "./logos/lattice-alt3.svg";
import latticeOG from "./logos/lattice-alt4.svg";
import sentryAlt1 from "./logos/sentry-alt1.svg";
import sentryAlt2 from "./logos/sentry-alt2.svg";
import sentryAlt3 from "./logos/sentry-alt3.svg";
import sentryAlt4 from "./logos/sentry-alt4.svg";
import pyAlt1 from "./logos/py-alt1.svg";
import pyAlt2 from "./logos/py-alt2.svg";
import pyAlt3 from "./logos/py-alt3.svg";
import pyAlt4 from "./logos/py-alt4.svg";
import covAlt1 from "./logos/codecov-alt1.svg";
import covAlt2 from "./logos/codecov-alt2.svg";
import covAlt3 from "./logos/codecov-alt3.svg";
import covAlt4 from "./logos/codecov-alt4.svg";
import reactAlt1 from "./logos/react-alt1.svg";
import reactAlt2 from "./logos/react-alt2.svg";
import reactAlt3 from "./logos/react-alt3.svg";
import reactAlt4 from "./logos/react-alt4.svg";
import rubyAlt1 from "./logos/ruby-alt1.svg";
import rubyAlt2 from "./logos/ruby-alt2.svg";
import rubyAlt3 from "./logos/ruby-alt3.svg";
import rubyAlt4 from "./logos/ruby-alt4.svg";

const answersIndex = {
  bun: 3, // bun-alt3.svg
  codecov: 1, // codecov-alt1.svg, etc ...
  dd: 2,
  deno: 4,
  gib: 3,
  github: 4,
  java: 1,
  lattice: 2,
  pinia: 4,
  py: 2,
  react: 3,
  ruby: 3,
  rust: 4,
  sentry: 1,
  vercel: 4,
  vue: 1,
};

export const quiz = {
  perQuestionScore: 1,
  questions: [
    {
      name: "deno",
      question: "Which is the real deno logo?",
      choices: [denoAlt1, denoAlt2, denoAlt3, denoAlt4],
    },
    {
      name: "ruby",
      question: "Which is the real Ruby logo?",
      choices: [rubyAlt1, rubyAlt2, rubyAlt3, rubyAlt4],
    },

    //{
    //question: 'Which is the real DataDog logo?',
    //choices: [ddAlt1, ddAlt4, ddAlt2, ddAlt3],
    //correctAnswer: ddAlt4
    //},
    //{
    //question: 'Which is the real pinia logo?',
    //choices: [piniaAlt1, piniaAlt2, piniaAlt4, piniaAlt3],
    // correctAnswer: piniaAlt1.replace("1", answers.pinia),
    //},
    {
      name: "vue",
      question: "Which is the real Vue logo?",
      choices: [vueAlt1, vueAlt2, vueAlt3, vueAlt4],
    },

    // {
    //     question: 'Which is the real Java mascot?',
    //     choices: [javaAlt1, javaAlt2, javaAlt3, javaAlt4],
    //     correctAnswer: javaAlt1.replace("1", answersIndex.java),
    // },

    {
      name: "bun",
      question: "Which is the real Bun logo?",
      choices: [bunAlt1, bunAlt2, bunAlt3, bunAlt4],
    },

    // {
    //     question: 'Which is the real Lattice logo?',
    //     choices: [latticeAlt1, latticeAlt2, latticeAlt3, latticeOG],
    //     correctAnswer: latticeOG,
    // },

    {
      name: "codecov",
      question: "Which is the real Codecov logo?",
      choices: [covAlt1, covAlt2, covAlt3, covAlt4],
    },

    {
      name: "vercel",
      question: "Which is the real Vercel logo?",
      choices: [vercelAlt1, vercelAlt2, vercelAlt3, vercelAlt4],
    },

    {
      name: "py",
      question: "Which is the real Python logo?",
      choices: [pyAlt1, pyAlt2, pyAlt3, pyAlt4],
    },

    {
      name: "react",
      question: "Which is the real React logo?",
      choices: [reactAlt1, reactAlt2, reactAlt3, reactAlt4],
    },

    //{
    //question: 'Which is the real GibPotato logo?',
    //choices: [gibAlt1, gibAlt2, gibAlt3, gibAlt4],
    //correctAnswer: gibAlt1.replace("1", answers.gib),
    //},

    {
      name: "github",
      question: "Which is the real GitHub logo?",
      choices: [githubAlt1, githubAlt2, githubAlt3, githubAlt4],
    },

    //{
    //question: 'Which is the real unofficial mascot of Rust? (Our friend Ferris)',
    //choices: [rustAlt1, rustAlt2, rustAlt3, rustAlt4],
    //correctAnswer: rustAlt1.replace("1", answers.rust),
    //},

    {
      name: "sentry",
      question: "Which is the real Sentry logo?",
      choices: [sentryAlt1, sentryAlt2, sentryAlt3, sentryAlt4],
    },
  ],
};

// iterate through each answer index, and assign the answer to the quiz property
quiz.questions.forEach((question) => {
  // note: answersIndex starts at 1 (not 0)
  question.correctAnswer = question.choices[answersIndex[question.name] - 1];
});
