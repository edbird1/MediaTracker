
function showHide (name){
    obj = document.getElementById(name);
  
  if (obj.style.visibility == visible){
      alert(obj.style.visibility);
      obj.style.visibility = "hidden";
  }
  else {
      alert(obj.style.visibility);
      obj.style.visibility = "visible"; 
  }
}
