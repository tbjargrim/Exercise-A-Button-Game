const quiz = document.querySelector('#quiz');
const results = document.querySelector('#results');
const submitBtn = document.querySelector('#submit');

const myQuestions =[
    { 
        question:"How many Earths could fit inside the sun?",
        answers:{
            a: '3',
            b: '1,300',
            c: '1.3 millions'
        },
        correctAnswer:'c'
    },
    {
        question: "Which country consumes the most chocolate per capita?",
        answers: {
            a: 'Sweden',
            b: 'Switzerland',
            c: 'Australia'
        },
        correctAnswer: 'Switzerland'
    },
    {
        question: "In which country was the largest-known Tyrannosaurus rex skeleton found?",
        answers: {
            a: 'Canada',
            b: 'Brazil',
            c: 'South Africa'
        },
        correctAnswer: 'Canada'
    }
]
function buildQuiz() {
    const output=[];

    myQuestions.forEach(
        (currentQuestion,questionNumber) => {
            const answers= [];

            for(letter in currentQuestions.answers){
                answers.push(
                    `
                    <label>
                    <input typ="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>
                    `
                );
            }
            output.push(
                `
                <div class="question"> ${currentQuestion.question} </div>
               
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    )
 }
// join, joins everything together and puts it into a string
 quiz.innerHTML = output.join('');


function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);