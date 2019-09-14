

$(document).ready(function(){
	var menuElem = $('#navMenu');
	var isOpen = false;

	menuElem.find('.open').on('click', function(){
		openMenu()
	});

	menuElem.on('click', function(){
		closeMenu()
	})

	menuElem.find('li').on('click',function(){
		scrollHandler($(this))
	})


	function openMenu(){
		if (isOpen) return null;
		var listArr = menuElem.find('li');
		menuElem.find('.open').css('z-index', '0');		

		for (let i=0; i<menuElem.find('li').length; i++){
			menuElem.find('li').eq(i).animate({
				top: -(menuElem.find('li').length-i) * 60
			}, function(){isOpen = true;});
		};

		menuElem.find('li').addClass('liOpen')

	}

	function closeMenu(){
		if (!isOpen) return null;
			menuElem.find('.open').css('z-index', '2');
			menuElem.find('li').removeClass('liOpen');
			menuElem.find('li').animate({
				top:     '0'
			}, function(){isOpen = false;});
	}

	function scrollHandler(obj){
		obj.siblings().removeClass('active');
		obj.addClass('active');
		$('html').animate({
                    scrollTop: $('.page').eq(obj.index()).offset().top
                });
	}
})





