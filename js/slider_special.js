let imgNum2 = 0;
let timer2 = setInterval( ShowHide2, 3000);

function ShowHide2(){
    let showValue2 = imgNum2+1;
    if(showValue2>3) showValue2 = 0;
    $('.special .img div').hide();
    $('.special .img div').eq(showValue2).show();
    $('.box2 li').removeClass('active');
    $('.box2 li').eq(showValue2).addClass('active');
    imgNum2 = showValue2;
}

$('.box2 li').click(function(){
    clearInterval(timer2);
    let showValue2 = $(this).index();
    imgNum2 = showValue2-1;
    ShowHide2();
    timer2 = setInterval( ShowHide2, 4000);
})