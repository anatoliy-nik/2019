$(document).ready(function() {
	//-------------------------------------------------------------
	//Создаем ф-ю wResize()
	function wResize() {
		//Делаем высоту header равную высоте окна браузера
		// $("header").css("min-height", $(window).height())
	};
	//Вызываем ф-ю wResize() при загрузке док-та
	wResize();
	//Вешаем ф-ю wResize() на событие resize,
	//событие resize происходит, когда изменяются размеры объекта window (окна браузера)
	$(window).resize(function() {
		wResize();
	});
	//--------------------------------------------------------------
	//Скрипт переключения табов для .contacts-tabs
	//также надо добавить в css .contacts-tabs__content {display: none;}
  	//также надо добавить в css .contacts-tabs__content_act {display: block;}
	$(".contacts-tabs__names").on("click", "li:not(.contacts-tabs__name_act)", function() {
    	$(this)
      	.addClass("contacts-tabs__name_act").siblings().removeClass("contacts-tabs__name_act")
      	.closest(".contacts-tabs").find(".contacts-tabs__content")
      	.removeClass("contacts-tabs__content_act")
      	.eq($(this).index()).addClass("contacts-tabs__content_act");
  	});
	//----------------------------------------------------------------------
  	//Скрипт переключения табов для .discounts-tabs
	$(".discounts-tabs__names").on("click", "li:not(.discounts-tabs__name_act)", function() {
    	$(this)
      	.addClass("discounts-tabs__name_act").siblings().removeClass("discounts-tabs__name_act")
      	.closest(".discounts-tabs").find(".discounts-tabs__content")
      	.removeClass("discounts-tabs__content_act")
      	.eq($(this).index()).addClass("discounts-tabs__content_act");
  	});
  	//------------------------------------------------------------------------
  	//Скрипт переключения табов для .where-tabs
  	$(".where-tabs__names").on("click", "li:not(.where-tabs__name_act)", function() {
    	$(this)
      	.addClass("where-tabs__name_act").siblings().removeClass("where-tabs__name_act")
      	.closest(".where-tabs").find(".where-tabs__content")
      	.removeClass("where-tabs__content_act")
      	.eq($(this).index()).addClass("where-tabs__content_act");
  	});
	//-------------------------------------------------------------------------
	//Плагин Stellar.js для создания эффекта паралакса
	//иниц-я плагина для всего док-та
  	$.stellar({
  		horizontalOffset: 50,
  		responsive: true
  	});
  	//---------------------------------------------------------------------------
	//Слайдер
	$(".owl-carousel").owlCarousel( {
		items: 1,
		loop: false,
		rewind: true,
		// margin: 20,
		nav: true,
		navText: ["",""],
		smartSpeed: 600
	});
	//----------------------------------------------------------------------
	//Попап плагин magnificPopup
	$(".image-popup").magnificPopup({type:"image"});
	$('.form-popup').magnificPopup({
   		// type: 'inline',
   		// focus: '#name'
	});

	//--------------------------------------------------------------
	//Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	//----------------------------------------------------------------
	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//---------------------------------------------------------------
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {  
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php",  
			data: th.serialize()
		}).done(function() { //----Функции, которые будут выполняться после отправки формы
			//----Добавляем в форму сообщение об успешной отправке заявки
			$("form").prepend("<div class='message'>Заявка успешно отправлена!</div>");

			setTimeout(function() {
				//----Удаляем <div class='message'> из формы через 2000 мс
				$(".message").remove();
				//----Сбрасываем значения полей через 2000 мс
				th.trigger("reset");
				//----Закрываем magnificPopup через 2000 мс
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close();
			}, 2000);
		});
		return false;
	});
	
});

$(window).load(function() {
	//-------------------------------------------------------------------
	//----$(window).load - сработает, когда будет готов весь DOM включая изображения
	//----$(document).ready - сработает, когда будет готов DOM, за исключением картинок. 
	//----Инициализируем Animated.css
	$("h1").animated("fadeInDown", "fadeOut");
	$(".header-slogan").animated("fadeInUp", "fadeOut");
	// $(".discounts-tabs").animated("flipInY", "fadeOut");
	$(".experts__item").animated("fadeInRight", "fadeOut");
	// $(".sform").animated("zoomInRight", "fadeOut");
	$(".optimal-h3").animated("fadeInUp", "fadeOut");
	// $("footer").animated("fadeInUp", "fadeOut");
});