
$(window).scroll(function(){
    $(".section:nth-child(1)").css("opacity", 1 - $(window).scrollTop() / 100);
  });






const section = document.getElementById('bottom');
const house  =  document.querySelector('#house');
const box5  =  document.querySelector('.box5');
    var houseRect =  house.getBoundingClientRect();

box5.style.display = "none";
const onScroll = () =>{
	console.log("scroll",$(window.document.body).scrollTop(),houseRect.top );
		 if($(window.document.body).scrollTop() > 2445 && $(window.document.body).scrollTop()<houseRect.top+300 ){
				box5.style.display = "block"
		}
		else if($(window.document.body).scrollTop()<houseRect.top ){
			box5.style.display = "none"
		}
	


}
if(section){
    var sectionRect =  section.getBoundingClientRect();
}
if(box5){
    var box5Rect = box5.getBoundingClientRect();

}
onScroll();

window.document.body.addEventListener('scroll',(e)=>{
	onScroll(e);
	
})




