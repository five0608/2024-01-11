$(function(){
    var QsignSlider=0;
    setInterval(function(){
        if(QsignSlider<2){
            QsignSlider++;
        }else{
            QsignSlider=0;
        }
        $(".slide").eq(QsignSlider).siblings().fadeOut();
        $(".slide").eq(QsignSlider).fadeIn();
    },3000);
})