$(function() {
	//Автовысота для dropdown-toggle
	// .each() - Итерация над объектом JQuery.
	// Функция вызывается в контексте текущего DOM-элемента, т.е. this будет ссылаться на этот элемент
	$(".services-menu .panel-heading").each(function() {
		var hHeight = $(this).height() + 2;
		// .find - Поиск потомков внутри элемента
		var tClick = $(this).find(".dropdown-toggle");
		tClick.height(hHeight);
	});

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize() //Для успешной сериализации элемент формы должен содержать атрибут name
		}).done(function() {
			$("form").prepend("<div class='message'>Заявка успешно отправлена!</div>");
			setTimeout(function() {
				$(".message").remove();
				th.trigger("reset");
				$('#myModal').modal('hide');
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
