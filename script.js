// Shuffle questions and pick 70
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let quizData = shuffle(
    [
  // ATOMIC STRUCTURE & BONDING (1–15)
  {
    question: "How many protons are in an atom with atomic number 17?",
    options: ["15", "16", "17", "18"],
    answer: 2
  },
  {
    question: "An atom has mass number 23 and atomic number 11. How many neutrons does it have?",
    options: ["11", "12", "23", "34"],
    answer: 1
  },
  {
    question: "How many electrons are in a neutral atom of calcium (atomic number 20)?",
    options: ["18", "19", "20", "21"],
    answer: 2
  },
  {
    question: "What is the valency of oxygen?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "How many atoms are in H2O?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "Which type of bond exists in NaCl?",
    options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    answer: 1
  },
  {
    question: "Which element has a full outer shell?",
    options: ["Neon", "Oxygen", "Sodium", "Chlorine"],
    answer: 0
  },
  {
    question: "How many electrons are shared in a double bond?",
    options: ["2", "4", "6", "8"],
    answer: 1
  },
  {
    question: "What is the molecular formula of methane?",
    options: ["CH4", "C2H6", "CH3OH", "C2H4"],
    answer: 0
  },
  {
    question: "Which element is diatomic in nature?",
    options: ["Helium", "Hydrogen", "Neon", "Sodium"],
    answer: 1
  },
  {
    question: "Which of these is a covalent compound?",
    options: ["H2O", "NaCl", "MgO", "KBr"],
    answer: 0
  },
  {
    question: "How many valence electrons does nitrogen have?",
    options: ["3", "4", "5", "6"],
    answer: 2
  },
  {
    question: "The bond angle in water (H2O) is approximately?",
    options: ["104.5°", "109.5°", "120°", "180°"],
    answer: 0
  },
  {
    question: "Which element forms an ionic bond with chlorine?",
    options: ["Oxygen", "Sodium", "Hydrogen", "Carbon"],
    answer: 1
  },
  {
    question: "The electronic configuration of oxygen is?",
    options: ["1s2 2s2 2p4", "1s2 2s2 2p6", "1s2 2s1 2p3", "1s2 2s2 2p2"],
    answer: 0
  },

  // NUCLEAR CHEMISTRY (16–25)
  {
    question: "If a radioactive sample has a half-life of 5 years, how much remains after 10 years?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    answer: 1
  },
  {
    question: "A substance has a half-life of 2 days. What fraction remains after 6 days?",
    options: ["1/2", "1/4", "1/8", "1/16"],
    answer: 2
  },
  {
    question: "If 80g of a radioactive substance decays to 10g, how many half-lives have passed?",
    options: ["2", "3", "4", "5"],
    answer: 2
  },
  {
    question: "Which radiation has the highest penetrating power?",
    options: ["Alpha", "Beta", "Gamma", "Neutron"],
    answer: 2
  },
  {
    question: "How many protons are in an alpha particle?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "The nucleus of an atom contains?",
    options: ["Protons and neutrons", "Electrons", "Protons only", "Neutrons only"],
    answer: 0
  },
  {
    question: "Which isotope is radioactive?",
    options: ["C-12", "C-13", "C-14", "O-16"],
    answer: 2
  },
  {
    question: "Half-life is defined as?",
    options: ["Time to decay completely", "Time for half nuclei to decay", "Time for one electron to move", "Time for molecule to break"],
    answer: 1
  },
  {
    question: "Beta decay increases the atomic number by?",
    options: ["0", "1", "2", "-1"],
    answer: 1
  },
  {
    question: "Alpha decay reduces the mass number by?",
    options: ["2", "4", "1", "0"],
    answer: 1
  },

  // KINETIC THEORY & GAS LAWS (26–40)
  {
    question: "A gas occupies 2 L at constant temperature. What volume will it occupy if the pressure is halved?",
    options: ["1 L", "2 L", "3 L", "4 L"],
    answer: 3
  },
  {
    question: "If the temperature of a gas is doubled (in Kelvin), its volume will?",
    options: ["Halve", "Remain same", "Double", "Quadruple"],
    answer: 2
  },
  {
    question: "A gas has a volume of 5 L at 300K. What is the volume at 600K (pressure constant)?",
    options: ["2.5 L", "5 L", "10 L", "15 L"],
    answer: 2
  },
  {
    question: "If pressure increases, gas volume will?",
    options: ["Increase", "Decrease", "Stay same", "Disappear"],
    answer: 1
  },
  {
    question: "Which law states P ∝ 1/V?",
    options: ["Charles' Law", "Boyle's Law", "Avogadro's Law", "Graham's Law"],
    answer: 1
  },
  {
    question: "A gas of 3 moles at 2 atm occupies 10 L. What is the pressure if volume is 5 L?",
    options: ["2 atm", "4 atm", "6 atm", "8 atm"],
    answer: 1
  },
  {
    question: "A gas has P=1 atm, V=3 L, T=300K. What is V at T=600K?",
    options: ["1.5 L", "3 L", "6 L", "9 L"],
    answer: 2
  },
  {
    question: "Which temperature scale is absolute?",
    options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
    answer: 2
  },
  {
    question: "Which gas law relates V and T at constant P?",
    options: ["Boyle", "Charles", "Avogadro", "Graham"],
    answer: 1
  },
  {
    question: "What is the pressure of a gas if P1V1 = P2V2, V2 = 2V1, P1=2 atm?",
    options: ["1 atm", "2 atm", "4 atm", "0.5 atm"],
    answer: 0
  },
  {
    question: "Which of these gases will effuse fastest according to Graham's law?",
    options: ["O2", "H2", "N2", "CO2"],
    answer: 1
  },
  {
    question: "A gas at 300K is heated to 600K. Its pressure at constant volume will?",
    options: ["Double", "Halve", "Same", "Quadruple"],
    answer: 0
  },
  {
    question: "Molecules of gas have most kinetic energy at?",
    options: ["0K", "100K", "Room temp", "High temp"],
    answer: 3
  },
  {
    question: "Root mean square velocity depends on?",
    options: ["Pressure", "Temperature", "Volume", "Moles"],
    answer: 1
  },
  {
    question: "A balloon has 1 L of gas at 1 atm. If compressed to 0.5 L, pressure will be?",
    options: ["0.5 atm", "1 atm", "2 atm", "4 atm"],
    answer: 2
  },

  // MOLES & CHEMICAL COMBINATION (41–60)
  {
    question: "What is the molar mass of H2O?",
    options: ["16 g", "17 g", "18 g", "20 g"],
    answer: 2
  },
  {
    question: "How many moles are in 36 g of water?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    question: "How many moles are in 44 g of CO2?",
    options: ["1", "2", "3", "4"],
    answer: 0
  },
  {
    question: "How many grams are in 2 moles of NaCl?",
    options: ["58.5", "117", "120", "100"],
    answer: 1
  },
  {
    question: "Percentage of oxygen in H2O?",
    options: ["44%", "56%", "66%", "88%"],
    answer: 0
  },
  {
    question: "The formula of calcium chloride is?",
    options: ["CaCl", "CaCl2", "Ca2Cl", "Ca2Cl2"],
    answer: 1
  },
  {
    question: "Which element has valency 1?",
    options: ["Oxygen", "Nitrogen", "Sodium", "Calcium"],
    answer: 2
  },
  {
    question: "How many atoms are in CO2?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "Which is a chemical change?",
    options: ["Melting", "Boiling", "Rusting", "Freezing"],
    answer: 2
  },
  {
    question: "Which has a fixed composition?",
    options: ["Mixture", "Compound", "Solution", "Gas"],
    answer: 1
  },
  {
    question: "1 mole of CH4 contains how many molecules?",
    options: ["6.02×10^23", "1×10^23", "3.01×10^23", "12×10^23"],
    answer: 0
  },
  {
    question: "Mass of 2 moles of H2SO4? (H=1, S=32, O=16)",
    options: ["98 g", "196 g", "100 g", "50 g"],
    answer: 1
  },

  // SEPARATION OF MIXTURES (61–70)
  {
    question: "Which method separates salt from water?",
    options: ["Filtration", "Evaporation", "Magnet", "Decantation"],
    answer: 1
  },
  {
    question: "Which method separates oil and water?",
    options: ["Filtration", "Evaporation", "Separating funnel", "Magnet"],
    answer: 2
  },
  {
    question: "Which method separates iron filings from sand?",
    options: ["Filtration", "Magnet", "Distillation", "Evaporation"],
    answer: 1
  },
  {
    question: "Which method separates two liquids with different boiling points?",
    options: ["Filtration", "Decantation", "Distillation", "Magnet"],
    answer: 2
  },
  {
    question: "A mixture has what type of composition?",
    options: ["Fixed", "Variable", "None", "Chemical"],
    answer: 1
  },
  {
    question: "Chromatography separates substances based on?",
    options: ["Solubility", "Density", "Color", "Magnetism"],
    answer: 0
  },
  {
    question: "Filtration is used to separate?",
    options: ["Soluble solids", "Insoluble solids", "Liquids", "Gases"],
    answer: 1
  },
  {
    question: "Decantation separates?",
    options: ["Two liquids", "Liquid from solid", "Two solids", "Gas from liquid"],
    answer: 1
  },
  {
    question: "Distillation is used to separate?",
    options: ["Solids from liquids", "Liquids with different boiling points", "Gases", "Mixtures of solids"],
    answer: 1
  },
  {
    question: "Evaporation separates?",
    options: ["Solids from liquids", "Liquids from solids", "Gases from solids", "Liquids from liquids"],
    answer: 0
  }
]

).slice(0, 62);

let index = 0;
let score = 0;
let userAnswers = [];
let leaderboardScores = [];
let timeLeft = 40 * 60; // 15 minutes
let timerInterval;

// Start Timer
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").innerHTML =
      `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    timeLeft--;
  }, 1000);
}

// Load Question
function loadQuestion() {
  const q = quizData[index];

  document.getElementById("quiz").innerHTML = `
    <div class="question">
      Question ${index + 1} / 62 <br><br>
      ${q.question}
    </div>

    <div class="options">
      ${q.options.map((opt, i) => `
        <label class="option">
          <input type="radio" name="option" value="${i}">
          ${opt}
        </label>
      `).join("")}
    </div>
  `;

  // Restore previous answer
  if (userAnswers[index] !== undefined) {
    const radios = document.querySelectorAll('input[name="option"]');
    radios[userAnswers[index]].checked = true;
  }
}

// Save Answer
function saveAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  userAnswers[index] = selected ? parseInt(selected.value) : null;
}

// Next Question
function nextQuestion() {
  saveAnswer();
  index++;

  if (index < quizData.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

// Submit Quiz
function submitQuiz() {
  saveAnswer();
  finishQuiz();
}

// Finish Quiz
function finishQuiz() {
  clearInterval(timerInterval);

  score = 0;

  quizData.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  const total = 62;
  const percentage = Math.round((score / total) * 100);

  let grade = "F";
  if (percentage >= 62) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 50) grade = "C";
  else if (percentage >= 45) grade = "D";
  else if (percentage >= 40) grade = "E";

  let status = percentage >= 50 ? "PASS ✅" : "FAIL ❌";

  document.getElementById("quiz").innerHTML = "";
  document.getElementById("score").innerHTML = `
    QUIZ COMPLETED 🎉<br><br>
    Raw Score: ${score} / ${total}<br>
    Aggregate: ${percentage}%<br>
    Grade: ${grade}<br>
    Status: ${status}
  `;

  updateLeaderboard(percentage);
  showReview();

  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
}

// Leaderboard
function updateLeaderboard(score) {
  leaderboardScores.push(score);
  leaderboardScores.sort((a, b) => b - a);

  const lb = document.getElementById("leaderboard");
  lb.innerHTML = "";

  leaderboardScores.forEach((val, i) => {
    lb.innerHTML += `<li>Rank ${i + 1}: ${val}%</li>`;
  });
}

// Answer Review
function showReview() {
  let reviewHTML = "<h3>Answer Review</h3>";

  quizData.forEach((q, i) => {
    reviewHTML += `
      <div class="review-question">
        <strong>Q${i + 1}:</strong> ${q.question}<br>
        Your Answer: ${q.options[userAnswers[i]] || "No Answer"}<br>
        Correct Answer: ${q.options[q.answer]}
        <hr>
      </div>
    `;
  });

  document.getElementById("review").innerHTML = reviewHTML;
}

// Button Events
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("submitBtn").addEventListener("click", submitQuiz);

// Start Quiz
startTimer();
loadQuestion();
