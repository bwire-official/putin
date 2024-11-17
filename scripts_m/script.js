


let links = document.querySelectorAll(".menu-item > a");
console.log(links)
for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}


let buttons = document.getElementsByClassName("product-button");
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
    
}



function toggleMenu(hamburger) {
    // Toggle the "open" class on the hamburger
    hamburger.classList.toggle("open");
    const element = document.getElementById("d");
  
    // Check the current display value and toggle it
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block"; // Show the element
    } else {
      element.style.display = "none"; // Hide the element
    }
    // Toggle the "active" class on the menu
    const menu = document.querySelector(".menu");
    list-group.classList.toggle("active");
  }
  