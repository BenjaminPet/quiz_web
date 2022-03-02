// gjør create.html variabler til session storage variabler
var quizlist = [];

function mekequiz(num, qtext, alta, altb, altc, altd, awn) {

    quizlist.push(qtext, alta, altb, altc, altd, awn);

    sessionStorage.setItem("title", document.getElementById("title").value)
    
    for (var r = 0; r < 6; r++) {
        rn = r + num;
        sessionStorage.setItem("quizlist" + rn, document.getElementById(quizlist[rn]).value)
        console.log(sessionStorage.getItem("quizlist" + rn ) + " " + num + " " + r);
    }
    console.log("------------------------")
}

// til siden med dine spørsmål 
function next() {
    window.location.href = "./test.html"
}

// til siden med dine svarene
function result() {
    window.location.href = "./result.html"
}


//add info to text.html
function addquiz() {
    console.log("nooooooooooooooooooo " + sessionStorage.getItem("quizlist5"));
    console.log("nooooooooooooooooooo " + sessionStorage.getItem("quizlist11"));
    console.log("nooooooooooooooooooo " + sessionStorage.getItem("quizlist17"));

    document.getElementById("title1").innerHTML = sessionStorage.getItem("title");

    for(var e = 0; e < 24; e++) {
        if (e === 5 || e === 11 || e === 17 || e === 23) {
            console.log("quizlist" + e + "   " + sessionStorage.getItem("quizlist" + e));
        } else {
            document.getElementById("in" + e).innerHTML = sessionStorage.getItem("quizlist" + e);
            console.log("quizlist" + e + "   " + sessionStorage.getItem("quizlist" + e));
        }
    }
}

function checktest(q) {
        if (q === "one") {
            num = sessionStorage.getItem("quizlist5")
            check(q, num);
        } else if (q === "two") {
            num = sessionStorage.getItem("quizlist11")
            check(q, num);
        } else if (q === "three") {
            num = sessionStorage.getItem("quizlist17")
            check(q, num);
        } else if (q === "four") {
            num = sessionStorage.getItem("quizlist23")
            check(q, num);
        }

}

// checking if it is correct
function check(q, num) {
    var ele = document.getElementsByName(q);
      
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var qone = ele[i].value;
        }
    }


        if (qone === num) {
            console.log("question " + q + " is right");
            sessionStorage.setItem(q + "1", true)
            document.getElementById("q" + q).className = "col-12 bg-success border rounded"
        } else {
            document.getElementById("q" + q).className = "col-12 bg-danger border rounded"
        }

    
}

function score() {
    
}

function restart(q) {
    console.log("restart");
    document.getElementById("q" + q).className = "col-12 bg-secondary border rounded";

}