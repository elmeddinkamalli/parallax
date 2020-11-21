$(document).ready(function(){
    // init
    initScrollEvent();

    function initScrollEvent(){
        var i = -10;
        var k = -10;
        var j = -40;
        var l = 150;
        var prevScroll = 0;
        $(window).scroll(function(){
            if($(window).scrollTop() > prevScroll){
                if($(window).scrollTop() < 300){
                    if($('.sun').position().top <= 120){
                        $('.sun').css('top', i+=8);
                    }
                    if($('.valley-1').position().top >= -20){
                        $('.valley-1').css('top', k-=2);   
                    }
                    if($('.filler').position().top >= -200){
                        $('.filler').css('top', j-=20);
                    }
                    if($('.valley-5').position().top >= -12){
                        $('.valley-5').css('top', l-=14);
                    }
                }
            }else if($(window).scrollTop() < prevScroll){
                if($(window).scrollTop() < 300){
                    if($('.sun').position().top >= -10){
                        $('.sun').css('top', i-=10);
                    }
                    if($('.valley-1').position().top <= -10){
                        $('.valley-1').css('top', k+=2);   
                    }
                    if($('.filler').position().top <= -10){
                        $('.filler').css('top', j+=20);
                    }
                    if($('.valley-5').position().top <= 150){
                        $('.valley-5').css('top', l+=14);
                    }
                }
            }
            prevScroll = $(window).scrollTop();
        })
    }
})