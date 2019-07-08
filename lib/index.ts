class Lottery {
    // testWord: string = 'hello'
    constructor(
        public testword: string
    ) {

    }

    test() {
        console.log(this.testword);
    }
}

export function run(word: string) {
    let red = new Lottery(word)
    red.test();
}