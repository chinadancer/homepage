//march 06 script// 


//arrays are a way of taking a list
var myArray = ["I like a smuggler","I can believe anything", "And faith unfaithful",
                "Modern dancing","A business that makes nothing","I am a deeply",
                "We're busy","No one goes to that restaurant anymore","A joke is an",
                "I like humanity","I generally advise persons never"];
var myOtherArray = ["He is the only honest thief","provided that it is quite incredible","kept him falsely true",
                    "is so old fashioned","but money is a poor business","superficial person",
                    "doing nothing","It's always too crowded","extremely serious issue",
                    "but I loathe persons","ever to present assistance"];
var z = 0;
var myContainer = document.getElementById("container");


var counter = 0;

for(var i = 0; i <myArray.length; i++){
    var myListItem = document.createElement("li");
    myListItem.innerHTML = myArray[i] + "___" + myOtherArray[i];
    myContainer.appendChild(myListItem);

}


