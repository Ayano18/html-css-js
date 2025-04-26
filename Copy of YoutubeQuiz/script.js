const questions = [
    {
        question: "Birthday ni mama?",
        answers: [
            { text: "January 10", correct: true},
            { text: "Febuary 10", correct: false},
            { text: "March 10", correct: false},
            { text: "April 10", correct: false},
        ]
    },
    {
        question: "Birthday ni papa?",
        answers: [
            { text: "January 10", correct: false},
            { text: "February 10", correct: true},
            { text: "March 10", correct: false},
            { text: "April 10", correct: false},
        ]
    },
    {
        question: "Birthday ni poy?",
        answers: [
            { text: "January 20", correct: false},
            { text: "December 20", correct: false},
            { text: "May 20", correct: false},
            { text: "April 20", correct: true},
        ]
    },
    {
        question: "Birthday ni bulenget?",
        answers: [
            { text: "April 10", correct: false},
            { text: "May 10", correct: false},
            { text: "June 10", correct: true},
            { text: "December 10", correct: false},
        ]
    },
    {
        question: "Birthday ni ate me?",
        answers: [
            { text: "May 1", correct: true},
            { text: "December 1", correct: false},
            { text: "April 1", correct: false},
            { text: "October 1", correct: false},
        ]
    },
    {
        question: "Birthday ni nanay?",
        answers: [
            { text: "March 30", correct: false},
            { text: "September 30", correct: true},
            { text: "November 30", correct: false},
            { text: "December 30", correct: false},
        ]
    },
    {
        question: "Birthday ni tatay?",
        answers: [
            { text: "June 9", correct: false},
            { text: "April 9", correct: false},
            { text: "December 9", correct: false},
            { text: "January 9", correct: true},
        ]
    },
    {
        question: "Birthday ni tito bot?",
        answers: [
            { text: "February 12", correct: true},
            { text: "August 12", correct: false},
            { text: "October 12", correct: false},
            { text: "July 12", correct: false},
        ]
    },
    {
        question: "Fiesta sa cogon?",
        answers: [
            { text: "May 7", correct: false},
            { text: "May 8", correct: true},
            { text: "May 9", correct: false},
            { text: "May 10", correct: false},
        ]
    },
    {
        question: "Middle name ni papa?",
        answers: [
            { text: "Alvarez", correct: false},
            { text: "Aquino", correct: true},
            { text: "Lim", correct: false},
            { text: "Maatubang", correct: false},
        ]
    },
    {
        question: "Middle name ni mama?",
        answers: [
            { text: "Aquino", correct: false},
            { text: "Maatubang", correct: false},
            { text: "Lim", correct: true},
            { text: "Alvarez", correct: false},
        ]
    },
    {
        question: "How many daughters and son have nanay and tatay?",
        answers: [
            { text: "7", correct: false},
            { text: "8", correct: true},
            { text: "6", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        question: "How old is ace justine?",
        answers: [
            { text: "15", correct: true},
            { text: "16", correct: false},
            { text: "14", correct: false},
            { text: "100", correct: false},
        ]
    },
    {
        question: "Birthday ni lola?",
        answers: [
            { text: "March 27", correct: false},
            { text: "March 26", correct: false},
            { text: "March 25", correct: false},
            { text: "March 24", correct: true},
        ]
    },
    {
        question: "Square root of 121?",
        answers: [
            { text: "12", correct: false},
            { text: "11", correct: true},
            { text: "10", correct: false},
            { text: "9", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
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
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();