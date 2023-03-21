export default {
  description: 'What number is missing in the progression?',
  getRiddle: () => {
    const rand1 = Math.trunc(Math.random() * 20);
    const rand2 = Math.trunc(Math.random() * 10) + 1;
    const rand3 = Math.trunc(Math.random() * 10);

    const array = [rand1];
    for (let i = 1; i < 10; i += 1) {
      array[i] = array[i - 1] + rand2;
    }

    const answer = String(array[rand3]);
    array[rand3] = '..';
    const riddle = array.join(' ');

    return {
      riddle,
      answer,
    };
  },
};
