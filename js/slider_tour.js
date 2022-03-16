let imgNum = 0;
let timer = setInterval( ShowHide, 3000);

function ShowHide(){
    let showValue = imgNum+1;
    if( showValue>3) showValue = 0;
    $('.tour .img div').hide();
    $('.tour .img div').eq(showValue).show();
    $('.box1 li').removeClass('active');
    $('.box1 li').eq(showValue).addClass('active');
    imgNum = showValue;
}

$('.box1 li').click(function(){
    // 클릭하면 타이머를 꺼줘야함.
    clearInterval( timer );
    // console.log('click');
    let showValue = $(this).index();
    
    imgNum = showValue-1;
    ShowHide();
    timer = setInterval( ShowHide, 3000);

})


// let num = 0;
// let indecator = setInterval(function(){
//     num++;
//     $('.box1 li').removeClass('active');
//     $('.box1 li').eq(num%4).addClass('active');
// },3000);

// let imgNum = 0;
// let timer = setInterval(function(){
//     let showValue = (imgNum+1)%4;
//     ShowHide(showValue);
// },3000);
// function ShowHide(showValue){
//     $('.slider .left div').hide();
//     $('.slider .left div').eq(showValue).show();
//     $('.box1 li').removeClass('active');
//     $('.box1 li').eq(showValue).addClass('active');
//     imgNum = showValue;
// }

// $('.box1 li').click(function(){
//     clearInterval( timer );
//     let showValue = $(this).index();
//     ShowHide(showValue);
//     $('.box1 li').removeClass('active');
//     $(this).addClass('active');
//     timer = setInterval(function(){
//         let showValue = (imgNum+1)%4;
//         ShowHide(showValue);
//     },3000);

// })