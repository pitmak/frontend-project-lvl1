const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  getRiddle: () => {
    const random1 = Math.trunc(Math.random() * 50);
    const random2 = Math.trunc(Math.random() * 50);
    const answer = String(gcd(random1, random2));

    return {
      riddle: `${random1} ${random2}`,
      answer,
    };
  },
};
