AOS.init();
$(function(){
    $('.right-quick').addClass('on')

    $('.header').on('mouseover',function(){
        $('.header').addClass('on')
    })
    $('.header').on('mouseout',function(){
        $('.header').removeClass('on')
    })

    let headerWidth = $('.header-nav').width();
    let headerNavLength = $('.header-nav > ul > li').length - 1;

    let headerBtnWidth = (headerWidth / headerNavLength);

    $('.header-nav-btn').css({
        'width' : headerBtnWidth * 0.9,
    })

    for(let num = 1; num <= headerNavLength; num++){
        $('.header-nav > ul > li:nth-child('+ num +')').on('mouseover',function(){
            $('.header-nav-btn').addClass('on')
            $('.header-nav-btn').css({
                'left': (headerBtnWidth * (num - 1)) + (headerBtnWidth - (headerBtnWidth * 0.9))/2
            })
        })
    }

    $('.header-nav > ul > li').on('mouseout',function(){
        $('.header-nav-btn').removeClass('on')
    })

    $('.m-header-nav > ul > li').on('click',function(){
        $('.m-header-nav > ul > li > ul').removeClass('on')
        $(this).find('ul').addClass('on')
    })

    $('.hamburger').on('click',function(){
        $('.m-header').toggleClass('on')
    })

	$('map').imageMapResize();

	$('ul.tabs li').click(function () {
		var tab_area_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-area').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_area_id).addClass('current');
	});
	$('ul.tabs2 li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs2 li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});
})