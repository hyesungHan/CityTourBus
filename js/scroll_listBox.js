
$('.listBox a').click(function(){
    let href = $(this).attr('href');
    console.log($(href).offset().top);
})

    //마우스 스크롤이 움직일 때 메뉴를 제어하기
$(window).scroll(function(){
    let stNum = $(this).scrollTop();
    let contentNum = 0;
    let divTop = 0;
    $('.contentsBox>.insBox').each(function(){
        divTop = $(this).offset().top;

        if( divTop <= stNum){

            contentNum = $(this).index();
            
            $('.listBox li a').removeClass('active');
            $('.listBox li').eq(contentNum).find('a').addClass('active');
            // console.log(contentNum);

        }
    })
})