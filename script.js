const navBtn= document.getElementById("nav-btn");
const cancelBtn= document.getElementById("cancel-btn");
const show= document.getElementById("sidenav");
const signUp=document.getElementsByClassName("btn sign-up");
const logIn=document.getElementsByClassName("btn log-in");

navBtn.addEventListener("click",function(){
    sidenav.classList.add("show");
})

cancelBtn.addEventListener("click",function(){
    sidenav.classList.remove("show");
})

let spanTexts=document.getElementsByClassName("text");
window.onload=function(){
    for(spanText of spanTexts){
        spanText.classList.add("active");
    }
}