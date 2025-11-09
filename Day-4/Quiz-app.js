document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const ChoicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");



    const questions = [
        {
            question: "What is the capital of France?",
            Choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },

        {
            question: "What is the capital of Germany?",
            Choices: ["Berlin", "Munich", "Hamburg", "Cologne"],
            answer: "Berlin",

        },

        {
            question: "What is the capital of Italy?",
            Choices: ["Rome", "Milan", "Turin", "Florence"],
            answer: "Rome",
        },

        {
            question: "What is the capital of Spain?",
            Choices: ["Madrid", "Barcelona", "Seville", "Valencia"],
            answer: "Madrid",
        },

        {
            question: "Which planet is known as the Red Planet?",
            Choices: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },

    ];
    
  let currentQuestionIndex = 0;
  let score = 0;
  
  
  startBtn.addEventListener('click', startQuiz)


  nextBtn.addEventListener('click',() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }else{
        showResult()
    }
  })

  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0
    score = 0
    resultContainer.classList.add('hidden')
    startQuiz()
  })


  function startQuiz() {
    startBtn.classList.add('hidden')
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()
  }

  function showQuestion() {
    nextBtn.classList.add('hidden');
    questionText.textContent = questions[currentQuestionIndex].question;
    ChoicesList.innerHTML = "" // clear precious choices
    questions[currentQuestionIndex].Choices.forEach(Choice => {
       const li = document.createElement('li')
       li.textContent = Choice 
       li.addEventListener('click', () => selectAnswer(Choice)) 
       ChoicesList.appendChild(li)
    });
  }

  function selectAnswer(Choice) {
    const correctAnswer = questions[currentQuestionIndex].answer
    if(Choice === correctAnswer){
        score++;
    }
    nextBtn.classList.remove('hidden');
  }

  function showResult() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    scoreDisplay.textContent = `${score} out of ${questions.length}`
  }

});