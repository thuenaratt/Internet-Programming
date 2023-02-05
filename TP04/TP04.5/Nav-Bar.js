const menu=document.querySelector(".icon")
menu.addEventListener("click",()=>{
    document.querySelector(".menu_i").classList.toggle("open");
    document.querySelector(".drop").classList.toggle("close")
})