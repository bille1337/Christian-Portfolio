// Scrolling animation

$(document).ready(function(){
  $('.nav li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

// Slider

$(function() {

	var width = 720;
	var animationSpeed = 1000;
	var pause = 4000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $('.slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;

function startSlider(){
	interval = setInterval(function() {
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
			currentSlide++;
			if(currentSlide === $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
}, pause);
}

function stopSlider(){
	clearInterval(interval);
}

$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

startSlider();

});

// Contact form-group

$('form.ajax').on('submit', function() {
	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};

that.find('[name]').each(function(index, value) {
	var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;
});

	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
			console.log(response);
		}
	});

	return false;
});
