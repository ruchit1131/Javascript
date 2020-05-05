/*document.addEventListener("DOMContentLoaded", function(event){console.log("window " + window);
console.log("document " + document);
console.log("document.head  " + document.head);
console.log("window.document.body " + window.document.body);});

*/
//$(document).ready(function(){console.log("Ready!");});

document.addEventListener("DOMContentLoaded", function(event){
    var btn = document.getElementById("btn");//get element by  id just gets the first element with the id
    btn.addEventListener("click", function(event){
        alert("Button clicked");
    });
    var elems = document.getElementsByClassName("first_paragraph");
    elems[0].style.backgroundColor = "red";
    var tag_elem = document.getElementsByTagName("p");
    for(var i = 0; i < tag_elem.length; i++)
    {
        tag_elem[i].style.color = "yellow";
    }
    var u_l = document.getElementsByTagName("li");
    for(var i = 0; i < u_l.length; i+=2)
    {
        u_l[i].style.backgroundColor = "grey";
    }
    var q_s = document.querySelectorAll("span.exciting");
    q_s[0].style.backgroundColor = "blue";
});
