$(document).ready(function(){
    $(window).scroll(function(){
        let windowWidth= $(window).width();

        if(windowWidth > 1075){
            let scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,'+ scroll/5 +'%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -'+ scroll/3 +'%)'
            });
        }
    })

    $(window).resize(function(){
        let windowWidth= $(window).width();
        if(windowWidth<1075){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });

            $('header .textos').css({
                'transform': 'translate(0px, 0px)'
            });

        }
    })
})