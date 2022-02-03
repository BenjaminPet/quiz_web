function mekequiz() {
    
    window.location.href = "file:///C:/Users/benja/Documents/GitHub/quiz_web/" + "index.html"


    var tag = document.createElement("div");
    var text = document.createTextNode("<h2>question 1</h2> <p>hva bruker man python til</p> <button>Game developing</button><button>automasjon</button><button>endre utsene til websider</button>");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
}

function check(q, num) {
    var ele = document.getElementsByName(q);
      
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var qone = ele[i].value;
        }
    }

    if (qone === num) {
        console.log("question " + q + " is right")
        document.getElementById("q" + q).className = "col-12 bg-success border rounded"
    } else {
        document.getElementById("q" + q).className = "col-12 bg-danger border rounded"
    }
}

function restart(q) {
    console.log("restart");
    document.getElementById("q" + q).className = "col-12 bg-secondary border rounded";

}