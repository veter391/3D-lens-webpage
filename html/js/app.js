
window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('mousemove', e => {
		Object.assign(document.documentElement, {
			style: `
			--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
			--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
			`
		})
	})
	
	const btn = document.querySelector('.button-start')
	
	
	// fade and unfade in vanilla js
	function fade(element, timeout, display = 'block') {
		element.style.opacity = 0;
		element.style.display = display;
		element.style.transition = `opacity ${timeout}ms`;
		setTimeout(() => {
			element.style.opacity = 1;
		}, 10);
	}
	
	function unfade(element, timeout) {
		element.style.opacity = 1;
		element.style.transition = `opacity ${timeout}ms`;
		element.style.opacity = 0;
	
		setTimeout(() => {
			element.style.display = 'none';
		}, timeout);
	}
	
	
	btn.addEventListener('click', () => {
		btn.classList.toggle('active')
		if(btn.classList.contains('active')) {
			document.querySelector('.layer-2').style.transform = 'translateZ(1000px) rotate(20deg)'
			document.querySelector('.layer-1').style.transform = 'translateZ(-400px) scale(1.9)'
			document.querySelector('.layer-5').style.transform = 'translateZ(400px) scale(1.2) rotate(25deg) translateY(300px)'
			document.querySelector('.layer-1').style.transition = 'transform .7s ease-in'
			unfade(document.querySelector('.title'), 0)
			fade(document.querySelector('.hero-content__p-second'), 2300)
	
		} else {
			document.querySelector('.layer-2').style.transform = 'translateZ(80px) rotate(20deg)'
			document.querySelector('.layer-1').style.transform = 'translateZ(-55px) scale(1.09)'
			document.querySelector('.layer-5').style.transform = 'translateZ(300px) scale(.9)'
			document.querySelector('.layer-1').style.transition = 'transform .5s ease-in'
			fade(document.querySelector('.title'), 2000)
			unfade(document.querySelector('.hero-content__p-second'), 0)
	
		}
	})
})