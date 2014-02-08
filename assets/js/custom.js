$(function() {
  // placeholder for old browsers
  $('input, textarea').placeholder();

  // toggle menu icon
$(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
	$('.menu-btn span').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
})

});


