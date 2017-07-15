const accordion = document.querySelector('.accordion');
const items 	= accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');

function toggleAccordion() {
	console.log(this);
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));

