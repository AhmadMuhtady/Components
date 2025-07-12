const items = document.querySelectorAll('.item');

items.forEach((item) => {
	const btn = item.querySelector('.btn');
	const box = item.querySelector('.box');

	btn.addEventListener('click', () => {
		// Close all items first
		items.forEach((el) => {
			if (el !== item) {
				el.classList.remove('open');
				el.querySelector('.box').classList.add('hidden');
			}
		});

		// Toggle clicked item
		item.classList.toggle('open');
		box.classList.toggle('hidden');
	});
});
