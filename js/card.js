const cash =document.getElementsByClassName("cash");
const cardinfo =document.getElementsByClassName("pay-info1");




window.onchange=function(){
    if(cash[0].checked){
        cardinfo[0].style.display="none";
       
       }
       else{
           cardinfo[0].style.display="block";
       }
};





const addtv=document.getElementById("tv-add");
const deltv=document.getElementById("tv-del");
const numtv=document.getElementById("num-tv");

addtv.onclick=function(){
    numtv.innerHTML=+numtv.innerHTML+1
}
deltv.onclick=function(){
    if(+numtv.innerHTML>0){
        numtv.innerHTML=+numtv.innerHTML-1
    }
  
   
}
