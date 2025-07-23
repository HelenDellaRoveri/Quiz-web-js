const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    answer: "Brasília"
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Carlos Drummond"],
    answer: "Machado de Assis"
  },
  {
    question: "Quanto é 7 x 8?",
    options: ["54", "56", "64", "48"],
    answer: "56"
  },
  {
    question: "Qual planeta é conhecido como planeta vermelho?",
    options: ["Terra", "Marte", "Vênus", "Júpiter"],
    answer: "Marte"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("result-screen").classList.add("hide");
  document.getElementById("question-screen").classList.remove("hide");
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => checkAnswer(button, option, q.answer);
    optionsDiv.appendChild(button);
  });

  document.getElementById("next-btn").classList.add("hide");
}

function checkAnswer(button, selected, correct) {
  const buttons = document.querySelectorAll("#options button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons.forEach(btn => {
      if (btn.innerText === correct) btn.classList.add("correct");
    });
  }

  document.getElementById("next-btn").classList.remove("hide");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-screen").classList.add("hide");
  document.getElementById("result-screen").classList.remove("hide");
  document.getElementById("score-text").innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}
