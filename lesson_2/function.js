function sayHello(name, alert_)
{
    console.log(typeof(alert_));
    if(alert_)
        alert("ALERT!!!");
    else
    console.log("Hello" + name);
}

//sayHello("Babe", Math.random());

function randint()
{
 var rand = 100 * Math.random();
 return Math.round(rand);
}
console.log(randint());