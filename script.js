let button = document.querySelector('.toggle');
let tbtn = document.querySelector('.toggle_btn');
let background = document.querySelector('body');
let heading = document.querySelector('.heading');

 button.addEventListener('click',function(){
    if( tbtn.style.left === "4px"){
    background.style.backgroundColor = "black";
    heading.style.color = "white";
    tbtn.style.left = "60px";
    }
    else{
        background.style.backgroundColor = "white";
        heading.style.color = "black";
        tbtn.style.left = "4px"
        }
    
});