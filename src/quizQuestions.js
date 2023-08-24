
import denoAlt1 from './logos/deno-alt1.svg';
import denoAlt2 from './logos/deno-alt2.svg';
import denoAlt3 from './logos/deno-alt3.svg';
import denoAltOG from './logos/deno-original.svg';
import ddAlt1 from './logos/dd-alt1.svg'
import ddAlt2 from './logos/dd-alt2.svg'
import ddAlt3 from './logos/dd-alt3.svg'
import ddAltOG from './logos/dd-original.svg'
import piniaAlt1 from './logos/pinia-alt1.svg'
import piniaAlt2 from './logos/pinia-alt2.svg'
import piniaAlt3 from './logos/pinia-alt3.svg'
import piniaAltOG from './logos/pinia-original.svg'
import vueAlt1 from './logos/vue-alt1.svg'
import vueAlt2 from './logos/vue-alt2.svg'
import vueAlt3 from './logos/vue-alt3.svg'
import vueAltOG from './logos/vue-original.svg'
import vercelAlt1 from './logos/vercel-alt1.svg'
import vercelAlt2 from './logos/vercel-alt2.svg'
import vercelAlt3 from './logos/vercel-alt3.svg'
import vercelAltOG from './logos/vercel-original.svg'
import rustAlt1 from './logos/rust-alt1.svg'
import rustAlt2 from './logos/rust-alt2.svg'
import rustAlt3 from './logos/rust-alt3.svg'
import rustAltOG from './logos/rust-original.svg'
import githubAlt1 from './logos/github-alt1.svg'
import githubAlt2 from './logos/github-alt2.svg'
import githubAlt3 from './logos/github-alt3.svg'
import githubAltOG from './logos/github-original.svg'
import gibAlt1 from './logos/gib-alt1.svg'
import gibAlt2 from './logos/gib-alt2.svg'
import gibAlt3 from './logos/gib-alt3.svg'
import gibAltOG from './logos/gib-original.svg'
import javaAlt1 from './logos/java-alt1.svg'
import javaAlt2 from './logos/java-alt2.svg'
import javaAlt3 from './logos/java-alt3.svg'
import javaAltOG from './logos/java-original.svg'
import latticeAlt1 from './logos/lattice-alt1.svg'
import latticeAlt2 from './logos/lattice-alt2.svg'
import latticeAlt3 from './logos/lattice-alt3.svg'
import latticeOG from './logos/lattice-original.svg'
import sentryAlt1 from './logos/sentry-alt1.svg'
import sentryAlt2 from './logos/sentry-alt2.svg'
import sentryAlt3 from './logos/sentry-alt3.svg'
import sentryAltOG from './logos/sentry-original.svg'
import pyAlt1 from './logos/py-alt1.svg'
import pyAlt2 from './logos/py-alt2.svg'
import pyAlt3 from './logos/py-alt3.svg'
import pyAltOG from './logos/py-original.svg'

export const quiz = {
    totalQuestions: 11,
    perQuestionScore: 1,
    questions: [
        {
            question: 'Which is the real deno logo?',
            choices: [denoAlt1, denoAlt2, denoAlt3, denoAltOG],
            correctAnswer: denoAltOG,
        },
        {
            question: 'Which is the real DataDog logo?',
            choices: [ddAlt1, ddAltOG, ddAlt2, ddAlt3],
            correctAnswer: ddAltOG
        },
        {
            question: 'Which is the real pinia logo?',
            choices: [piniaAlt1, piniaAlt2, piniaAltOG, piniaAlt3],
            correctAnswer: piniaAltOG,
        },
        {
            question: 'Which is the real Vue logo?',
            choices: [vueAltOG, vueAlt1, vueAlt2, vueAlt3],
            correctAnswer: vueAltOG,
        },

        {
            question: 'Which is the real Java mascot logo?',
            choices: [javaAlt1, javaAlt2, javaAlt3, javaAltOG],
            correctAnswer: javaAltOG,
        },


        {
            question: 'Which is the real Lattice logo?',
            choices: [latticeAlt1, latticeAlt2, latticeAlt3, latticeOG],
            correctAnswer: latticeOG,
        },

        {
            question: 'Which is the real Vercel logo?',
            choices: [vercelAlt1, vercelAlt2, vercelAltOG, vercelAlt3],
            correctAnswer: vercelAltOG,
        },

        {
            question: 'Which is the real Python logo?',
            choices: [pyAlt1, pyAlt2, pyAltOG, pyAlt3],
            correctAnswer: pyAltOG,
        },

        {
            question: 'Which is the real GibPotato logo?',
            choices: [gibAlt1, gibAlt2, gibAlt3, gibAltOG],
            correctAnswer: gibAltOG,
        },

        {
            question: 'Which is the real GitHub logo?',
            choices: [githubAlt1, githubAlt2, githubAlt3, githubAltOG],
            correctAnswer: githubAltOG,
        },

        {
            question: 'Which is the real unofficial mascot of Rust? (Our friend Ferris)',
            choices: [rustAlt1, rustAlt2, rustAlt3, rustAltOG],
            correctAnswer: rustAltOG,
        },

        {
            question: 'Which is the real Sentry logo?',
            choices: [sentryAlt1, sentryAlt2, sentryAlt3, sentryAltOG],
            correctAnswer: sentryAltOG,
        },


    ],
}