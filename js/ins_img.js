$(window).resize(function(){
    let list = $(this).width();
    if (list > 700) {
        $('.contentsBox .insBox').show();
    } else if (list <= 700){
        $('.contentsBox .insBox').hide();
    }
})
// $('.listBox>h1').click(function(){
//         $('.contentsBox .insBox').slideToggle();
//     })
$('.blank>.btn').click(function(){
        $('.contentsBox .insBox').slideToggle();
    })