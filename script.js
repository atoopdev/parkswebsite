

function renderPage(){
    document.getElementById("nav-bar").innerHTML = `
    <ul class="menu">
        <li class="name-logo"><a href="index.html">Keir Bryerton for Parks</a></li>
        <li class="menu-item"><a href="about.html">About Keir</a>
          <!-- <ul class="submenu">
            <li class="subitem"><a href="#">About Keir</a></li> -->
            <!-- <li class="subitem"><a href="#">Contact Us</a></li> -->
          <!-- </ul> -->
        </li>
        <li class="menu-item has-submenu"><a tabindex="0">Issues</a>
          <ul class="submenu">
            <li class="subitem"><a href="financial.html">Financial Management</a></li>
            <li class="subitem"><a href="community.html">Community Involvement</a></li>
           
            <!-- <li class="subitem"><a href="inclusivity.html">Inclusivity</a></li> -->
            <li class="subitem"><a href="environment.html">Land Use & Environmental Impact</a></li>
          </ul>
        </li>
        <li class="menu-item has-submenu"><a href="#">Barret Park RC Field</a>
          <ul class="submenu">
            <li class="subitem"><a href="history.html">History</a></li>
            <li class="subitem"><a href="myexperience.html">My Experience</a></li>
            <li class="subitem"><a href="safety.html">Neighborhood Safety & Privacy</a></li>
            <li class="subitem"><a href="newsarticles.html">News Articles</a></li>
            <li class="subitem"><a href="letters.html">Letters</a></li>
          </ul>
        </li>
        <li class="menu-item"><a href="updates.html">Get Updates</a>
         
        </li>
        <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
      </ul>
      <!-- end nav-links-->
    `
    document.getElementById("footer").innerHTML = `
    <div class = "content_wrapper">
    <h2 id="contact">Let's Keep in Touch!</h2>

    <!-- Social media and contact links. Add or remove any networks. -->
    <ul class="contact-list">
      <li><a href="https://www.keirforparks.com">www.keirforparks.com</a></li>
      
      <li class="footer-link"><a href="privacy.html">Privacy Policy</a></li>
    </ul>
    </div>
    `
}

// taken from footer above
/* <li class="icon-link"><a class="footer-link" href="#" target="_blank"><img class="icon" src=images/twitter.svg></a></li>
      <li class="footer-link"><a href="#"><img class="icon" src=images/square-facebook.svg></a></li> */

renderPage()


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

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
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

/* Event listener */
document.addEventListener("click", closeSubmenu, false);

