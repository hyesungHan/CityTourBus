const topBox = $('.bigSliderBox')
const bigSlider = $('.bigSlider')
const bigSliderImages = $('.bigSlider>div')
//확인하기 console.log(bigSliderImages);

//이미지 너비 구하기
let count = 1;
const imgWidth = bigSliderImages[0].clientWidth;
//확인하기 console.log(imgWidth);

// resposive
$(window).on('resize', function(){
    let showWidth = $(this).width();
    if (showWidth > 1000) {
        location.reload();
    } else if (showWidth <= 1000 ) {
        location.reload();
    } else if (showWidth <=500) {
        location.reload();
    }

})


//bigSlider 첫번째이미지가 보이게 셋팅 'tranlateX(-1310px)'
bigSlider.css({ 'transform': `translateX(${-imgWidth*count}px)` });

//id='firstClone','lastClone' 재배치
bigSlider.on('transitionend',function(){
    //확인하기 console.log('transition end');
    if(bigSliderImages[count].id == 'lastClone'){
        count = bigSliderImages.length - 2;
        bigSlider.css({'transition':'none', 'transform':`translateX(${-imgWidth*count}px)`});
    }

    if(bigSliderImages[count].id == 'firstClone'){
        count = bigSliderImages.length - count;
        bigSlider.css({'transition':'none', 'transform':`translateX(${-imgWidth*count}px)`});
    }
})

//슬라이드 동작
let bigSliderTimer = setInterval(autoSlider, 3000);
function autoSlider(){
    if(count > bigSliderImages.length - 2) return;
    count++;
    //확인하기 console.log(count);
    bigSlider.css({'transition':'1s', 'transform':`translateX(${-imgWidth*count}px)`});
}