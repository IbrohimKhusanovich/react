const headAnswerNum = document.querySelector(".head-answer-num");
const TIMER = document.getElementById("head-timer");
const answersTag = document.querySelector(".answers");
const number1 = document.getElementById("question-num1");
const option2 = document.getElementById("question-num2");
const number3 = document.getElementById("question-num3");
const results = document.querySelector(".results");
const correctAnswer = document.getElementById("correct-answer");
const wrongAnswer = document.getElementById("wrong-answer");
const TotalPoints = document.getElementById("total-points");
const ONE_POINT_BALL = 6.6;

const TESTS_LENGHT = 15;
let timeInterval = null;

const randomNumber = (limit=100) => {
  return Math.floor(Math.random() * limit);
};
const renderOrderNumber = () => {
  const { orderNumber } = currentTest;
  headAnswerNum.innerText = orderNumber;
};
const renderQuestion = () => {
  const { number_1, number_2, operation } = currentTest;
  number1.innerText = number_1;
  number3.innerText = number_2;
  option2.innerText = operation;
};

const renderAnswers = () => {
  let answers = answerCreator();
  let result = "";
  answers = answerCovaiterHtml(answers);
  for (let i = 0; i < 4; i++) {
    result += `<div  class='salom'>${answers[i]}</div>`;
    answersTag.innerHTML = result;
  }
};

const renderPoints = () => {
  let result = "";
  tests.forEach((test) => {
    result += `<i class="icon ${
      test.correctStatus === 1
        ? "fas fa-check-circle"
        : test.correctStatus === 0
        ? "far fa-times-circle"
        : "far fa-clock"
    }"></i>`;
  });
  results.innerHTML=result
};
//LOGICAL FUNCTION
const startQuizApp = () => {
  renderOrderNumber();
  renderQuestion();
  renderAnswers();
  timerCreator();
};
const randomOperation = () => {
  const operations = ["-", "+", "*"];
  const randomIndex = randomNumber(operations.length);
  return operations[randomIndex];
};
const timerCreator = () => {
  timeInterval = setInterval(timerListining, 1000);
};
const timerListining = () => {
  const currentSekund = parseInt(TIMER.innerText.replace(/s/gi, ""));
  if (currentSekund === 0) closeQuestionAndNextQuestionAndUpdateTimer();
  else TIMER.innerText = currentSekund - 1 + "s";
};
const removeTimer = () => {
  clearInterval(timeInterval);
  TIMER.innerText = "10s";
};
const nextQuestions = () => {
  const TESTS_LENGHT_STATUS = tests.length == TESTS_LENGHT;
  if (TESTS_LENGHT_STATUS){ 
    document.getElementById('quiz-display').style.display='none';
    document.getElementById('finish').style.display='flex'
    return  openTotalPoints();
  }
  renderPoints();
  testCreator();
};
const openTotalPoints = () => {
  const {
    amountIncorrectAndTimedAnswers,
    amountCorrectAnswers,
    totalPoints,
  } = toCalculateTotalPoints();
  
  wrongAnswer.innerText = amountIncorrectAndTimedAnswers;
  correctAnswer.innerText = amountCorrectAnswers;
  TotalPoints.innerText = parseInt(totalPoints);
  // changeWrapperElemtens(WRAPPER_QUIZ, WRAPPER_TOTAL_POINTS);
};
const toCalculateTotalPoints = () => {
  let amountCorrectAnswers = 0;
  let amountIncorrectAndTimedAnswers = 0;
  let totalPoints = ONE_POINT_BALL;

  tests.forEach(({ correctStatus }) =>
    correctStatus === 1
      ? amountCorrectAnswers++
      : amountIncorrectAndTimedAnswers++
  );

  totalPoints *= amountCorrectAnswers;
  return { amountCorrectAnswers, amountIncorrectAndTimedAnswers, totalPoints };
};
const closeQuestionAndNextQuestionAndUpdateTimer = () => {
  removeTimer();
  setStatus();
  nextQuestions();
};
const answerCreator = () => {
  const { getCorrectAnswer } = currentTest;
  const Answers = [getCorrectAnswer];
  for (let i = 0; i < 3; i++) {
    Answers.push(randomNumber(getCorrectAnswer+20));
  }
  return Answers.sort(() => Math.random() - 0.5);
};

const answerCovaiterHtml = (answers) => {
  const variants = ["A:", "B:", "C:", "D:"];
  return answers.map(
    (a, i) => `
    <div class='click' onclick='checkAnswer(${a})'>
    <div class="answer-text  answer-true" onclick='checkAnswer(${a})'>
    <div class="answer-btn">${variants[i]}</div></div>
    <span class="answer_result">${a}</span>
  </div>
  </div>
    `
  );
};

const toCalculate = (num1, num2, operat) => eval(num1 + operat + num2);
let tests = [];
let currentTest = null;
const testCreator = () => {
  const number_1 = randomNumber();
  const number_2 = randomNumber();
  const operation = randomOperation();
  const test = {
    orderNumber: tests.length + 1,
    number_1,
    number_2,
    operation,
    correctStatus: 0,
    getCorrectAnswer: toCalculate(number_1, number_2, operation),
  };
  console.log(test);
  currentTest = test;
  tests.push(test);
  startQuizApp();
};
const checkAnswer = (answer) => {
  const answerStatus = getAnswerStatus(answer);
  setStatus(answerStatus);
  removeTimer();
  nextQuestions();
};
const setStatus = (satus) => {
  const test = getTestOfGarray();
  test.correctStatus = satus;
};
const getAnswerStatus = (choosedAnswer) => {
  const { getCorrectAnswer } = currentTest;
  return getCorrectAnswer === choosedAnswer ? 1 : 0;
};
const changeWrapperElemtens = (hiddenElement, shownElement) => {
  hiddenElement.classList.add("d-none");
  shownElement.classList.remove("d-none");
};
const openQuizApp = () => {
  changeWrapperElemtens(WRAPPER_BTN, WRAPPER_QUIZ);
  testCreator();
};
const getTestOfGarray = () => {
  const { orderNumber } = currentTest;
  const index = tests.findIndex((test) => test.orderNumber === orderNumber);
  return tests[index];
};
var video = document.querySelector('.video-back')

// When the 'ended' event fires
video.addEventListener('ended', function(){
  // Reset the video to 0
  video.currentTime = 0;
  // And play again
  video.play();
});
testCreator();
