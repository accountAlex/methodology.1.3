import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

const lcmOfThree = (a, b, c) => lcm(lcm(a, b), c);

const playBrainLCM = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the smallest common multiple of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const num3 = getRandomNumber(1, 20);

    console.log(`Question: ${num1} ${num2} ${num3}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = lcmOfThree(num1, num2, num3);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playBrainLCM;
