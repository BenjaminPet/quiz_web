function mekequiz() {
    var tag = document.createElement("div");
    var text = document.createTextNode("<h2>question 1</h2> <p>hva bruker man python til</p> <button>Game developing</button><button>automasjon</button><button>endre utsene til websider</button>");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
}
function wrong() {
    console.log("wrong");
}
function right() {
    console.log("right");
}