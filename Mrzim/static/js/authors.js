
$(function(){
	$('.aboutDomi').on('click', function(){
		$('.about-Domi').show('slow');
		$('#nav').animate({width: 400 }, 'slow');
	});
	$('#nav').on('mouseleave', function(){
		$('.about-Domi').hide('slow');
		$('#nav').animate({width: 200 }, 'slow');
	});
	$('.aboutDaco').on('click', function(){
		$('.about-Daco').show('slow');
		$('#nav').animate({width: 400 }, 'slow');
	});
	$('#nav').on('mouseleave', function(){
		$('.about-Daco').hide('slow');
		$('#nav').animate({width: 200 }, 'slow');
	});
	$('.aboutMikro').on('click', function(){
		$('.about-Mikro').show('slow');
		$('#nav').animate({width: 400 }, 'slow');
	});
	$('#nav').on('mouseleave', function(){
		$('.about-Mikro').hide('slow');
		$('#nav').animate({width: 200 }, 'slow');
	});
});
