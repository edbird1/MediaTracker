
function showHide (name){
    obj = document.getElementById(name);
  
  if (obj.style.visibility == visible){
      alert(obj.style.visibility+1);
      obj.style.visibility = "hidden";
  }
  else {
      alert(obj.style.visibility+2);
      obj.style.visibility = "visible"; 
  }
}
