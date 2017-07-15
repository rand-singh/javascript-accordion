const ACCORDION = document.querySelector('.accordion');
const ITEMS 	= ACCORDION.querySelectorAll('li');
const QUESTIONS = ACCORDION.querySelectorAll('.question');

function toggleAccordion() {
	const thisItem = this.parentNode;

	ITEMS.forEach(item => {
		if(thisItem == item){
			thisItem.classList.toggle('open');			
			return;
		}

		item.classList.remove('open');
	});
}

QUESTIONS.forEach(question => question.addEventListener('click', toggleAccordion));

