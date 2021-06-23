// Select DOM Elements
const btnHamburger = document.querySelector('#btnHamburger');
// const btnHamburgerImg = document.querySelector('#btnHamburgerImg');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		// Close Hamburger Menu
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		// Open Hamburger Menu
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});

// iterate over each link tag and apply .current-link class to the one whose href matches current page's URL
console.log('url', document.URL);
const regex = /[^/]+$/;
const everythingAfterSlash = document.URL.match(regex);
console.log('url', everythingAfterSlash[0]);
const currentLinks = document.querySelectorAll('a[href="' + everythingAfterSlash[0] + '"]');
console.log('currentLinks', currentLinks);
currentLinks.forEach(function (link) {
	link.className += ' current-link';
});

// // Change img src for hamburger menu
// function toggleHamburger() {
// 	console.log('clicked!', btnHamburger.innerHTML);
// 	if (btnHamburger.innerHTML == '<img id="btnHamburgerImg" src="images/icons/close.svg" alt="toggle navigation" height="18" width="18">') {
//     console.log("true")
// 		btnHamburger.innerHTML = '<img id="btnHamburgerImg" src="images/icons/hamburger.svg" alt="toggle navigation" height="13" width="24">';
// 	} else {
// 		btnHamburger.innerHTML = '<img id="btnHamburgerImg" src="images/icons/close.svg" alt="toggle navigation" height="18" width="18">';
// 	}
// }

// // call img toggle on click
// btnHamburger.addEventListener('click', function () {
// 	toggleHamburger();
// });
