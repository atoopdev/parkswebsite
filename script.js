const toggle = document.querySelector(".toggle")
const menu = document.querySelector(".menu")
// returns node list instead of single element
const items = document.querySelectorAll(".menu-item")

// toggle mobile menu

function toggleMenu(){
    if(menu.classList.contains("active")){
        console.log("menu is active")
        menu.classList.remove("active")
        console.log("removing active. Menu not active.")
        // add menu icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
        console.log("adding menu icon")
    }else{
        menu.classList.add("active")
        console.log("making menu active")
        // add x icon
        toggle.querySelector("a").innerHTML="<i class='fas fa-times'><i>"
        console.log("adding x icon")
    }
}

// activate submenu
// if user clicks a menu item - add submenu-active class

function toggleItem(){
    if(this.classList.contains("submenu-active")){
        console.log("submenu active")
        this.classList.remove("submenu-active")
        console.log("remove active state from submenu")
    }else if (menu.querySelector(".submenu-active")){
        // remove .submenu-active class from every other menu item. Prevents multiple submenus from opening
        menu.querySelector(".submenu-active").classList.remove("submenu-active")
        this.classList.add("submenu-active")
    }else{
        this.classList.add("submenu-active")
    } 
}

// event listener
toggle.addEventListener("click", toggleMenu, false)

for (let item of items){
    if(item.querySelector(".submenu")){
        item.addEventListener("click",toggleItem, false)
        item.addEventListener("keypress", toggleItem, false)
    }
}