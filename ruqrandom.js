$('document').ready(function(){
	var qnumber = parseInt(localStorage.getItem('qnum'));
	const hello = $('._descrheader');
	if (qnumber == 1) {
		hello.text(`Welcome to your ${qnumber}st question!`);
	} else {
		if (qnumber == 2) {
			hello.text(`Welcome to your ${qnumber}nd question!`);
		} else {
			if (qnumber == 3) {
				hello.text(`Welcome to your ${qnumber}d question!`);
			} else {
					hello.text(`Welcome to your ${qnumber}th question!`);
			}
		}
	}
	console.log('qnum= '+qnumber);
	localStorage.getItem('ruqu1');
	localStorage.getItem('ruqu2');
	localStorage.getItem('ruqu3');
	localStorage.getItem('ruqu4');
	localStorage.getItem('ruqu5');
	localStorage.getItem('ruqu6');
	localStorage.getItem('ruqu7');
	localStorage.getItem('ruqu8');
	var qu1ab = localStorage.getItem('ruqu1');
	var qu2ab = localStorage.getItem('ruqu2');
	var qu3ab = localStorage.getItem('ruqu3');
	var qu4ab = localStorage.getItem('ruqu4');
	var qu5ab = localStorage.getItem('ruqu5');
	var qu6ab = localStorage.getItem('ruqu6');
	var qu7ab = localStorage.getItem('ruqu7');
	var qu8ab = localStorage.getItem('ruqu8');
	var qnmb = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	];
	function getplus(){
		localStorage.getItem('qnum');
		var qnum = parseInt(localStorage.getItem('qnum'));
		console.log("qnum= "+qnum);
		qnum = qnum+1
		localStorage.setItem('qnum', qnum);
	}
	$('.lqdbutton').on('click', function() {
		if (window.confirm("Are you sure?")) {
			next()
			function next(){
				if (qu1ab == 1 & qu2ab == 1 & qu3ab == 1 & qu3ab == 1 & qu4ab == 1 & qu5ab == 1 & qu6ab == 1 & qu7ab == 1 & qu8ab == 1) {
					window.location.href = 'finalP.html';
				} else {
				function rand() {
				function getrnd (min, max) {
					return Math.random() * (max - min) + min;
				}
				var number = getrnd(0, qnmb.length);
				var truth = qnmb[parseInt(number)];
				console.log(truth);
				return truth;
				}
				var truth = rand();
				if (truth == 1) {
					if (qu1ab == 0) {
						localStorage.setItem('ruqu1', 1);
						getplus();
						window.location.href = 'q1.html';
					} else {
						next();
					}
				} else {
					if (truth == 2) {
					if (qu2ab == 0) {
						localStorage.setItem('ruqu2', 1);
						getplus();
						window.location.href = 'q2.html';
					} else {
						next();
					}
					} else {
						if (truth == 3) {
						if (qu3ab == 0) {
							localStorage.setItem('ruqu3', 1);
							getplus();
							window.location.href = 'q3.html';
						} else {
							next();
						}
						} else {
							if (truth == 4) {
							if (qu4ab == 0) {
								localStorage.setItem('ruqu4', 1);
								getplus();
								window.location.href = 'q4.html';
							} else {
								next();
							}
							} else {
								if (truth == 5) {
								if (qu5ab == 0) {
									localStorage.setItem('ruqu5', 1);
									getplus();
									window.location.href = 'q5.html';
								} else {
								next();
								}
								} else {
									if (truth == 6) {
									if (qu6ab == 0) {
										localStorage.setItem('ruqu6', 1);
										getplus();
										window.location.href = 'q6.html';
									} else {
										next();
									}
									} else {
										if (truth == 7) {
										if (qu7ab == 0) {
											localStorage.setItem('ruqu7', 1);
											getplus();
											window.location.href = 'q7.html';
										} else {
											next();
										}
										} else {
											if (truth == 8) {
											if (qu8ab == 0) {
												localStorage.setItem('ruqu8', 1);
												getplus();
												window.location.href = 'q8.html';
											} else {
												next();
											}
										} else {
											alert('error');
										}
									}	
								}
							}
						}
					}
				}
			}
			}
		}
	}
	})
})