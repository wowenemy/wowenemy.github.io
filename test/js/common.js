$('.slick_body').slick(
{
  
  slidesToShow: 3,
  speed: 700,
  autoplay: true,
  responsive:[
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        autoplay: false
      }
    },
    {
      breakpoint: 492,
      settings: {
        slidesToShow: 1,
        autoplay: false
      }
    }]
    });

$('.left_arrow').on('click', function(){
 $('.slick_body').slick('slickPrev');
  });

$('.right_arrow').on('click', function(){
 $('.slick_body').slick('slickNext');
  });
$('.slick_body_1').slick(
{
slidesToShow: 2,
centerMode: true,
cenerPadding: '50px',
adaptiveHeight: true,
variableWidth: true


}



  );


$(function() {

$('.carousel').carousel({
  interval: 5000
});
	

});


$('.jsbutton').on('click', function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this).addClass('animated rubberBand');
  $(this).one(animationEnd,function(){
  $(this).removeClass('animated rubberBand');
  });

});
$('.jsbutton').on('click', function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this).addClass('animated rubberBand');
  $(this).one(animationEnd,function(){
  $(this).removeClass('animated rubberBand');
  });

});
$('.jspulse').on('click', function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this).removeClass('fadeInUp wow');
  $(this).removeAttr("data-wow-delay")
  $(this).attr('style', '');
  $(this).addClass('animated pulse');
  $(this).one(animationEnd,function(){
  $(this).removeClass('animated pulse');
  });

});
$('.jsbounceOut').on('click', function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $(this).removeClass('fadeInUp wow');
  $(this).removeAttr("data-wow-delay")
  $(this).attr('style', '');
  $(this).addClass('animated bounceOut');
  $(this).one(animationEnd,function(){
  $(this).removeClass('animated bounceOut');
  });

});
$(document).ready(function(){
  $("#date").mask("99/99/9999");
  $("#phone").mask("+380 999-999-999");
  });


new WOW().init();

$('#test').click(function()
{
$('.text_message').html("hello world")
.css('color', 'red')
.parent()
.width(150)
.height(100)
.css('background-color','green')



});
