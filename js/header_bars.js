
$(window).resize(function(){
    let menu = $(this).width();
    if (menu > 700){
        $('.lnb').show();
    }else if (menu <= 700){
        $('.lnb').hide();
    }
})
$('.bars').click(function(){
    $('.lnb').slideToggle();
})