$('document').ready(function () {
	window.onload = function(){
	document.body.scrollTop = 0;
	}
	localStorage.setItem('currentq', `None`)
	localStorage.setItem('ruqu1', 0);
	localStorage.setItem('ruqu2', 0);
	localStorage.setItem('ruqu3', 0);
	localStorage.setItem('ruqu4', 0);
	localStorage.setItem('ruqu5', 0);
	localStorage.setItem('ruqu6', 0);
	localStorage.setItem('ruqu7', 0);
	localStorage.setItem('ruqu8', 0);
	localStorage.setItem('balls', 0);
	localStorage.setItem('qnum', 0);
	localStorage.setItem('ruq1comp', `none`);
	localStorage.setItem('ruq2comp', `none`);
	localStorage.setItem('ruq3comp', `none`);
	localStorage.setItem('ruq4comp', `none`);
	localStorage.setItem('ruq5comp', `none`);
	localStorage.setItem('ruq6comp', `none`);
	localStorage.setItem('ruq7comp', `none`);
	localStorage.setItem('ruq8comp', `none`);

	$('.ivan').hide(0)
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

	$('#yasuo').hover(function () {
		$('.ivan').slideToggle(350);
	})

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

});