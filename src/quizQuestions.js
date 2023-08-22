
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



export const quiz = {
    totalQuestions: 4,
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
    ],
}