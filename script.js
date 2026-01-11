const quizData = [
/* Example hard questions: Extend to 100 for full quiz */
{q:"Which structure in plants ensures unidirectional water flow from roots to leaves?",o:["Phloem","Xylem","Cambium","Lenticels"],a:1},
{q:"In human females, the release of egg occurs from?",o:["Fallopian tube","Ovary","Uterus","Cervix"],a:1},
{q:"Which hormone controls fight-or-flight response?",o:["Insulin","Adrenaline","Estrogen","Thyroxine"],a:1},
{q:"The site of gas exchange in leaves is primarily?",o:["Stomata","Mesophyll","Xylem","Phloem"],a:0},
{q:"Which kidney structure filters blood?",o:["Nephron","Renal artery","Glomerulus","Loop of Henle"],a:0},
{q:"Synaptic transmission occurs via?",o:["Hormones","Neurotransmitters","Enzymes","Ions"],a:1},
{q:"Which blood component initiates clotting?",o:["Plasma","RBC","Platelet","WBC"],a:2},
{q:"Anaerobic respiration in humans produces?",o:["Lactic acid","Alcohol","CO2","Water"],a:0},
{q:"Hormone that regulates circadian rhythm?",o:["Melatonin","Insulin","Thyroxine","FSH"],a:0},
{q:"Which structure carries sugar in plants?",o:["Xylem","Phloem","Cambium","Stomata"],a:1},
{q:"Which organ excretes urea?",o:["Kidney","Lung","Liver","Skin"],a:0},
{q:"Impulse is fastest in which fibre?",o:["Myelinated","Unmyelinated","Dendrite","Axon terminal"],a:0},
{q:"Which vitamin is essential for blood clotting?",o:["Vitamin A","Vitamin D","Vitamin K","Vitamin C"],a:2},
{q:"Main excretory product in plants?",o:["Oxygen","CO2","Water","Urea"],a:2},
{q:"Which gland produces thyroxine?",o:["Adrenal","Thyroid","Pancreas","Pituitary"],a:1},
{q:"Reflex action is primarily controlled by?",o:["Brain","Spinal cord","Cerebellum","Medulla"],a:1},
{q:"Which process transports amino acids in humans?",o:["Xylem","Phloem","Blood plasma","Lymph"],a:2},
{q:"Which type of reproduction produces genetically identical offspring?",o:["Sexual","Asexual","Parthenogenesis","Fertilization"],a:1},
{q:"The hormone regulating blood sugar is?",o:["Insulin","Adrenaline","FSH","Estrogen"],a:0},
{q:"Which part of nephron reabsorbs most water?",o:["Loop of Henle","Bowman's capsule","Collecting duct","Distal tubule"],a:2}
];

// Duplicate until 100 hard questions if you wish
while(quizData.length < 100){
    let i = Math.floor(Math.random() * quizData.length);
    quizData.push({...quizData[i]});
}

let index = 0;
let score = 0;
let userAnswers = [];

function loadQuestion(){
    const q = quizData[index];
    document.getElementById("quiz").innerHTML = `
        <div class="question">
        Question ${index+1}/100<br><br>${q.q}
        </div>
        <div class="options">
        ${q.o.map((opt,i)=>`
        <label>
        <input type="radio" name="option" value="${i}">
        ${opt}
        </label>`).join("")}
        </div>
    `;
}

function nextQuestion(){
    saveAnswer();
    index++;
    if(index<quizData.length){
        loadQuestion();
    } else finishQuiz();
}

function saveAnswer(){
    const selected = document.querySelector('input[name="option"]:checked');
    userAnswers[index] = selected ? parseInt(selected.value) : null;
}

function submitQuiz(){
    saveAnswer();
    finishQuiz();
}

function finishQuiz(){
    score = 0;
    quizData.forEach((q,i)=>{
        if(userAnswers[i] === q.a) score++;
    });
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("score").innerHTML = `QUIZ COMPLETED 🎉<br>Your Score: ${score} / 100`;

    updateLeaderboard(score);
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";
}

let leaderboardScores = [];

function updateLeaderboard(s){
    leaderboardScores.push(s);
    leaderboardScores.sort((a,b)=>b-a); // Descending
    const lb = document.getElementById("leaderboard");
    lb.innerHTML = "";
    leaderboardScores.forEach((val, i)=>{
        lb.innerHTML += `<li>Rank ${i+1}: ${val} / 100</li>`;
    });
}

// Event listeners
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("submitBtn").addEventListener("click", submitQuiz);

// Load first question
loadQuestion();