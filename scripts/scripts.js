function apparitionMenuBurger() {
  if (window.matchMedia("(max-width : 900px)").matches) {
    let navbar = document.querySelector(".navbar .container");
    let menu = document.createElement("button");
    let image = document.createElement("img")
    image.src="menu_hammburger.png"
    image.alt="menu hamburger"
    image.width =100;
    image.height=100;
    navbar.appendChild(menu);
  }else{
    let navbar = document.querySelector(".navbar .container");
    navbar.removeChild("button")
  }
}
apparitionMenuBurger();
