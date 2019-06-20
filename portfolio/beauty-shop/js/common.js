$(document).ready(function() { 
	// .ready() - событие полной загрузки DOM (БЕЗ мультимедиа)

	$("#my-menu").mmenu({ // Инициализация и настройка Mmenu (в коде !ДО работы с API Mmenu)
		extensions: [ 'widescreen', 'theme-black', 'effect-listitems-slide', 'pagedim-black'],
		offCanvas: {
			position : 'right'
		},
		navbar: {
			title: '<span>Beauty</span> Shop'
		}
	});

	var apiM = $("#my-menu").data("mmenu"); // Через API Mmenu определяем состояние .hamburger
	apiM.bind("opened", function() { 
		// .bind - определяет состояние. Если меню открыто, то:
		$(".hamburger").addClass("is-active");
		}).bind("closed", function() {
		// .bind - определяет состояние. Если меню закрыто, то:
		$(".hamburger").removeClass("is-active");
		});

	function servicesImgHight() { // Высота картинки равна высоте контента
		$(".services-slider__item").each(function() {
			// .each() - цикл по выбранным эл-там из всего документа
			var it = $(this);
			var contentHeight = it.find(".services-slider__content").outerHeight();
			// .find() - находим эл-т, .outerHeight() - берем его внешнюю высоту
			var img = it.find(".services-slider__image");
			// .find() - находим эл-т
			img.css("min-height", contentHeight);
			// задаем min-height для картинки
		});
	};

	$(".services-slider").on('initialized.owl.carousel', function() { // в коде !ДО инициализации плагина
		// .on() - устанавливает обработчик события на выбранный эл-т
		// initialized.owl.carousel - событие полной инициализации OwlCarousel
		setTimeout(function() {
			servicesImgHight()
			// выполняем servicesImgHight() после полной инициализации OwlCarousel (а не при $(document).ready)
		}, 100);
		// даем дополнительно задержку на servicesImgHight(), для подстраховки
	});

	$(".services-slider").owlCarousel({ // Инициализация и настройки .services-slider
		margin: 0,
		nav: true,
		navText: [
			'<i class="fa fa-angle-double-left" aria-hidden="true"></i>', 
			'<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
			],
		loop: true,
		dots: false,
		smartSpeed: 700,
		fluidSpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700,
		responsiveClass:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	768:{
            	items:2
        	},
        	992:{
            	items:3
        	},
        	1200:{
            	items:3
        	}
    	}
	});

	$('.services-slider__content').equalHeights(); // Одинаковая высота
	$('footer .col-lg-3').equalHeights(); // Одинаковая высота

	function lastWordToSpan() { // Добавляем span к последнему слову в заголовке
		$(".services-slider__name").each(function() {
			// .each() - цикл по выбранным эл-там из всего документа
			var it = $(this);
			var text = it.text().trim();
			// .text() - текст выбранного эл-та
			// .trim() - удаляет символы пробелов, табов и переносов строк из начала и конца строки
			var words = text.split(' ');
			// .split(s) - разбивает строку в массив, разбив ее по разделителю s
   			var lastWord = words.pop();
   			// .pop() - извлекает последний эл-т массива. При этом эл-т удаляется из массива
  			words.push('<span>' + lastWord + '</span>');
  			// .push() - добавляет эл-т в конец массива
   			it.html(words.join(' '));
   			// .join(s) - склеивает массив в строку, s будет разделителем в строке
		});
	};
	lastWordToSpan();

	function firstWordToSpan() { // Добавляем span к первому слову в заголовке
		$(".section-title").each(function() {
			// .each() - цикл по выбранным эл-там из всего документа
			var it = $(this);
			var text = it.text().trim();
			// .text() - текст выбранного эл-та
			// .trim() - удаляет символы пробелов, табов и переносов строк из начала и конца строки
			var words = text.split(' ');
			// .split(s) - разбивает строку в массив, разбив ее по разделителю s
   			var firstWord = words.shift();
   			// .shift() - извлекает первый эл-т массива. При этом эл-т удаляется из массива
  			words.unshift('<span>' + firstWord + '</span>');
  			// .unshift() - добавляет эл-т в начало массива
   			it.html(words.join(' '));
   			// .join(s) - склеивает массив в строку, s будет разделителем в строке
		});
	};
	firstWordToSpan();

	$('.gallery').fotorama({ // Настройки Fotorama
		minheight: '350',
		nav: 'thumbs',
		thumbwidth: '110',
		thumbheight: '65',
		thumbborderwidth: '4',
		fit: 'cover',
		thumbfit: 'cover',
		transition: 'slide',
		loop: false,
		keyboard: true,
		shadows: false,
		click: true,
		swipe: true,
		arrows: 'always'
	});

	$(window).scroll(function() { // Делаем видимой кнопку "наверх"
		// $(window) - окно браузера
		// .scroll() - событие прокрутки
		if($(this).scrollTop() > $(this).height()) {
		//.scrollTop() - значение отступа прокрутки сверху
			$('.to-top').addClass('active');
		} else {
			$('.to-top').removeClass('active');
		}
	});

	$('.to-top').click(function() { // Скролл наверх
		$("html, body").animate({scrollTop: 0}, "slow");
		// .animate() - произвольная анимация набора CSS свойств
		return false;
		// return false - для остановки распространения события .click() на другие элементы
	});

	$("form").submit(function() { //E-mail Ajax форма
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: th.serialize()
		}).done(function() { // После отправки данных выполнить ф-ии:
			// Выводим сообщение об успешной отправке
			$(".form-message").addClass("success");
			setTimeout(function() {
				// Удаляем сообщение об успешной отправке через 2000 мс
				$(".form-message").removeClass("success");
				// Сбрасываем значения полей через 2000 мс
				th.trigger("reset");
				// Закрываем magnificPopup через 2000 мс
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
			}, 2000);
		});
		return false;
	});

	$('.basic-form__select').styler(); // Инициализация FormStyler

	$(".comments-slider").owlCarousel({ // Инициализация и настройки .comments-slider
		margin: 0,
		nav: false,
		loop: true,
		dots: true,
		autoHeight: false,
		smartSpeed: 700,
		fluidSpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700,
		responsiveClass:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	768:{
            	items:1
        	},
        	992:{
            	items:1
        	},
        	1200:{
            	items:1
        	}
    	}
	});

	$(".partners-slider").owlCarousel({ // Инициализация и настройки .partners-slider
		margin: 50,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>', 
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
			],
		loop: true,
		dots: false,
		smartSpeed: 700,
		fluidSpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700,
		responsiveClass:true,
    	responsive:{
        	0:{
            	items:1
        	},
        	768:{
            	items:2
        	},
        	992:{
            	items:4
        	},
        	1200:{
            	items:4
        	}
    	}
	});

});

$(window).on('load', function() { // Прелоадер загрузки
	// $(window) - окно браузера
	// .on() - устанавливает обработчик события на выбранный эл-т
	// .load() - событие полной загрузки DOM (ВКЛЮЧАЯ мультимедиа)
	$('.preloader').fadeOut();
	// .fadeOut() - cкрывает эл-т путем затухания до прозрачного состояния
});