(function () {
	var tuck = document.getElementById('tuck');

	function mainScrolled() {
		if (window.pageYOffset <= 0) {
			if (tuck.classList.contains('hidden') === false) {
				tuck.classList.add('hidden');
			}
		} else {
			if (tuck.classList.contains('hidden') === true) {
				tuck.classList.remove('hidden');
			}
		}
	}

	window.onscroll = mainScrolled;

	function changeSelectedTab(tabid) {
		$('#tab-background').removeClass('selected');
		$('#tab-experience').removeClass('selected');
		$('#tab-projects').removeClass('selected');

		if (tabid === 'background') {
			$('#tab-background').addClass('selected');
		} else if (tabid === 'experience') {
			$('#tab-experience').addClass('selected');
		} else if (tabid === 'projects') {
			$('#tab-projects').addClass('selected');
		}
	}

	$('main').waypoint(function(direction) {
	  if (direction === 'down') {
	  	changeSelectedTab('background');
	  } else {
	  	changeSelectedTab('');
	  }
	});

	$('#experience').waypoint(function(direction) {
	  if (direction === 'down') {
	  	changeSelectedTab('experience');
	  } else {
	  	changeSelectedTab('background');
	  }
	}, { offset: 300 });
	
	$('#projects').waypoint(function(direction) {
	  if (direction === 'down') {
	  	changeSelectedTab('projects');
	  } else {
	  	changeSelectedTab('experience');
	  }
	}, { offset: 300 });
}());

(function () {

	function setupScroll(name) {
		$('#'+name+'-btn').click(function(){
	    	$('html, body').animate({ scrollTop: $('#'+name).offset().top - 100 }, 'slow');
		});
	}

	setupScroll('background');
	setupScroll('experience');
	setupScroll('projects');

	$('#main-btn').click(function(){
    	$('html, body').animate({ scrollTop: $('body') }, 'slow');
	});
}());