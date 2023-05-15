$('document').ready(function counters() {	
	localStorage.getItem('qnum');191049
		var qnum = localStorage.getItem('qnum');
		if (qnum == 1) {
			$('.qnum1').css({"background-color":"#19d4ec", "top":"10px"})
		} else {
			if (qnum == 2) {
				$('.qnum1').css({"background-color":"#191049"});
				$('.qnum2').css({"background-color":"#19d4ec", "top":"10px"});
			} else {
				if (qnum == 3) {
					$('.qnum1').css({"background-color":"#191049"});
					$('.qnum2').css({"background-color":"#191049"});
					$('.qnum3').css({"background-color":"#19d4ec", "top":"10px"});
				} else {
					if (qnum == 4) {
					$('.qnum1').css({"background-color":"#191049"});
					$('.qnum2').css({"background-color":"#191049"});
					$('.qnum3').css({"background-color":"#191049"});
					$('.qnum4').css({"background-color":"#19d4ec", "top":"10px"});
					} else {
						if (qnum == 5) {
							$('.qnum1').css({"background-color":"#191049"});
							$('.qnum2').css({"background-color":"#191049"});
							$('.qnum3').css({"background-color":"#191049"});
							$('.qnum4').css({"background-color":"#191049"});
							$('.qnum5').css({"background-color":"#19d4ec", "top":"10px"});
						} else {
							if (qnum == 6) {
								$('.qnum1').css({"background-color":"#191049"});
								$('.qnum2').css({"background-color":"#191049"});
								$('.qnum3').css({"background-color":"#191049"});
								$('.qnum4').css({"background-color":"#191049"});
								$('.qnum5').css({"background-color":"#191049"});
								$('.qnum6').css({"background-color":"#19d4ec", "top":"10px"});
							} else {
								if (qnum == 7) {
									$('.qnum1').css({"background-color":"#191049"});
									$('.qnum2').css({"background-color":"#191049"});
									$('.qnum3').css({"background-color":"#191049"});
									$('.qnum4').css({"background-color":"#191049"});
									$('.qnum5').css({"background-color":"#191049"});
									$('.qnum6').css({"background-color":"#191049"});
									$('.qnum7').css({"background-color":"#19d4ec", "top":"10px"});
								} else {
									if (qnum == 8) {
										$('.qnum1').css({"background-color":"#191049"});
										$('.qnum2').css({"background-color":"#191049"});
										$('.qnum3').css({"background-color":"#191049"});
										$('.qnum4').css({"background-color":"#191049"});
										$('.qnum5').css({"background-color":"#191049"});
										$('.qnum6').css({"background-color":"#191049"});
										$('.qnum7').css({"background-color":"#191049"});
										$('.qnum8').css({"background-color":"#19d4ec", "top":"10px"});
									} else {
										alert ('error');
									}
								}
							}
						}
					}
				}
			}
		}
})