(function(){
	// btn id
	const buttonSelectorID = 'client-details-btn';
	const btn = document.getElementById(buttonSelectorID);
	if(btn){
		btn.addEventListener('click',Send);
	}

function Send(){

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

let isValid = true;

[name,email,phone,message].forEach(input=>{ //required
if(input){
	if(!input.value.trim()){
	isValid = false;
}
}
});

if(isValid){

const url = `https://panel.sendmsg.co.il/AddUserFromSite.aspx?email=${email.value}&cellphone=${phone.value}&1=${name.value}&93=${message.value}&form=221652__f10b7e77-b566-47cb-9b2d-1c06e349a09e`;
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(url,{
	mode: 'no-cors'
});
// disabled the send button
setMessage({msg:"Successfully sent",isShow:true,type:"success"});
name.value = "";
email.value = ""; 
phone.value = "";
message.value = "";
}else{
	// write error to the user//
	setMessage({msg:"Please fill in all the fields",isShow:true,type:"error"});
}
}

function setMessage(data){
	if(!data) data = {isShow:false,msg:" ",type:"success"}
	const msg = document.getElementById('client-details-error-msg');
	if(msg){
		msg.innerHTML = data.msg;
		msg.style.color = data.type === "success" ? "green":"red";
		msg.style.visibility = data.isShow ? "visible" : "hidden";
		msg.style.backgroundColor = data.type === "success" ? "#6cb9753d":"#faa6e23d";
	}
}
})();

