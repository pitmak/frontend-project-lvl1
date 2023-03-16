import readlineSync from 'readline-sync';

export default () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let attempts = 3;

    while (attempts > 0) {
        const random = Math.trunc(Math.random() * 100);
        console.log(`Question: ${random}`);
        const answer = readlineSync.question('Your answer: ');
        const rightAnswer = (random % 2 === 0) ? 'yes' : 'no';
        if (answer !== rightAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        console.log('Correct!');
        attempts -= 1;
    }
    if (attempts === 0) {
        console.log(`Congratulations, ${name}!`);
    }
};
