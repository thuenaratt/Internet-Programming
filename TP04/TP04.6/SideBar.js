document.querySelector(".menu_icon").addEventListener("click",()=>{
    document.querySelector(".navigation").classList.contains("shrink")?document.querySelector(".navigation").classList.remove("shrink"):document.querySelector(".navigation").classList.add("shrink")
})
document.querySelector("#close").addEventListener("click",()=>{
    if(!document.querySelector(".navigation").classList.contains("shrink")) document.querySelector(".navigation").classList.add("shrink")
})