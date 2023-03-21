export default {
  description: 'What is the result of the expression?',
  getRiddle: () => {
    const rand1 = Math.trunc(Math.random() * 30);
    const rand2 = Math.trunc(Math.random() * 30);
    const rand3 = Math.trunc(Math.random() * 3);

    switch (rand3) {
      case 0:
        return {
          riddle: `${rand1} + ${rand2}`,
          answer: String(rand1 + rand2),
        };
      case 1:
        return {
          riddle: `${rand1} - ${rand2}`,
          answer: String(rand1 - rand2),
        };
      default:
        return {
          riddle: `${rand1} * ${rand2}`,
          answer: String(rand1 * rand2),
        };
    }
  },
};
