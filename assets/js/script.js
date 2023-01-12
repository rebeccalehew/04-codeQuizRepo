// getting all my information
var startBtn = document.querySelector('.startBtn button');
var infoBox = document.querySelector('.infoBox');
var continueBtn = infoBox.querySelector('.buttons');

// questions for coding quiz
var myQuestions = [
    {
        question: "Where does the JavaScript tag go in the HTML file?",
        answers: {
            a: 'head',
			b: 'body',
			c: 'both'
        },
        correctAnswer: 'b'
    },
    {
        question: "A ___ is a container for storing data or data values.",
        answers: {
            a: 'function',
			b: 'operator',
			c: 'variable'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which symbol is used to invoke a function?",
        answers: {
            a: '()',
			b: '{}',
			c: '[]'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is one way to loop through an array?",
        answers: {
            a: 'const loop',
			b: 'let loop',
			c: 'for loop'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which operator is defined as equal to?",
        answers: {
            a: '===',
			b: '==',
			c: '>='
        },
        correctAnswer: 'b'
    }
];

// functions to generate the quiz for the user to complete
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	startBtn.onclick = ()=>{
		// infoBox.classList.remove('hidden');
		document.getElementById('quiz').classList.remove('hidden');
	}

	// continueBtn.onclick = ()=>{
	// 	document.getElementById('quiz').classList.remove('hidden');
	// }
	
	function showQuestions(questions, quizContainer){
		// place to store the output and the answer choices
	    var output = [];
	    var answers;

	    // for each question...
	    for(var i=0; i<questions.length; i++){
		
		    // first reset the list of answers
		    answers = [];

		    // for each available answer to this question...
		    for(letter in questions[i].answers){

			    // ...add an html radio button
			    answers.push(
				    '<label>'
					    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
					    + letter 
						+ ': '
					    + questions[i].answers[letter]
				    	+ '</label>'
			    );
		    }
        
		    // add this question and its answers to the output
		    output.push(
			    '<div class="question">' + questions[i].question + '</div>'
			    + '<div class="answers">' + answers.join(' ') + '</div>'
		    );
	    }

	    // combine output list into one string of html and put it on the page
	    quizContainer.innerHTML = output.join('');
    }


	function showResults(questions, quizContainer, resultsContainer){
		// gather answer containers from our quiz
	    var answerContainers = quizContainer.querySelectorAll('.answers');
	
	    // keep track of user's answers
	    var userAnswer = '';
	    var numCorrect = 0;
	
	    // for each question...
	    for(var i=0; i<questions.length; i++){

		    // find selected answer
		    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		    // if answer is correct
		    if(userAnswer===questions[i].correctAnswer){
			    // add to the number of correct answers
			    numCorrect++;
			
			    // color the answers green
			    answerContainers[i].style.color = 'green';
		    }
		    // if answer is wrong or blank
		    else{
			    // color the answers red
			    answerContainers[i].style.color = 'red';
		    }
	    }

	    // show number of correct answers out of total
	    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions to the user
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);