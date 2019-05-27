$(document).ready(function(){

	// Magnific PopUp
	$("a.btn").click(function(){
		// Перед .magnificPopup по клику на a.btn
		// - заменяем содержимое #callback h4 на текст из данной a.btn
		$("#callback h4").html($(this).text());
		// - в value у <input type="hidden" name="form-name" value=""> записываем текст из данной a.btn
		$("#callback input[name=form-name]").val($(this).text());
	}).magnificPopup({
	  type:'inline'
	});

	// Делаем выпадающее меню
	$(".burger-click").click(function() {
		// .toggleClass() добавляет или удаляет класс
		$(this).toggleClass("on");
		// .slideToggle() отображает или скрывает элемент
		// Если элемент изначально отображается, то он будет скрыт, и наоборот
		$(".top-nav").slideToggle();
	})

	// Скролл до конца хедера по клику на стрелку
	$(".header-arrow").click(function() {
		$("html, body").animate({ scrollTop: $(".page-header").height() }, "slow");
		return false;
	});

	// ф-я Animated (animate + waipoint)
	$(".section-head h2, .section-head p").animated("slideInRight");
	$(".big-cirle__item").animated("zoomIn");

	// Анимация НАШИ УСЛУГИ
	// При скроллинге до .page-services выполнить:
	$(".page-services").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".services__item").each(function(index) {
			// this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setInterval(function() {
				// добавляем ТЕКУЩЕМУ элементу новый класс с интервалом
				it.addClass("services__item_on");
			}, 200*index);
		});
	}, {
		offset:"40%"
	}
	);

	// Анимация ПРЕИМУЩЕСТВА
	// При скроллинге до .page-advantages выполнить:
	$(".page-advantages").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".page-advantages .cards__item").each(function(index) {
			// this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setInterval(function() {
				// добавляем ТЕКУЩЕМУ элементу новый класс с интервалом
				it.addClass("cards__item_on");
			}, 200*index);
		});
	}, {
		offset:"40%"
	}
	);

	// Анимация КАК МЫ РАБОТАЕМ
	// При скроллинге до .page-work выполнить:
	$(".page-work").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".work__item").each(function(index) {
			//this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setTimeout(function() {
				// берем элемент с нужным Id и прорисовываем его кромку
				var myPath = document.getElementById("work-svg-" + index),
					segment = new Segment(myPath);
				segment.draw("100%", "100%", 1);
			}, 700*index);
		});
		// ф-я сработает только один раз
		this.destroy();
	}, {
		offset:"40%"
	}
	);

	// Анимация НАШИ СОТРУДНИКИ
	// При скроллинге до .page-our-staff выполнить:
	$(".page-our-staff").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".page-our-staff .cards__item").each(function(index) {
			// this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setInterval(function() {
				// добавляем ТЕКУЩЕМУ элементу новый класс с интервалом
				it.addClass("cards__item_on");
			}, 200*index);
		});
	}, {
		offset:"40%"
	}
	);

	// Настройки .slider
	$(".slider").owlCarousel({
		items: 1,
		margin: 10,
		nav: true,
		navText: "",
		loop: true,
		smartSpeed: 700,
		fluidSpeed: 700,
		navSpeed: 700,
		dotsSpeed: 700,
		dragEndSpeed: 700
	});

	// Анимация МЫ ПРОФЕССИОНАЛЫ
	// При скроллинге до .professionals выполнить:
	$(".professionals").waypoint(function() {
		// .each - цикл по выбранным элементам
		// index - порядковый номер элемента цикла, начиная с 0
		$(".certificates__item").each(function(index) {
			// this ссылается на ТЕКУЩИЙ элемент цикла
			var it = $(this);
			setInterval(function() {
				// добавляем ТЕКУЩЕМУ элементу новый класс с интервалом
				it.addClass("certificates__item_on");
			}, 200*index);
		});
	}, {
		offset:"170%"
	}
	);

	// Скролл до верха
	$(".page-up").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

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

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


});
