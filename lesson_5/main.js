$.get("http://www.omdbapi.com/?s=star%20wars&apikey=e1c59ba&r=XML", null, null, "text").done(function(data){

    var a = document.createElement("article");
        a.textContent = data;
        document.body.appendChild(a);
    
    }).fail(function(data){
    alert("Response failed");
})
