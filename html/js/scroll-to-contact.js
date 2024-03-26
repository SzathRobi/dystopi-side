const scrollToContacts = () => {
	const letsStartButton = document.getElementById('lets-start-button');

	if (!letsStartButton) return;

	letsStartButton.addEventListener('click', function (e) {
		e.preventDefault();
		const section = document.getElementById('footer');
		section.scrollIntoView({ behavior: 'smooth' });
	});
};

scrollToContacts();
