
function showHide (name){
    obj = document.getElementById(name);
    alert("Suck It!!!");
    if (obj.style.visibility == "visible") {
        obj.style.visibility =  "hidden";
    } else {
        obj.style.visibility =  "visible"
    }
}
