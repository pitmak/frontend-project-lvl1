import readlineSync from 'readline-sync';
import even from './even.js';
import calc from './calc.js';

const games = {
  even,
  calc,
};

export default (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  console.log(games[game].description);

  let attempts = 3;

  while (attempts > 0) {
    const { riddle, answer } = games[game].getRiddle();
    console.log(`Question: ${riddle}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
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
