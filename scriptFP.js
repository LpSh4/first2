$('document').ready(function () {
    $('#homeone').on('click', function () {
		window.location.href = 'testMP.html';
	});

	let activeConts = document.querySelectorAll('._activeCont');
	$('#aboutone').on('click', function () {
		for (let index = 0; index < activeConts.length; index++) {
			const activeCont = activeConts[index];
			if (activeCont.classList.contains('_active')) {
				activeCont.classList.remove('_active')
			} else {
				activeCont.classList.add('_active')
			}
		}
	});
	document.addEventListener('keydown', function (e) {
		let keyCode = e.keyCode;
		console.log('result is:' + keyCode)
		for (let index = 0; index < activeConts.length; index++) {
			const activeCont = activeConts[index];
			if (keyCode == 27) {
				activeCont.classList.remove('_active');
			}
		}
	});
    
	let activeBouts = document.querySelectorAll('._boutneedier');
	let activeInfos = document.querySelectorAll('._infoneedier');
	$('#developers').on('click', function () {
		for (let index = 0; index < activeBouts.length; index++) {
			const activeBout = activeBouts[index];
			const activeInfo = activeInfos[index];
			if (activeBout.classList.contains('_active')) {
				activeBout.classList.remove('_active');
			} else {
				activeInfo.classList.remove('_active');
				activeBout.classList.add('_active');
			}
		}
	});

	$('.lpshouttime').on('click', function () {
		for (let index = 0; index < activeBouts.length; index++) {
			const activeBout = activeBouts[index];
			if (activeBout.classList.contains('_active')) {
				window.open('https://vk.com/lpshouttime')
			}
		}
	})
	$('.hound').on('click', function () {
		for (let index = 0; index < activeBouts.length; index++) {
			const activeBout = activeBouts[index];
			if (activeBout.classList.contains('_active')) {
				window.open('https://vk.com/mini_hound')
			}
		}
	})

	$('#project').on('click', function () {
		for (let index = 0; index < activeInfos.length; index++) {
			const activeInfo = activeInfos[index];
			const activeBout = activeBouts[index];
			if (activeInfo.classList.contains('_active')) {
				activeInfo.classList.remove('_active');
			} else {
				activeBout.classList.remove('_active');
				activeInfo.classList.add('_active');
			}
		}
	});

	let height = window.innerHeight * 2;
	$('.downhere').on('click', function () {
		window.scrollTo(0, height);
	})
	let animItems = document.querySelectorAll('._animItems');

	if (animItems.length > 0) {
		window.addEventListener('scroll', AnimOnScroll);
		function AnimOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 100;
				const innerHeight = window.innerHeight / 100 * 95;

				let animItemPoint = innerHeight - animItemHeight / animStart;

				if (animItemHeight > innerHeight) {
					animItemPoint = innerHeight - innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active')
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect()
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			AnimOnScroll();
		}, 300);
	}

	function resulttxt() {
		var bals = parseInt(localStorage.getItem('balls'));
		console.log('balls is: '+bals);
		var textblock = $('.result-child');
		if (bals < 4) {
			textblock.text(`You have made your test with ${bals} points! Sure you need to learn this language more.`)
		} else {
			textblock.text(`Congratulations! You have made your test with ${bals} points! Sure you know a lot about this language!`)
		}
		
	}
	resulttxt();
	const Aquest = $('.A');
	const Aplusquest = $('.Aplus');
	const Bquest = $('.B');
	const Blusquest = $('.Bplus');
	const Cquest = $('.C');
	const Cplusquest = $('.Cplus');
	const Dquest = $('.D');
	const Dplusquest = $('.Dplus');
	function coloring() {
		var qu1comp = localStorage.getItem('ruq1comp');
		console.log(qu1comp);
		for (let index = 0; index < Aquest.length; index++) {
			const Aquests = Aquest[index];
			if (qu1comp == 1) {
				Aquests.classList.add('_qright');
			} else {
				if (qu1comp == 0) {
					Aquests.classList.add('_qwrong');
				} 
			}
		}
		var qu2comp = localStorage.getItem('ruq2comp');
		console.log(qu2comp);
		for (let index = 0; index < Aplusquest.length; index++) {
			const Aplusquests = Aplusquest[index];
			if (qu2comp == 1) {
				Aplusquests.classList.add('_qright');
			} else {
				if (qu2comp == 0) {
					Aplusquests.classList.add('_qwrong');
				} 
			}
		}
		var qu3comp = localStorage.getItem('ruq3comp');
		console.log(qu3comp);
		for (let index = 0; index < Bquest.length; index++) {
			const Bquests = Bquest[index];
			if (qu3comp == 1) {
				Bquests.classList.add('_qright');
			} else {
				if (qu3comp == 0) {
					Bquests.classList.add('_qwrong');
				} 
			}
		}
		var qu4comp = localStorage.getItem('ruq4comp');
		console.log(qu4comp);
		for (let index = 0; index < Blusquest.length; index++) {
			const Blusquests = Blusquest[index];
			if (qu4comp == 1) {
				Blusquests.classList.add('_qright');
			} else {
				if (qu4comp == 0) {
					Blusquests.classList.add('_qwrong');
				} 
			}
		}
		var qu5comp = localStorage.getItem('ruq5comp');
		console.log(qu5comp);
		for (let index = 0; index < Cquest.length; index++) {
			const Cquests = Cquest[index];
			if (qu5comp == 1) {
				Cquests.classList.add('_qright');
			} else {
				if (qu5comp == 0) {
					Cquests.classList.add('_qwrong');
				} 
			}
		}
		var qu6comp = localStorage.getItem('ruq6comp');
		console.log(qu6comp);
		for (let index = 0; index < Cplusquest.length; index++) {
			const Cplusquests = Cplusquest[index];
			if (qu6comp == 1) {
				Cplusquests.classList.add('_qright');
			} else {
				if (qu6comp == 0) {
					Cplusquests.classList.add('_qwrong');
				} 
			}
		}
		var qu7comp = localStorage.getItem('ruq7comp');
		console.log(qu7comp);
		for (let index = 0; index < Dquest.length; index++) {
			const Dquests = Dquest[index];
			if (qu7comp == 1) {
				Dquests.classList.add('_qright');
			} else {
				if (qu7comp == 0) {
					Dquests.classList.add('_qwrong');
				} 
			}
		}
		var qu8comp = localStorage.getItem('ruq8comp');
		console.log(qu8comp);
		for (let index = 0; index < Dplusquest.length; index++) {
			const Dplusquests = Dplusquest[index];
			if (qu8comp == 1) {
				Dplusquests.classList.add('_qright');
			} else {
				if (qu8comp == 0) {
					Dplusquests.classList.add('_qwrong');
				} 
			}
		}
		
	}
	coloring();

})