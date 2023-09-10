const questions=[
    {
        question: "Which one is the largest tropical rain forest in the world?",
        answers:[
             {text: "Amazon",correct: true},
             {text: "Bosawas",correct: false},
             {text: "Southeast Asian Rain Forest",correct: false},
             {text: "Daintree Rain Forest",correct: false},
        ]
    },

    {
        question: "In which ocean ‘Bermuda Triangle’ region is located?",
        answers:[
             {text: "Atlantic",correct: true},
             {text: "Indian",correct: false},
             {text: "Pacific",correct: false},
             {text: "Arctic",correct: false},
        ] 
    },

    {
        question: "In which country, white elephant is found?",
        answers:[
             {text: "India",correct: false},
             {text: "Sri Lanka",correct: false},
             {text: "Thailand",correct: true},
             {text: "Malaysia",correct: false},
        ]
    },

    {
        question: "Which one is the biggest island in the World?",
        answers:[
             {text: "Borneo",correct: false},
             {text: " Finland",correct: false},
             {text: "Sumatra",correct: false},
             {text: "Greenland",correct: true},
        ]
    },

    {
        question: "How many countries were participated as founding member of United Nation?",
        answers:[
        {text: "45", correct:false},
        {text: "51", correct:true},
        {text: "65", correct:false},
        {text: "75", correct:false},
        ]
    },

    {
        question: "Which is the longest river in the world?",
        answers:[
        {text: "Great Ganga", correct:false},
        {text: "Nile", correct:true},
        {text: "Amazon", correct:false},
        {text: "Niger", correct:false},
        ]
    }

]

const questionElement = document.getElementById("question");
const answerButtons =document.getElementById("ansbutton");
const nextButton = document.getElementById("nextbtn")

let currentQuestionIndex = 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex = 0;
     score= 0; 
    nextbtn.innerHTML="Next";
    showQuestion();
}
 
 function showQuestion(){
    resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

     currentQuestion.answers.forEach(answer =>{
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click",selectAnswer);
     }); 

 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
 }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
         startQuiz();
    }
 });
 startQuiz();