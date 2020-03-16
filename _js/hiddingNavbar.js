var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navegador").style.top = "0";
  } else if(currentScrollPos == 0){
    // safari browser fix
    document.getElementById("navegador").style.top = "0px";
  } else {
    document.getElementById("navegador").style.top = "-7.25em";
  }
  prevScrollpos = currentScrollPos;
}


