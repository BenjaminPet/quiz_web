
var quizlist = []

function mekequiz() {

    quizlist.push(document.getElementById("title1").value, document.getElementById("qtext1").value, document.getElementById("alt1a").value);

    console.log(quizlist);

    sessionStorage.setItem("quizlist", quizlist)

    window.location.href = "./test.html"

}

function addquiz() {
    var quizlist1 = sessionStorage.getItem("quizlist");
    document.getElementById("title1").innerHTML = quizlist1[0];
    document.getElementById("text1").innerHTML = quizlist1[1];
    document.getElementById("").innerHTML = quizlist1[2];
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