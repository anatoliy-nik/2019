$(document).ready(function() {
	
	// Меню
	 $(".basic-menu").superfish({
	 	cssArrows: false, // Убираем стрелочку
	 	hoverClass: "no-class" // Убираем .sfHover
	 });

	 // Мобильное меню
	$(".burger-box").click(function() {
		// .toggleClass() добавляет или удаляет класс
		$(".burger-click").toggleClass("on"); // Из бургера делаем крестик
		$(".top-line").toggleClass("mobile"); // Меню закрепляем справа
		$(".out-bg").toggleClass("go"); // Затемняем body
	});

	// Одинаковая высота
	$('.card-box__title').matchHeight({ property: 'min-height' });
	$('.card-box__text').matchHeight({ property: 'min-height' });
	$('.links-box__item').matchHeight({ property: 'min-height' });

	// Magnific PopUp
	$(".callback").magnificPopup({
		type: 'inline',
		// fixedContentPos: false,
		// fixedBgPos: true,
		// overflowY: 'auto',
		// closeBtnInside: true,
		// preloader: false,
		// midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-3d-unfold'
	});

	// Верхняя форма или нижняя
	$(".callback").click(function() {
		// Получаем данные из атрибута data-what-form при помощи метода .data() 
		// и записываем их в value у input[name=form-name] при помощи метода .val()
		// data-* это служебное слово, обращение к атрибуту идет через what-form
		$("#callback input[name=form-name]").val($(this).data("what-form"));
	});

	// Настройки .slider
	var owl = $(".slider");
	owl.owlCarousel({
		items: 1,
		nav: true,
		navText: "",
		loop: true,
		smartSpeed: 700,
		fluidSpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700
	});
	// Кастомная навигация OwlCarousel
	$(".slider-next").click(function() {
		owl.trigger("next.owl.carousel");
	});
	// Кастомная навигация OwlCarousel
	$(".slider-prev").click(function() {
		owl.trigger("prev.owl.carousel");
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() { // После отправки данных выполнить ф-ии:
			// Выводим сообщение об успешной отправке
			$(".form__message").addClass("success");
			setTimeout(function() {
				// Удаляем сообщение об успешной отправке через 2000 мс
				$(".form__message").removeClass("success");
				// Сбрасываем значения полей через 2000 мс
				th.trigger("reset");
				// Закрываем magnificPopup через 2000 мс
				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();
			}, 2000);
		});
		return false;
	});

});

$(window).on('load', function() {

})
