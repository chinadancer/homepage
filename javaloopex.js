var myButton = document.getElementById("imageButton");
var myImageContainer = document.getElementById("imageContainer");

var addImage = function(){

    var myImage = document.createElement("img");
    myImage.src = "dogs 2.gif";
    myImageContainer.appendChild(myImage);

    //myButton.style.marginLeft = 300 + "px";

}

myButton.onclick = addImage;