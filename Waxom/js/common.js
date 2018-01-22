/*Animated for counts*/
$(document).ready(function(){

  var show = true;
  var countbox = "#counts";
  $(window).on("scroll load resize", function(){

    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;

    var w_height = $(window).height();
    var d_height = $(document).height();

    var e_height = $(countbox).outerHeight();

    if(w_top + 350 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      $(".spincrement").spincrement({
        thousandSeparator: "",
        duration: 4500,
        from: 0
      });

      show = false;
    }
  });
});
/*Animated for click elements*/
$(document).ready(function(){
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

/*Validation form */
$('.btn_submit').on('click', function(){
 var count = $('.empty_field').length;

    $('.rf').find('.empty_field').css({'border-color':'#d8512d', 'box-shadow':'0 0 10px rgba(155,33,9,1)'});
    setTimeout(function(){
       $('.rf').find('.empty_field').removeAttr('style');},900);
   
    if ($('#pass').val() != $('#repass').val()){
      alert("Пароли не совпадают")

      $('.rf').find('#pass').css({'border-color':'#d8512d', 'box-shadow':'0 0 10px rgba(155,33,9,1)'});
      setTimeout(function(){
        $('.rf').find('#pass').removeAttr('style');},900);

      $('.rf').find('#repass').css({'border-color':'#d8512d', 'box-shadow':'0 0 10px rgba(155,33,9,1)'});
      setTimeout(function(){
        $('.rf').find('#repass').removeAttr('style');},900);
    
      return false
    }

    if (count != 0)
{
  alert("Заполните все поля регистрации");
  return false
}
else
{
      if ($('#email').val().match(/[\.@]/g)){

      return true
    }
    else {

      alert("Введите корректный емейл");
      $('.rf').find('#email').css({'border-color':'#d8512d', 'box-shadow':'0 0 10px rgba(155,33,9,1)'});
      setTimeout(function(){
        $('.rf').find('#email').removeAttr('style');},900);
      return false
    }
}});
(function( $ ){

$(function() {
  $('.rf').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
  var form = $(this),
        btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
  form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
    $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
    $(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');},900);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
    checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        alert('sizeEmpty');
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить

  });
});

})( jQuery );
/*masked for input*/
$(document).ready(function(){
  $("#date").mask("99/99/9999");
  $("#phone").mask("+380 99-99-99-999");
  });

/*slick properties*/
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
});
/*boostrap carusel*/
$(function() {
$('.carousel').carousel({
  interval: 5000
});});
});

new WOW().init();
