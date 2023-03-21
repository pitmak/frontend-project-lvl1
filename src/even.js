export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRiddle: () => {
    const random = Math.trunc(Math.random() * 100);
    const answer = (random % 2 === 0) ? 'yes' : 'no';
    return {
      riddle: String(random),
      answer,
    };
  },
};
