
function showHide (name){
    obj = document.getElementById(name);
  
  if (obj.style.visibility == visible){
      alert(obj.style.visibility+ " if");
      obj.style.visibility = "hidden";
  }
  else {
      alert(obj.style.visibility+ " else");
      obj.style.visibility = "visible"; 
  }
}
