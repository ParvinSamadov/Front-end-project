$(document).ready(function(){
    const header=$('.header-part.position-fixed.w-100.d-flex.align-items-center');
    const scrollerButton=$('.scroll-button__container.text-light.d-flex');
    $(document).scroll(function(){
        if(window.scrollY>=200){
            header.css('backgroundColor','white');
            header.css('height',`80px`);
            header.addClass('add-box-shadow');
            $('.logo__first.w-50.h-100.position-absolute').css('opacity',`0`);
            $('.logo__second.w-50.h-100.position-absolute').css('opacity',`1`);
            $('.nav-link').css('color','black');
        }else{
            header.css('backgroundColor','rgba(0,0,0,0)');
            header.css('height',`120px`);
            header.removeClass('add-box-shadow');
            $('.logo__first.w-50.h-100.position-absolute').css('opacity',`1`);
            $('.logo__second.w-50.h-100.position-absolute').css('opacity',`0`);
            $('.nav-link').css('color','#eee');
        }
        if(window.scrollY>=700){
            $('.nav-link.nav-link-1').css('color','#FF931E');
        }
    })
    scrollerButton.click(function(){
        window.scrollY=`800px`;
    })
})