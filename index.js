const accordion = document.querySelector('.accordion');
const items 	= accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');

function toggleAccordion() {
	const thisItem = this.parentNode;
	thisItem.classList.toggle('open');
}

questions.forEach(question => question.addEventListener('click', toggleAccordion));

