$(document).ready(function(){
    const primaryColor='#2D3192';
    const secondaryColor='#FF931E';
    const mapColor='#E5E9F4';
    const header=$('.header-part');
    const hamburgerButton=$('.hamburger');
    hamburgerButton.click(function(){
        hamburgerButton.toggleClass('header__hamburger--active');
        $('.after-click').toggleClass('d-block');
        $('.header-part__container').toggleClass('container');
        $('.header-part__container').toggleClass('w-100');
        if(window.scrollY<=100 && hamburgerButton.hasClass('header__hamburger--active')==true){
            header.css('background-color',primaryColor);
            header.css('transition','0s');
        }else{
            header.css('background-color','transparent');
            header.css('transition','.5s');
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
    $(document).scroll(function(){
        if(hamburgerButton.hasClass('header__hamburger--active')==false){
            if(window.scrollY>=100){
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
            if(window.scrollY>=700 && window.scrollY<2030){
                $('.nav-link-1').css('color','#FF931E');
            }
            else if(window.scrollY>=2030 && window.scrollY<6200){
                $('.nav-link-2').css('color','#FF931E');
            }else if(window.scrollY>=6200 && window.scrollY<6800){
                $('.nav-link-3').css('color','#FF931E');
            }else if(window.scrollY>=6800 && window.scrollY<7380){
                $('.nav-link-4').css('color','#FF931E');
            }else if(window.scrollY>=7380){
                $('.nav-link-5').css('color','#FF931E');
            }
            
        }
    })
    // dinamically increases the count it works after refresh
    $('.counter').each(function() {
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
    $('.logo').click(function(){
        window.location.reload();
        window.scrollTo(0,0);
    })
})