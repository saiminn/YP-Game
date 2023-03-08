const btn = document.querySelector('.btn');
let output = document.querySelector('.text-area');
const number = document.querySelector('.number');
const error = document.querySelector('error-message');
let count = 0;
let maxCount = 20;

let questions = [
  'How do you understand tourism?',
  'Describe three types of hotel?',
  'Do you love learning in YP? Why?',
  'What is your suggestion to teachers of YP?',
  'How do you feel today?',
  'How many subjects in YP and what are they for?',
  'What is Excellent customer service?',
  'What are service sequence? (You may tell as you remember)',
  'What is personal grooming and why is it important?',
  'How many name and people in YP? (Admin team/Trainer team)',
  'In your opinion, what is the best and the worst in YP?',
  'What are six sectors of tourism?',
  'How many types of room you can rent in a hotel? (As you know)',
  'In a restaurant, which one is more important? Service or taste? Why?',
  'After learning in YP, which country do you prefer? Why?',
  'Who is your idol for the improvement of you life? Tell about him/her',
  'If a guest complain that he is not satisfied about the room anniversary set up, how will you solve and handle complain?',
  'If you were a director of YP, how will you do YP more Famous or more qualified?',
  'What is you favorite title of lessons learning in YP Education?',
  'Introduce yourself in English within 1 minutes.',
];

btn.addEventListener('click', () => {
  let randomQuestions = questions[Math.floor(Math.random() * questions.length)];
  output.innerHTML = randomQuestions;
  if (count < maxCount) {
    count++;
    number.innerHTML = count;
  } else {
    output.innerHTML = 'Congratulations, Thanks for paticipation!'
    number.innerHTML = 'Game over'
  }
});
