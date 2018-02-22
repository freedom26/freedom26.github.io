$(document).ready( function() {
    $('.carousel').carousel();
    $('#carousel').on('slide.bs.carousel', function(e) {
        var from = $('.nav li.active').index();
        var next = $(e.relatedTarget);
        var to =  next.index();

      	$('.nav li').removeClass('active').eq(to).addClass('active');
    });
});
