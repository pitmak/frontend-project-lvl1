const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRiddle: () => {
    const random = Math.trunc(Math.random() * 100);
    const riddle = String(random);
    const answer = isPrime(random) ? 'yes' : 'no';

    return {
      riddle,
      answer,
    };
  },
};
