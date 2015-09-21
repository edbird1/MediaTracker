
function showHide (name){
    obj = document.getElementById(name);
  alert(obj.style.visibility);
  obj.style.visibility = (obj.style.visibility == visible) ? "hidden" : "visible"; 
}
