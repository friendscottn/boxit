(function ($) {
	$.fn.boxit = $.boxit = function (action) {

		function positionCenter(element) {
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var elementWidth = $(element).width();
			var elementHeight = $(element).height();
			var leftPosition = (windowWidth / 2) - (elementWidth / 2);
			var topPosition = (windowHeight / 2) - (elementHeight / 2);

			$(element).css({ top: topPosition, left: leftPosition });
		}

		if(action === 'reposition')
		{
			positionCenter($('.boxit'));
		}

		if(action === "open") {
			this.before("<div class='boxit-overlay'></div>");
			this.show();
			positionCenter(this);
		}
		if(action === "close") {
			this.prev('.boxit-overlay').hide();
			this.hide();
		}

		return this; //enable chaining
	};
}(adnsf$));



$(window).resize(function () {
	adnsf$.boxit('reposition');
});