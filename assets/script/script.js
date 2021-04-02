$(document).ready(function(){
    const primaryColor='#2D3192';
    const secondaryColor='#FF931E';
    const mapColor='#E5E9F4';
    const header=$('.header-part');
    const hamburgerButton=$('.hamburger');
    hamburgerButton.click(function(){
        if(hamburgerButton.hasClass('header__hamburger--active')==false){
            hamburgerButton.toggleClass('header__hamburger--active');
            $('.after-click').toggleClass('d-block');
            if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--active')==true){
                header.css('background-color',primaryColor);
                header.css('transition','0s');
            }else if(window.scrollY>=100){
                header.css('background-color','white');
                header.css('transition','.5s');
            }else if(hamburgerButton.hasClass('header__hamburger--active')==false){
                header.css('background-color','rgba(0,0,0,0)');
                header.css('transition','.5s');
                }
        }else{
            hamburgerButton.toggleClass('header__hamburger--close');
            $('.after-click').toggleClass('d-block');
            if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--close')==true){
                header.css('background-color','rgba(0,0,0,0)');
                header.css('transition','0s');
            }else if(window.scrollY>=100){
                header.css('background-color','white');
                header.css('transition','.5s');
            }else if(hamburgerButton.hasClass('header__hamburger--close')==false){
                header.css('background-color',primaryColor);
                header.css('transition','.5s');
            }
        }
    })
    //#region map circle mouseenter mosueleave events
    $('[data-toggle=tooltip]').tooltip();
    document.querySelectorAll('.countries-circle').forEach(circle=>{
        circle.addEventListener('mouseenter',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=primaryColor;
        })
    })
    document.querySelectorAll('.countries-circle').forEach(circle=>{
        circle.addEventListener('mouseleave',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=mapColor;
        })
    })
    document.querySelectorAll('.countries-circle-orange').forEach(circle=>{
        circle.addEventListener('mouseenter',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=secondaryColor;
        })
    })
    document.querySelectorAll('.countries-circle-orange').forEach(circle=>{
        circle.addEventListener('mouseleave',function(){
            document.querySelector(circle.getAttribute('data-id')).style.fill=mapColor;
        })
    })
    //#endregion
    $(window).scroll(function(){
        if(hamburgerButton.hasClass('header__hamburger--active')==false){
            if($(window).scrollTop()>=100){
                header.css('backgroundColor','white');
                header.css('height',`80px`);
                header.addClass('add-box-shadow');
                hamburgerButton.removeClass('header__hamburger');
                hamburgerButton.addClass('header__hamburger--scroll');
                $('.logo__first').css('opacity',`0`);
                $('.logo__second').css('opacity',`1`);
                $('.nav-link').css('color','black');
            }else{
                header.css('backgroundColor','rgba(0,0,0,0)');
                header.css('height',`120px`);
                header.removeClass('add-box-shadow');
                hamburgerButton.addClass('header__hamburger');
                hamburgerButton.removeClass('header__hamburger--scroll');
                $('.logo__first').css('opacity',`1`);
                $('.logo__second').css('opacity',`0`);
                $('.nav-link').css('color','#eee');
            }
            switch (true) {
                case window.scrollY>=$('#what-we-do').offset().top && window.scrollY<$('#who-we-are').offset().top:
                    $('.nav-link-1').css('color','#FF931E');
                    break;
                case window.scrollY>=$('#who-we-are').offset().top && window.scrollY<$("#work-with-us").offset().top:
                    $('.nav-link-2').css('color','#FF931E');
                    break;
                case window.scrollY>=$("#work-with-us").offset().top && window.scrollY<$("#news").offset().top:
                    $('.nav-link-3').css('color','#FF931E');
                    break;
                case window.scrollY>=$("#news").offset().top && window.scrollY<$("#end-of-page").offset().top:
                    $('.nav-link-4').css('color','#FF931E');
                    break;
                case window.scrollY>=$("#end-of-page").offset().top:
                    $('.nav-link-5').css('color','#FF931E');
                    break;
                default:
                    break;
            }
            
        }
    })
    // dinamically increases the count it works after refresh
    $('.statistics').each(function() {
        let $this = $(this),
            countTo = $this.attr('data-count');
    
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 3000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum)+ $this.attr('data-text'));
            },
            complete: function() {
                $this.text(Math.floor(this.countNum)+ $this.attr('data-text'));
          }
        });
      });
    // let i = 0;
    // let interval1 =  setInterval(function(){
    //     if(i == $('.counter1').attr('data-count')){
    //         clearInterval(interval1);
    //     }
    //     $('.counter1').text(i++ +  $('.counter1').attr('data-text'));

    // },100)
    // let j=0;
    // let interval2 =  setInterval(function(){
    //     if(j == $('.counter2').attr('data-count')){
    //         clearInterval(interval2);
    //     }
    //     $('.counter2').text(j++ +  $('.counter2').attr('data-text'));

    // },100)
    //#region scroll buttons
    $('.nav-link-1').click(function(){
        window.scrollTo(0,700);
    })
    $('.scroll-button img').click(function(){
        window.scrollTo(0,700);
    })
    $('.scroll-button span').click(function(){
        window.scrollTo(0,700);
    })
    $('.nav-link-2').click(function(){
        window.scrollTo(0,2030);
    })
    $('.nav-link-3').click(function(){
        window.scrollTo(0,6200);
    })
    $('.nav-link-4').click(function(){
        window.scrollTo(0,6800);
    })
    $('.nav-link-5').click(function(){
        window.scrollTo(0,7380);
    })
    //#endregion
    document.querySelectorAll('.city-buttons button').forEach(function(value,index){
        value.addEventListener('click',function(){
            const activeButton=$('button.active-color');
            const activeInfo=$('div.d-block');
            activeButton.removeClass('active-color');
            value.classList.add('active-color');
            activeInfo.removeClass('d-block');
            activeInfo.addClass('d-none');
            document.querySelector('.info-according-city').children[index].classList.remove('d-none')
            document.querySelector('.info-according-city').children[index].classList.add('d-block')
        })
    })
    
    $('.info__head').hide();
    $('.info__head').slideDown(1000);
    $('.info__body').hide();
    $('.info__body').slideDown(1000);
    $('.what-we-do .container .row .col-12 .col-12').hide().slideDown();
    $('#right-side-id').hide().slideDown(1000);

})