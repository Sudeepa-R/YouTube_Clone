var menuicon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var conatinaer=document.querySelector(".container");

menuicon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    conatinaer.classList.toggle("large-container")
}
