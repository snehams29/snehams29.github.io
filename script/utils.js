function about(){
    alert("hello");
}
function openNav() {
    if(document.getElementById("sidenav").style.width=="300px"){
        document.getElementById("sidenav").style.width="50px";
    }else{
        document.getElementById("sidenav").style.width="300px";
    }
  }

  function exp(){
      document.getElementById("tech").style.display="none";
      document.getElementById("exp").style.display="block";
  }

  function tech(){
    if(document.getElementById("tech").style.display=="none"){
        document.getElementById("exp").style.display="none";
        document.getElementById("tech").style.display="initial";
    }else{
        document.getElementById("tech").style.display="none";
      document.getElementById("exp").style.display="initial";
    }
    
  }
  var timeout;
  function myFunction(val) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    x.innerHTML=val;
    
    if(timeout){
        clearTimeout(timeout);
    }
    // After 3 seconds, remove the show class from DIV
    timeout=setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }