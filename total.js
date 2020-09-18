dragElement(document.getElementById("piece1"));
dragElement(document.getElementById("piece2"));
dragElement(document.getElementById("piece3"));
dragElement(document.getElementById("piece4"));
dragElement(document.getElementById("piece5"));
dragElement(document.getElementById("piece6"));
dragElement(document.getElementById("piece7"));
dragElement(document.getElementById("piece8"));
dragElement(document.getElementById("piece9"));
dragElement(document.getElementById("piece10"));
dragElement(document.getElementById("piece11"));
dragElement(document.getElementById("piece12"));
dragElement(document.getElementById("piece13"));
dragElement(document.getElementById("piece14"));
dragElement(document.getElementById("piece15"));
dragElement(document.getElementById("piece16"));
dragElement(document.getElementById("piece17"));
dragElement(document.getElementById("piece18"));
dragElement(document.getElementById("piece19"));
dragElement(document.getElementById("piece20"));
dragElement(document.getElementById("piece21"));
dragElement(document.getElementById("piece22"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    console.log(elmnt);
    
    if(elmnt == null){
      return
    }
  
  
    if (document.getElementById(elmnt.id)) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV: 
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }