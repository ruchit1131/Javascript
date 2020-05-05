var btn = document.getElementById("calculate_btn"),
    r = document.getElementById("pace");

btn.addEventListener("click", function(event){
   var d = parseFloat(document.getElementById("distance").value),
    h = parseFloat(document.getElementById("hours").value),
    m = parseFloat(document.getElementById("minutes").value),
    s = parseFloat(document.getElementById("seconds").value),
    result = d/(h + m/60 + s/3600);
    r.innerHTML = "Your speed is " + result + "km/h";
})
