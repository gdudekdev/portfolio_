const btn = document.querySelector(".menu-hamburger");
const img=document.getElementById("btn-hamburger")
btn.addEventListener("click", () => {
    if(img.classList==="icon-hamburger"){
    img.classList.remove("icon-hamburger");
    img.classList.add("icon-close");
    }else{
        img.classList.remove("icon-close");
        img.classList.add("icon-hamburger");
    }

});
