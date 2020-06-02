$(window).scroll(function(){
    $(".section:nth-child(1)").css("opacity", 1 - $(window).scrollTop() / 100);
  });
/*
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
debugger 
$('.section:nth-child(1)').css('background','#11337B');
} else {
$('.section:nth-child(1)').css('background', "");
}
});*/





const section = document.getElementById('bird');
const box5  =  document.querySelector('.box5');
if(section){
    var sectionRect =  section.getBoundingClientRect();
}
if(box5){
    var box5Rect = box5.getBoundingClientRect();
}


$(window).scroll(function() {
    if(sectionRect && box5Rect){
       if ($(this).scrollTop() > sectionRect.bottom + -800) {
        box5.style.display = "block";
} else {
box5.style.display = "none";
} 
    }

});

/*$(document).ready(function(){
    $('html').scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".section:nth-child(1)").css({"opacity" : "0.3"})
            var box5 = document.querySelector('.box5');
            if(box5){
            	box5.style.display = "none";
            }
            if ($(this).scrollTop() > 4000) {
   			if(box5){
            	box5.style.display = "";
            }
            }
        }
        else {
            $(".section:nth-child(1)").css({"opacity" : "1"})
        }
    })
})*/