var isScrollingDown = false; 

$(window).on('wheel', function(event) {
    isScrollingDown = event.originalEvent.deltaY > 0; // 스크롤을 위로하면 해당 변수가 true가 됨
    //console.log(isScrollingDown) // 상태 확인용 콘솔로그
});

$('#fullpage').fullpage({
    onLeave : function(anchor, index){
        if(index === 1){
            $('.header').removeClass('white')
            $('.right-quick').stop().fadeIn(500);
        }
        if(index === 2){
            $('.main-section-premium').addClass('fp-active')
            if($('.main-section-premium').hasClass('on')){
                $('.header').addClass('white')
            } else{
                $('.header').removeClass('white')
            }
            $('.right-quick').stop().fadeOut(500);
            //$('.header').addClass('white')
        }
        if(index === 3){
            $('.main-section-environment').addClass('fp-active')
            $('.header').removeClass('white')
            $('.right-quick').stop().fadeOut(500);
        }
        if(index === 4){
            $('.main-section-location').addClass('fp-active')
            $('.header').addClass('white')
            $('.right-quick').stop().fadeIn(500);
        }
        if(index === 5){
            $('.right-quick').stop().fadeOut(500);
        }
    },
    afterLoad : function(anchor, index){
        if(index === 1){
            $.fn.fullpage.setAllowScrolling(true); 
            $('.premium1-first-slide, .premium1-last-slide').removeClass('on')
            $('.premium2-first-slide, .premium2-last-slide').removeClass('on')
        }
        if(index === 2){
            $.fn.fullpage.setAllowScrolling(false); 
        }
        if(index === 3){
            $.fn.fullpage.setAllowScrolling(true); 
            $('.premium1-first-slide, .premium1-last-slide').removeClass('on')
            $('.premium2-first-slide, .premium2-last-slide').removeClass('on')
        }
    },
    scrollingSpeed : 800,
    easingcss3: 'cubic-bezier(0.65, 0, 0.35, 1)',
})
let visualSlide = new Swiper('.visual-slide',{
    effect : 'fade',
    speed : 1200,
    loop : true,
    autoplay : {
        delay : 4000,
    },
	on : {
		slideChange : function(){
			let realIndex = this.realIndex;
			
			if(realIndex === 0 || realIndex === 2){
				$('.visual-btn-box').addClass('top')
			} else{
				$('.visual-btn-box').removeClass('top')
			}

			if(realIndex === 1){
				$('.header').addClass('white')
			} else{
				$('.header').removeClass('white')
			}

			
		},		
	}
})
let premiumSlide1 = new Swiper('.premium-slide-01',{
    speed : 700,
    centeredSlides : true,
    slidesPerView : 3,
    mousewheel : true,
    observer: true,
    observeParents: true,
    on : {
        slideChange : function(){
            let realIndex = this.realIndex + 1;
            let totalIndex = this.slides.length;
            
            $('.premium-01-progress > span').css('height',
                (100 / totalIndex * realIndex) + '%')
            
            setTimeout(function(){
                if(realIndex === totalIndex){
                    $('.premium1-last-slide').addClass('on')
                } else{
                    $('.premium1-last-slide').removeClass('on')
                }
        
                if(realIndex === 1){
                    $('.premium1-first-slide').addClass('on')
                } else{
                    $('.premium1-first-slide').removeClass('on')
                }
            }, 600)
			
			if(realIndex > 3){
				$('.premium-slide-01').addClass('on')
				$('.main-section-premium').addClass('on')
			} else{
				$('.premium-slide-01').removeClass('on')
				$('.main-section-premium').removeClass('on')
			}
			if($('.premium-slide-01').hasClass('on')){
				$('.premium-title > img:nth-child(1)').attr('src','/assets/images/main/premium-title-01-1.png')
				$('.header').addClass('white')
				$('.main-section-premium').addClass('on')
			} else{
				$('.premium-title > img:nth-child(1)').attr('src','/assets/images/main/premium-title-01.png')
				$('.header').removeClass('white')
				$('.main-section-premium').removeClass('on')
			}

				
    
        },
        touchStart : function(){
			startY = event.touches[0].clientY;
		},
        touchMove : function(){
			var currentIndex = this.realIndex + 1;
			var totalSlides = this.slides.length;

			var currentY = event.touches[0].clientY;
			var deltaY = startY - currentY;

			if ((deltaY > 0) && (currentIndex === totalSlides)) {
				// console.log('하단으로 스와이프');
				$.fn.fullpage.moveTo(3);
			} 
			if((deltaY < 0) && (currentIndex === 1)) {
				// console.log('첫번째에서 상단으로 스와이프');
				$.fn.fullpage.moveTo(1);
			}
		},
    },
    breakpoints : {
        991 : {
            slidesPerView : 1,
            direction : 'vertical',
        },
    }
})
let realIndex1 = premiumSlide1.realIndex + 1;
let totalIndex1 = premiumSlide1.slides.length;

$('.premium-01-progress > span').css('height',(100 / totalIndex1 * realIndex1) + '%')

$('.premium-toggle').on('click',function(){
    if ($('.premium-slide-01').hasClass('on')){
        premiumSlide1.slideTo(0)
    } else{
        premiumSlide1.slideTo(3)
    }
})

let premiumSlide2 = new Swiper('.premium-slide-02',{
    speed : 700,
    centeredSlides : true,
    slidesPerView : 3,
    mousewheel : true,
    observer: true,
    observeParents: true,
    on : {
        slideChange : function(){
            let realIndex = this.realIndex + 1;
            let totalIndex = this.slides.length;
            
            $('.premium-02-progress > span').css('height',
                (100 / totalIndex * realIndex) + '%')
            
            setTimeout(function(){
                if(realIndex === totalIndex){
                    $('.premium2-last-slide').addClass('on')
                } else{
                    $('.premium2-last-slide').removeClass('on')
                }
        
                if(realIndex === 1){
                    $('.premium2-first-slide').addClass('on')
                } else{
                    $('.premium2-first-slide').removeClass('on')
                }
            }, 600)
        },
        touchStart : function(){
			startY = event.touches[0].clientY;
		},
        touchMove : function(){
			var currentIndex = this.realIndex + 1;
			var totalSlides = this.slides.length;

			var currentY = event.touches[0].clientY;
			var deltaY = startY - currentY;

			if ((deltaY > 0) && (currentIndex === totalSlides)) {
				// console.log('하단으로 스와이프');
				$.fn.fullpage.moveTo(3);
			} 
			if((deltaY < 0) && (currentIndex === 1)) {
				// console.log('첫번째에서 상단으로 스와이프');
				$.fn.fullpage.moveTo(1);
			}
		},
    },
    breakpoints : {
        991 : {
            slidesPerView : 1,
            direction : 'vertical',
        },
    }
})

$(window).on('wheel',function(){
    if($('.premium2-last-slide').hasClass('on') && isScrollingDown){
        $.fn.fullpage.moveTo(3);
    } 
    if($('.premium2-first-slide').hasClass('on') && !isScrollingDown){
        $.fn.fullpage.moveTo(1);
    }
})
$(window).on('wheel',function(){
    if($('.premium1-last-slide').hasClass('on') && isScrollingDown){
        $.fn.fullpage.moveTo(3);
    } 
    if($('.premium1-first-slide').hasClass('on') && !isScrollingDown){
        $.fn.fullpage.moveTo(1);
    }
})



//버튼 자석
/*$(document).on('mousemove', function(event) {

    if($(document).width() > 991){
        const offset = 150; // 버튼이 커서와의 거리
        const mouseX = event.pageX, mouseY = event.pageY;
    
        $('.button').each(function() {
            const button = $(this), 
                { left, top } = button.offset(), 
                width = button.outerWidth(), 
                height = button.outerHeight();
    
            const distanceX = Math.abs(mouseX - (left + width / 2));
            const distanceY = Math.abs(mouseY - (top + height / 2));
    
            const moveX = (distanceX < offset && distanceY < offset) ? (mouseX - (left + width / 2)) / 5 : 0;
            const moveY = (distanceX < offset && distanceY < offset) ? (mouseY - (top + height / 2)) / 5 : 0;
    
            button.css('transform', `translate(${moveX}px, ${moveY}px)`);
        });

    }
    
});*/