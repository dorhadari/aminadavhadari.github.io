$(window).scroll(function(){
    $(".section:nth-child(1)").css("opacity", 1 - $(window).scrollTop() / 100);
  });






const section = document.getElementById('bottom');
const box5  =  document.querySelector('.box5');
const onScroll = () =>{
        if(sectionRect && box5Rect){
       if ($(this).scrollTop() > sectionRect.bottom + -800) {
        box5.style.display = "block";
} else {
box5.style.display = "none";
} 
    }

}
if(section){
    var sectionRect =  section.getBoundingClientRect();
}
if(box5){
    var box5Rect = box5.getBoundingClientRect();

}
onScroll();


$(window).scroll(function() 
{
onScroll();
});

