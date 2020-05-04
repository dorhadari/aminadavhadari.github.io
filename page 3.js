//111111
$(document).ready(function(){
    $('body').scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".section:nth-child(1)").css({"opacity" : "0.3"})
        }
        else {
            $(".section:nth-child(1)").css({"opacity" : "1"})
        }
    })
})

