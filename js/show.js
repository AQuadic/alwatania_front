const card =document.getElementById("flexRadioDefault2");
const info_card =document.getElementById("pay-info");

window.onchange=()=>{

if(card.checked){
    info_card.style.display="block"
}
else {
    info_card.style.display="none"
}
}