const quizData = [
/* Sample questions: You can duplicate and extend to 100 */
{q:"The fusion of male and female gametes is called?",o:["Pollination","Fertilization","Germination","Implantation"],a:1},
{q:"Which organ produces sperm cells?",o:["Testis","Ovary","Uterus","Penis"],a:0},
{q:"Asexual reproduction involves",o:["Two parents","Fusion of gametes","One parent","Pollination"],a:2},
{q:"Which hormone controls ovulation?",o:["Testosterone","Estrogen","Progesterone","FSH"],a:3},
{q:"Pollination is the transfer of pollen from",o:["Anther to stigma","Stigma to anther","Ovule to ovary","Ovary to ovule"],a:0},

{q:"The brain and spinal cord make up the",o:["Peripheral nervous system","Central nervous system","Autonomic system","Endocrine system"],a:1},
{q:"Which hormone controls growth?",o:["Insulin","Thyroxine","Growth hormone","Adrenaline"],a:2},
{q:"The basic unit of the nervous system is",o:["Neuron","Axon","Dendrite","Synapse"],a:0},
{q:"Which gland produces insulin?",o:["Thyroid","Pancreas","Pituitary","Adrenal"],a:1},
{q:"Reflex actions are controlled by the",o:["Brain","Spinal cord","Cerebellum","Medulla"],a:1},

{q:"Respiration is the process of",o:["Breathing","Energy release","Gas exchange","Photosynthesis"],a:1},
{q:"Which gas is required for aerobic respiration?",o:["CO₂","Oxygen","Nitrogen","Hydrogen"],a:1},
{q:"The main respiratory surface in humans is the",o:["Bronchi","Trachea","Alveoli","Diaphragm"],a:2},
{q:"Anaerobic respiration in plants produces",o:["Lactic acid","Alcohol and CO₂","Water","Oxygen"],a:1},
{q:"Breathing in is called",o:["Expiration","Inhalation","Respiration","Diffusion"],a:1},

{q:"The transport tissue for water in plants is",o:["Phloem","Cambium","Xylem","Cortex"],a:2},
{q:"Which blood cell carries oxygen?",o:["White blood cell","Platelet","Red blood cell","Plasma"],a:2},
{q:"Transpiration occurs mainly through the",o:["Roots","Lenticels","Stomata","Stem"],a:2},
{q:"The liquid part of blood is called",o:["Serum","Plasma","Lymph","Water"],a:1},
{q:"Phloem transports",o:["Water","Mineral salts","Food","Oxygen"],a:2},

{q:"Excretion is the removal of",o:["Undigested food","Waste products","Water only","Oxygen"],a:1},
{q:"The main excretory organ in humans is the",o:["Liver","Lung","Kidney","Skin"],a:2},
{q:"The functional unit of the kidney is the",o:["Neuron","Nephron","Alveolus","Villus"],a:1},
{q:"Which organ removes carbon dioxide?",o:["Kidney","Skin","Lungs","Liver"],a:2},
{q:"Sweat is produced by the",o:["Sebaceous gland","Sweat gland","Kidney","Liver"],a:1}
];

// Duplicate randomly until 100 questions
while(quizData.length < 100){
    quizData.push(quizData[Math.floor(Math.random()*quizData.length)]);
}

let index = 0;
let score = 0;

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
    const selected = document.querySelector('input[name="option"]:checked');
    if(!selected){ alert("Choose an option"); return; }

    if(parseInt(selected.value) === quizData[index].a){
        score++;
    }

    index++;
    if(index < 100){
        loadQuestion();
    }else{
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("score").innerHTML =
        "QUIZ COMPLETED 🎉<br>Your Score: " + score + " / 100";
        document.getElementById("nextBtn").style.display = "none";
    }
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

loadQuestion();