
function showHide (name){
    obj = document.getElementById(name);
  
  if (obj.style.visibility == visible){
      alert("hidden");
      obj.style.visibility = "hidden";
  }
  else {
      alert("visi");
      obj.style.visibility = "visible"; 
  }
}
