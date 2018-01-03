$(document).ready(function(){
	
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$('#zaebal').click(function(){
		$(this).addClass('animated bounce');
		$(this).one(animationEnd,function(){
		});
	}):
});