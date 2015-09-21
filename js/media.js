
function showHide (name){
    obj = document.getElementById(name);

  if (obj.style.visibility == visible){
        alert("hidden");
      obj.style.visibility = "hidden";
  }
  else {
        alert("suck it");
      obj.style.visibility = "visible"; 
  }
}
