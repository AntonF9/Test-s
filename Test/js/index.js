window.onload = function(){
window.button=0;
Get= parseGetParams();
if(Get.roller){
	buttonClick(Get.button);
	document.getElementById("roller-white").style.marginLeft=Get.roller+"px";
	getNumber();
	document.getElementById("day").onclick="";
	document.getElementById("week").onclick="";
	document.getElementById("mounth").onclick="";
	if(Get.param=="1"){
	document.getElementById("a").href="slide2.html";}else if(Get.param=="2"){
		document.getElementById("a").href="index.html";}else{}
	

}else{
	document.getElementById("roller-white").onmouseover=function(){ 
		document.getElementById("roller-white").onmousemove=mouseMove;
		document.getElementById("roller-white").ondragstart=function(){return false;}
		document.getElementById("roller-white").onselectstart=function(){return false;}
	}
	document.getElementById("roller-white").onmouseout=function(){
		document.getElementById("roller-white").onmousemove="";
	}
	document.getElementById("pill").onmousedown=function(){
		document.getElementById("pill").onmouseover=function(){document.getElementById("pill").onmousemove=pillMove;}
		document.getElementById("pill").ondragstart=function(){return false;}
		document.getElementById("pill").onselectstart=function(){return false;}
		}
	document.getElementById("pill").onmouseup=function(){
		document.getElementById("pill").onmouseup=function(){document.getElementById("pill").onmousemove="";}
	}
}	
}

function buttonClick(Button){

	if(Button=="1"){document.getElementById("day").src="../Test/images/day-pushed-button.png"
					document.getElementById("week").src="../Test/images/week-button.png"
					document.getElementById("mounth").src="../Test/images/mounth-button.png"
					button=1;
					}
	if(Button=="2"){document.getElementById("week").src="../Test/images/week-pushed-button.png"
					document.getElementById("day").src="../Test/images/day-button.png"
					document.getElementById("mounth").src="../Test/images/mounth-button.png"
					button=2;
					}
	if(Button=="3"){document.getElementById("mounth").src="../Test/images/mounth-pushed-button.png"
					document.getElementById("day").src="../Test/images/day-button.png"
					document.getElementById("week").src="../Test/images/week-button.png"
					button=3;
					}
}


function fixEvent(e) {
	e = e || window.event;
	if ( e.pageX == null && e.clientX != null ) {
		var html = document.documentElement;
		var body = document.body;
		e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
		e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
	}
	if (!e.which && e.button) {
		e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) );
	}
	return e;
}

function mouseMove(event){ 
	event = fixEvent(event)
	document.getElementById("roller-white").style.marginLeft=(event.pageX-50)+"px";
	if(parseInt(document.getElementById("roller-white").style.marginLeft)<=100){
		document.getElementById("roller-white").style.marginLeft=100+"px";
	}else if(parseInt(document.getElementById("roller-white").style.marginLeft)>=850){
		document.getElementById("roller-white").style.marginLeft=850+"px";
	}
	
	getNumber();
}

function pillMove(event){
	event=fixEvent(event);
	document.getElementById("pill").style.left=(event.pageX)-50+"px";
	document.getElementById("pill").style.top=(event.pageY)-25+"px";
	if(parseInt(document.getElementById("pill").style.top)<=237 && parseInt(document.getElementById("pill").style.top)>=98 && parseInt(document.getElementById("pill").style.left)<=469 && parseInt(document.getElementById("pill").style.left)>=397){
		document.getElementById("face").src='../Test/images/happy.png';
		document.getElementById("face").style.left=0+'px';
		document.getElementById("pill").style.display="none";
	}


}

function getNumber(){
	obj = document.getElementById("roller-white");
	if(parseInt(obj.style.marginLeft)-100>=0 && parseInt(obj.style.marginLeft)-100<=30){
		document.getElementById("num"+1).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+1).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=30 && parseInt(obj.style.marginLeft)-100<=60){
		document.getElementById("num"+2).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+2).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=60 && parseInt(obj.style.marginLeft)-100<=90){
		document.getElementById("num"+3).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+3).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=90 && parseInt(obj.style.marginLeft)-100<=120){
		document.getElementById("num"+4).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+4).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=130 && parseInt(obj.style.marginLeft)-100<=160){
		document.getElementById("num"+5).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+5).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=170 && parseInt(obj.style.marginLeft)-100<=200){
		document.getElementById("num"+6).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+6).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=200 && parseInt(obj.style.marginLeft)-100<=240){
		document.getElementById("num"+7).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+7).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=240 && parseInt(obj.style.marginLeft)-100<=270){
		document.getElementById("num"+8).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+8).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=270 && parseInt(obj.style.marginLeft)-100<=320){
		document.getElementById("num"+9).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+9).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=320 && parseInt(obj.style.marginLeft)-100<=360){
		document.getElementById("num"+10).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+10).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=360 && parseInt(obj.style.marginLeft)-100<=390){
		document.getElementById("num"+11).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+11).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=390 && parseInt(obj.style.marginLeft)-100<=430){
		document.getElementById("num"+12).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+12).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=430 && parseInt(obj.style.marginLeft)-100<=470){
		document.getElementById("num"+13).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+13).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=470 && parseInt(obj.style.marginLeft)-100<=510){
		document.getElementById("num"+14).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+14).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=510 && parseInt(obj.style.marginLeft)-100<=550){
		document.getElementById("num"+15).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+15).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=550 && parseInt(obj.style.marginLeft)-100<=590){
		document.getElementById("num"+16).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+16).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=580 && parseInt(obj.style.marginLeft)-100<=620){
		document.getElementById("num"+17).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+17).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=620 && parseInt(obj.style.marginLeft)-100<=660){
		document.getElementById("num"+18).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+18).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=660 && parseInt(obj.style.marginLeft)-100<=690){
		document.getElementById("num"+19).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+19).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=690 && parseInt(obj.style.marginLeft)-100<=720){
		document.getElementById("num"+20).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+20).style.backgroundImage="";}
	if(parseInt(obj.style.marginLeft)-100>=720 && parseInt(obj.style.marginLeft)-100<=750){
		document.getElementById("num"+21).style.backgroundImage='url("../Test/images/roller red.png")';
	}else{ document.getElementById("num"+21).style.backgroundImage="";}
}

function goto(param){
	if(param=="1"){window.location.href ="index.html?roller="+parseInt(document.getElementById("roller-white").style.marginLeft)+"&button="+button+"&param="+param;}else if(param=="2"){
		window.location.href ="slide2.html?roller="+parseInt(document.getElementById("roller-white").style.marginLeft)+"&button="+button+"&param="+param;
	}
}
function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 

