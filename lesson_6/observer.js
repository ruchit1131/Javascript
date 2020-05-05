var subject = {
    observers: [],

    registerObserver: function(observer) {
        this.observers.push(observer);
    },

    unregisterObserver: function(observer) {
        //  you can do this!
    },

    notifyObservers: function() {
        for(var i = 0; i < this.observers.length; i++) {
            this.observers[i].notify();
        }
    }

};


document.getElementById("cb1").addEventListener("change", onCheckboxChanged);
document.getElementById("cb2").addEventListener("change", onCheckboxChanged);
document.getElementById("cb3").addEventListener("change", onCheckboxChanged);


function onCheckboxChanged(event) {
    if(document.getElementById("cb1").checked && 
        document.getElementById("cb2").checked &&
        document.getElementById("cb3").checked) {
        subject.notifyObservers();
    }
}

var observer1 = {
    notify: function() {
        var form = document.getElementById("form");
        document.body.removeChild(form);
    }
};

subject.registerObserver(observer1);

var observer2 = {
    notify: function() {
        var h2 = document.createElement("h2");
        h2.textContent = "COMPLETE!";
        document.body.appendChild(h2);
    }
};

subject.registerObserver(observer2);

subject.registerObserver({
    notify: function() {
        alert("You are done!");
    }
});