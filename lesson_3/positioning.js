var ele = document.getElementById("block");
ele.style.backgroundColor = "blue";
ele.style.width = "4em";
ele.style.height = "4em";
ele.style.position = "absolute";
document.addEventListener("click", function(event){
    if(ele.style.backgroundColor == "blue")
    {
        ele.style.backgroundColor = "red";
    }
    else ele.style.backgroundColor = "blue";
    ele.style.left = (event.clientX - ele.offsetWidth/2)  +"px";
    ele.style.top = (event.clientY - ele.offsetHeight/2) +"px";
})