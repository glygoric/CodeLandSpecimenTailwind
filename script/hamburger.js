/*document.getElementById("menu-activator").onclick=()=>{
    document.getElementById("hamburger").style.left="0";
    document.getElementById("hamburger").style.width="384px";
}
document.getElementById("menu-delete").onclick=()=>{
    document.getElementById("hamburger").style.left="-100px";
    document.getElementById("hamburger").style.width="0px";
}
window.onscroll=()=>{
    document.getElementById("hamburger").style.left="-100px";
    document.getElementById("hamburger").style.width="0px";
    document.getElementById("nav-id").style.backgroundColor = window.scrollY > 0 ? "rgba(57, 16, 242, 0.2)" : "transparent";
}*/
document.getElementById("menu-activator").onclick = () => {    
    document.getElementById("hamburger").style.left = "0";    
    document.getElementById("hamburger").style.width = "384px"; 
};

document.getElementById("menu-delete").onclick = () => {    
    document.getElementById("hamburger").style.left = "-100px";    
    document.getElementById("hamburger").style.width = "0px"; 
};

window.onscroll = () => {    
    document.getElementById("hamburger").style.left = "-100px";    
    document.getElementById("hamburger").style.width = "0px";
    if (window.scrollY > 0) {
        document.getElementById("nav-id").style.backgroundColor = "rgba(57, 16, 242, 0.2)";
    }
    else{
        document.getElementById("nav-id").style.backgroundColor = "transparent";
    }
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.getElementById("nav-id").style.backgroundColor = "rgba(57, 16, 242, 0.2)";
    }
};
