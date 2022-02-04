
var quizlist = [];

function mekequiz(num, qtext, alta, altb, altc, altd, awn) {

    quizlist.push(document.getElementById(qtext).value, document.getElementById(alta).value, document.getElementById(altb).value, document.getElementById(altc).value, document.getElementById(altd).value, document.getElementById(awn).value);

    console.log(quizlist[0] + num)

    sessionStorage.setItem("title", document.getElementById("title").value)
    
    for (var r = num; r < (num + 7); r++) {
        sessionStorage.setItem("quizlist" + r, quizlist[r])
        console.log(sessionStorage.getItem("quizlist" + r))
    }

    window.location.href = "./test.html"

}

function next() {
    window.location.href = "./test.html"
}

function addquiz() {
    document.getElementById("title").innerHTML = sessionStorage.getItem("title");
    for(var e = 0; e < 10; e++) {
    document.getElementById("in" + e).innerHTML = sessionStorage.getItem("quizlist" + e);
    }
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