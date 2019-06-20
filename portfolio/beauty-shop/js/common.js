$(document).ready(function() { 
	// .ready() - ñîáûòèå ïîëíîé çàãðóçêè DOM (ÁÅÇ ìóëüòèìåäèà)

	$("#my-menu").mmenu({ // Èíèöèàëèçàöèÿ è íàñòðîéêà Mmenu (â êîäå !ÄÎ ðàáîòû ñ API Mmenu)
		extensions: [ 'widescreen', 'theme-black', 'effect-listitems-slide', 'pagedim-black'],
		offCanvas: {
			position : 'right'
		},
		navbar: {
			title: '<span>Beauty</span> Shop'
		}
	});

	var apiM = $("#my-menu").data("mmenu"); // ×åðåç API Mmenu îïðåäåëÿåì ñîñòîÿíèå .hamburger
	apiM.bind("opened", function() { 
		// .bind - îïðåäåëÿåò ñîñòîÿíèå. Åñëè ìåíþ îòêðûòî, òî:
		$(".hamburger").addClass("is-active");
		}).bind("closed", function() {
		// .bind - îïðåäåëÿåò ñîñòîÿíèå. Åñëè ìåíþ çàêðûòî, òî:
		$(".hamburger").removeClass("is-active");
		});

	function servicesImgHight() { // Âûñîòà êàðòèíêè ðàâíà âûñîòå êîíòåíòà
		$(".services-slider__item").each(function() {
			// .each() - öèêë ïî âûáðàííûì ýë-òàì èç âñåãî äîêóìåíòà
			var it = $(this);
			var contentHeight = it.find(".services-slider__content").outerHeight();
			// .find() - íàõîäèì ýë-ò, .outerHeight() - áåðåì åãî âíåøíþþ âûñîòó
			var img = it.find(".services-slider__image");
			// .find() - íàõîäèì ýë-ò
			img.css("min-height", contentHeight);
			// çàäàåì min-height äëÿ êàðòèíêè
		});
	};

	$(".services-slider").on('initialized.owl.carousel', function() { // â êîäå !ÄÎ èíèöèàëèçàöèè ïëàãèíà
		// .on() - óñòàíàâëèâàåò îáðàáîò÷èê ñîáûòèÿ íà âûáðàííûé ýë-ò
		// initialized.owl.carousel - ñîáûòèå ïîëíîé èíèöèàëèçàöèè OwlCarousel
		setTimeout(function() {
			servicesImgHight()
			// âûïîëíÿåì servicesImgHight() ïîñëå ïîëíîé èíèöèàëèçàöèè OwlCarousel (à íå ïðè $(document).ready)
		}, 100);
		// äàåì äîïîëíèòåëüíî çàäåðæêó íà servicesImgHight(), äëÿ ïîäñòðàõîâêè
	});

	$(".services-slider").owlCarousel({ // Èíèöèàëèçàöèÿ è íàñòðîéêè .services-slider
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

	$('.services-slider__content').equalHeights(); // Îäèíàêîâàÿ âûñîòà
	$('footer .col-lg-3').equalHeights(); // Îäèíàêîâàÿ âûñîòà

	function lastWordToSpan() { // Äîáàâëÿåì span ê ïîñëåäíåìó ñëîâó â çàãîëîâêå
		$(".services-slider__name").each(function() {
			// .each() - öèêë ïî âûáðàííûì ýë-òàì èç âñåãî äîêóìåíòà
			var it = $(this);
			var text = it.text().trim();
			// .text() - òåêñò âûáðàííîãî ýë-òà
			// .trim() - óäàëÿåò ñèìâîëû ïðîáåëîâ, òàáîâ è ïåðåíîñîâ ñòðîê èç íà÷àëà è êîíöà ñòðîêè
			var words = text.split(' ');
			// .split(s) - ðàçáèâàåò ñòðîêó â ìàññèâ, ðàçáèâ åå ïî ðàçäåëèòåëþ s
   			var lastWord = words.pop();
   			// .pop() - èçâëåêàåò ïîñëåäíèé ýë-ò ìàññèâà. Ïðè ýòîì ýë-ò óäàëÿåòñÿ èç ìàññèâà
  			words.push('<span>' + lastWord + '</span>');
  			// .push() - äîáàâëÿåò ýë-ò â êîíåö ìàññèâà
   			it.html(words.join(' '));
   			// .join(s) - ñêëåèâàåò ìàññèâ â ñòðîêó, s áóäåò ðàçäåëèòåëåì â ñòðîêå
		});
	};
	lastWordToSpan();

	function firstWordToSpan() { // Äîáàâëÿåì span ê ïåðâîìó ñëîâó â çàãîëîâêå
		$(".section-title").each(function() {
			// .each() - öèêë ïî âûáðàííûì ýë-òàì èç âñåãî äîêóìåíòà
			var it = $(this);
			var text = it.text().trim();
			// .text() - òåêñò âûáðàííîãî ýë-òà
			// .trim() - óäàëÿåò ñèìâîëû ïðîáåëîâ, òàáîâ è ïåðåíîñîâ ñòðîê èç íà÷àëà è êîíöà ñòðîêè
			var words = text.split(' ');
			// .split(s) - ðàçáèâàåò ñòðîêó â ìàññèâ, ðàçáèâ åå ïî ðàçäåëèòåëþ s
   			var firstWord = words.shift();
   			// .shift() - èçâëåêàåò ïåðâûé ýë-ò ìàññèâà. Ïðè ýòîì ýë-ò óäàëÿåòñÿ èç ìàññèâà
  			words.unshift('<span>' + firstWord + '</span>');
  			// .unshift() - äîáàâëÿåò ýë-ò â íà÷àëî ìàññèâà
   			it.html(words.join(' '));
   			// .join(s) - ñêëåèâàåò ìàññèâ â ñòðîêó, s áóäåò ðàçäåëèòåëåì â ñòðîêå
		});
	};
	firstWordToSpan();

	$('.gallery').fotorama({ // Íàñòðîéêè Fotorama
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

	$(window).scroll(function() { // Äåëàåì âèäèìîé êíîïêó "íàâåðõ"
		// $(window) - îêíî áðàóçåðà
		// .scroll() - ñîáûòèå ïðîêðóòêè
		if($(this).scrollTop() > $(this).height()) {
		//.scrollTop() - çíà÷åíèå îòñòóïà ïðîêðóòêè ñâåðõó
			$('.to-top').addClass('active');
		} else {
			$('.to-top').removeClass('active');
		}
	});

	$('.to-top').click(function() { // Ñêðîëë íàâåðõ
		$("html, body").animate({scrollTop: 0}, "slow");
		// .animate() - ïðîèçâîëüíàÿ àíèìàöèÿ íàáîðà CSS ñâîéñòâ
		return false;
		// return false - äëÿ îñòàíîâêè ðàñïðîñòðàíåíèÿ ñîáûòèÿ .click() íà äðóãèå ýëåìåíòû
	});

	$("form").submit(function() { //E-mail Ajax ôîðìà
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: th.serialize()
		}).done(function() { // Ïîñëå îòïðàâêè äàííûõ âûïîëíèòü ô-èè:
			// Âûâîäèì ñîîáùåíèå îá óñïåøíîé îòïðàâêå
			$(".form-message").addClass("success");
			setTimeout(function() {
				// Óäàëÿåì ñîîáùåíèå îá óñïåøíîé îòïðàâêå ÷åðåç 2000 ìñ
				$(".form-message").removeClass("success");
				// Ñáðàñûâàåì çíà÷åíèÿ ïîëåé ÷åðåç 2000 ìñ
				th.trigger("reset");
				// Çàêðûâàåì magnificPopup ÷åðåç 2000 ìñ
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
			}, 2000);
		});
		return false;
	});

	$('.basic-form__select').styler(); // Èíèöèàëèçàöèÿ FormStyler

	$(".comments-slider").owlCarousel({ // Èíèöèàëèçàöèÿ è íàñòðîéêè .comments-slider
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

	$(".partners-slider").owlCarousel({ // Èíèöèàëèçàöèÿ è íàñòðîéêè .partners-slider
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

	// Скрываем прелоадер после загрузки DOM
	$('.preloader').fadeOut();

});

$(window).on('load', function() { // Ïðåëîàäåð çàãðóçêè
	// $(window) - îêíî áðàóçåðà
	// .on() - óñòàíàâëèâàåò îáðàáîò÷èê ñîáûòèÿ íà âûáðàííûé ýë-ò
	// .load() - ñîáûòèå ïîëíîé çàãðóçêè DOM (ÂÊËÞ×Àß ìóëüòèìåäèà)
});