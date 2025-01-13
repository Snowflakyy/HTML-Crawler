import { Gradients } from "./types";

export const gradients : Gradients = {
    purpleToBlueText: ` linear-gradient(90deg, #F67BF9 0%, #B57BEF 50%, #9EC5FF 100%);
    background-clip: text;-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;font-feature-settings: 'cv12' on, 'cv13' on;`,
    pinkToYellow: `
     var(--Linear-1, linear-gradient(90deg, #DC318F 18.5%, #F8EE02 100%));
    `,
    pinkToYellowText:`
    var(--Linear-1, linear-gradient(90deg, #DC318F 18.5%, #F8EE02 100%));
     background-clip: text;-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;font-feature-settings: 'cv12' on, 'cv13' on;
    `,
    pinkToYellowHover: `
var(--Linear-1, linear-gradient(90deg, #DC318F80 18.5%, #F8EE0080 100%));
    `,
}