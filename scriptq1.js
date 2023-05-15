$('document').ready(function () {
	const minss = $('.mins');
	const minuts = minss.text();
	localStorage.setItem('minsleft', minuts);
	localStorage.setItem('answer', 2); //статус ответа
	localStorage.getItem('balls'); //статус баллов
	var qnumb = parseInt(localStorage.getItem('qnum')) + 1;
	console.log(qnumb);
	localStorage.setItem('chanses', 3);
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'nb.mp3');
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

	$(".checkbtn").mouseover(function () {
		$(this).addClass("_push");
	});
	$(".checkbtn").mouseout(function () {
		$(this).removeClass("_push");
	});
	$(".checkbtn").click(function () {
		$(this).removeClass("_push");
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

	$('#logo').on('click', function () {
		audioElement.play();
	})

	$('.lpshouttime').on('click', function () {
		window.open('https://vk.com/lpshouttime')
	})
	$('.hound').on('click', function () {
		window.open('https://vk.com/mini_hound')
	})
	$('#yasuo').hover(function () {
		$('.ivan').slideToggle(350);
	})

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

	let words = document.querySelectorAll('._needchoose');

	$('.questions-text-child').on('click', function () {
		for (let index = 0; index < words.length; index++) {
			const word = words[index];
			if (word.classList.contains('_choosed')) {
				$('._needchoose').removeClass('_choosed');
				$(this).removeClass('_choosed');
			} else {
				$(this).addClass('_choosed');
			}
		}
	});

	$('.questions-text-child').on('click', function () {
		if ($(this).hasClass('_ans')) {
			localStorage.setItem('answer', 1);
		} else {
			localStorage.setItem('answer', 0);
		}
	});

	$('._q').on('click', function() {
		var bals = parseInt(localStorage.getItem('balls'));
		var ans = parseInt(localStorage.getItem('answer'));
		var currentq = localStorage.getItem('currentq');
		if (ans == 1) {
			bals = bals + 1;
			localStorage.setItem('balls', bals);
		}
		if (currentq == `none`) {
			alert('error');
		} else {
			if (currentq == `A` && ans == 1) {
				localStorage.setItem('ruq1comp', 1);
			} else {
				if (currentq == `A` && ans == 0) {
				localStorage.setItem('ruq1comp', 0);
				}
			}
			if (currentq == `A` && ans == 2) {
				localStorage.setItem('ruq1comp', `none`);
			}
			if (currentq == `A+` && ans == 1) {
				localStorage.setItem('ruq2comp', 1);
			} else {
				if (currentq == `A+` && ans == 0) {
					localStorage.setItem('ruq2comp', 0);
				}
			}
			if (currentq == `A+` && ans == 2) {
				localStorage.setItem('ruq2comp', `none`);
			}
			if (currentq == `B` && ans == 1) {
				localStorage.setItem('ruq3comp', 1);
			} else {
				if (currentq == `B` && ans == 0) {
					localStorage.setItem('ruq3comp', 0);
				}
			}
			if (currentq == `B` && ans == 2) {
				localStorage.setItem('ruq3comp', `none`);
			}
			if (currentq == `B+` && ans == 1) {
				localStorage.setItem('ruq4comp', 1);
			} else {
				if (currentq == `B+` && ans == 0) {
					localStorage.setItem('ruq4comp', 0);
				}
			}
			if (currentq == `B+` && ans == 2) {
				localStorage.setItem('ruq4comp', `none`);
			}
			if (currentq == `C` && ans == 1) {
				localStorage.setItem('ruq5comp', 1);
			} else {
				if (currentq == `C` && ans == 0) {
					localStorage.setItem('ruq5comp', 0);
				}
			}
			if (currentq == `C` && ans == 2) {
				localStorage.setItem('ruq5comp', `none`);
			}
			if (currentq == `C+` && ans == 1) {
				localStorage.setItem('ruq6comp', 1);
			} else {
				if (currentq == `C+` && ans == 0) {
					localStorage.setItem('ruq6comp', 0);
				}
			}
			if (currentq == `C+` && ans == 2) {
				localStorage.setItem('ruq6comp', `none`);
			}
			if (currentq == `D` && ans == 1) {
				localStorage.setItem('ruq7comp', 1);
			} else {
				if (currentq == `D` && ans == 0) {
					localStorage.setItem('ruq7comp', 0);
				}
			}
			if (currentq == `D` && ans == 2) {
				localStorage.setItem('ruq7comp', `none`);
			}
			if (currentq == `D+` && ans == 1) {
				localStorage.setItem('ruq8comp', 1);
			} else {
				if (currentq == `D+` && ans == 0) {
					localStorage.setItem('ruq8comp', 0);
				}
			}
			if (currentq == `D+` && ans == 2) {
				localStorage.setItem('ruq8comp', `none`);
			}
		}
	})

	$('.checkbtn').on('click', function () {
		var ansstate = localStorage.getItem('answer');
		var chanses = localStorage.getItem('chanses');
		console.log(chanses);
		if (chanses != 0) {
			var changedchs = parseInt(chanses);
			changedchs = changedchs - 1;
			localStorage.setItem('chanses', changedchs);
			if (ansstate == 1) {
				alert('Your answer is right!');
				$('._black').css({'background':'#62e450'})
			} else {
				alert('Your answer is wrong, try again!');
				$('._black').css({'background':'#ca3131'})
			}
		} else {
			alert('You spent all your chanses to check the answer!');
			$('._black').css({'background':'#6868682'});
		}
	});

	times();
		function times() {
			const times = $('.seconds');
			const timem = $('.mins')
			timersDecrement();
			function timersDecrement() {
				setTimeout(function () {
					const newTime = times.text() - 1;
					times.text(newTime);
					var minsleft = parseInt(localStorage.getItem('minsleft'));
					if (minsleft == 4 || minsleft == 3 || minsleft == 5) {
						$('#stripe').css({ "background-color": "#00FF00" })
					} else {
						if (minsleft == 2 || minsleft == 1) {
							$('#stripe').css({ "background-color": "#FF8C00" })
						} else {
							if (minsleft == 0) {
								$('#stripe').css({ "background-color": "red" })
							}
						}
					}
					if (newTime >= 0 & minsleft != -1) {
						var timeout = localStorage.getItem('timeout');
						if (timeout == 1) {
							timersDecrement();
						} else {
							times.text(0)
							timem.text(0)
						}
					}
					if (newTime == 0 & minsleft == 0) {
						alert('Время вышло, вы не получите балла за задание.');
						localStorage.setItem('timeout', 0);
					}
					if (newTime == -1 & minsleft != -1) {
						var minsleft = parseInt(localStorage.getItem('minsleft'));
						if (minsleft != 5 & minsleft != 1) {
							var width = parseFloat(localStorage.getItem('width'));
							width = width - 25;
							width = width + '%';
							localStorage.setItem('width', width);
							$('#stripe').css({ "width": width })
						}
						if (minsleft == 1) {
							var width = parseFloat(localStorage.getItem('width'));
							width = width - 10;
							width = width + '%';
							localStorage.setItem('width', width);
							$('#stripe').css({ "width": width })
						}
						minsleft = minsleft - 1;
						localStorage.setItem('minsleft', minsleft);
						times.text(59)
						timem.text(minsleft);
						var timeout = localStorage.getItem('timeout');
						if (timeout == 1) {
							timersDecrement();
						} else {
							times.text(0)
							timem.text(0)
							var width = parseFloat(localStorage.getItem('width'));
							width = width - 15;
							width = width + '%';
							localStorage.setItem('width', width);
							$('#stripe').css({ "width": width })
						}
					}
					if (minsleft == 2) {
						$('.alph').slideDown(200);
					}
				}, 1000);
			}
		}
});