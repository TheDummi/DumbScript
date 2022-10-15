const letters = {};

const number = (num) => {
    const one = `+!![]`, zero = `+[]`;

    if (num === 0) return zero;

    return Array.from({ length: num }, () => one).join(' + ');
}

const validate = (ltr, str) => {
    if (!letters[ltr]) return letters[ltr] = str;

    else return;
}

const fromString = (str) => str.split('').map(x => {
    if (!(x in letters)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`; `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`
    }

    return letters[x];
}).join('+')

const words = [
    { "(+{}+[])": (+{} + []) },
    { "({}+[])": ({} + []) },
    { "(![]+[])": (![] + []) },
    { "(!![]+[])": (!![] + []) },
    { "((+!![]/+![])+[])": ((+!![] / +![]) + []) },
];

words.map(entry => {
    Object.entries(entry).map(([code, word]) => word.split('').map((l, i) => validate(l, code + `[${number(i)}]`)))
})

letters.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
letters.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
letters.p = `([] + (/-/)[${fromString('constructor')}])[${number(14)}]`;
letters["\\"] = `([] + /\\\\/)[${number(1)}]`;
letters.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
letters.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
letters.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
letters.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${letters['\\']}))[${number(2)}]`;

const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;