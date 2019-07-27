$( document ).ready(function(){

	$('.burger-link').on('click', function() { // Выезжающее меню
		$(this).toggleClass('burger-link_active');
		$('.basic-menu').toggleClass('basic-menu_active');
	});

	$('.choice-box__select').styler(); // Оформление селектов

	// Обработчик кликов по неактивным табам, 
	// должен располагаться перед присвоением первому табу активного класса
	$('.recipes-box__title li').not('.active').click(function(){
	    //номер таба
	    var index = $(this).index();
	    //соответствующая закладка
	    var content = $('.recipes-box__content li').eq(index);
	    //таб сделать активным, остальные неактивными
	    $(this).addClass('active').siblings().removeClass('active');
	    //открыть нужную вкладку, закрыть остальные
	    $('.recipes-box__content li').css('display', 'none').eq(index).css('display', 'block');
	});
    $('.recipes-box__title li:first').addClass('active');
    $('.recipes-box__content li:first').css('display', 'block');
	
	//Проверка Magnific PopUp
	// $(".open-popup-link").magnificPopup({
	//   type:'inline'
	// });

	//Проверка Animate
	// $("h1").animated("fadeInRight", "fadeInLeft");

	// Анимация ТОП АВТОРОВ
	// при скроллинге до .top-authors выполнить ф-ю:
	$(".author-box").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".author-box__item").each(function(index) {
			// this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setInterval(function() {
				// добавляем ТЕКУЩЕМУ элементу новый класс с интервалом
				it.addClass("author-box__item_done");
			}, 100*index);
		});
	}, {
		offset:"80%"
	}
	);

	// Настройки .slider
	// $(".slider").owlCarousel({
	// 	items: 1,
	// 	margin: 10,
	// 	nav: true,
	// 	navText: "",
	// 	loop: true,
	// 	smartSpeed: 700,
	// 	fluidSpeed: 700,
	// 	navSpeed: 700,
	// 	dotsSpeed: 700,
	// 	dragEndSpeed: 700
	// });

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() { // После отправки данных выполнить ф-ии:
			// Выводим сообщение об успешной отправке
			$(".callback__message").addClass("callback__message_success");
			setTimeout(function() {
				// Удаляем сообщение об успешной отправке через 2000 мс
				$(".callback__message").removeClass("callback__message_success");
				// Сбрасываем значения полей через 2000 мс
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(window).on('load', function() {

});