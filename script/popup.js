document.getElementById("popup-delete").onclick=()=>{
    document.getElementById("popup-container").style.display="none";
    document.body.style.overflow="";
}
document.getElementById("popup-activator").onclick=()=>{
    document.getElementById("popup-container").style.display="flex";
    document.body.style.overflow="hidden";
}
