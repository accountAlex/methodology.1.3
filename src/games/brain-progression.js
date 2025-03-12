import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';

const playBrainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandomNumber(5, 10);
    const start = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    const hiddenIndex = getRandomNumber(0, progressionLength - 1);

    const progression = [];
    for (let j = 0; j < progressionLength; j += 1) {
      progression.push(start + step * j);
    }

    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

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

export default playBrainProgression;
