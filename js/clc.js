function shiftContent(item, title) {
    var c = document.getElementsByClassName("content");
    for (var i = 0; i < c.length; i++) {
        c[i].style.display = "none";
    }
    document.getElementById(item).style.display = "block";
    document.getElementById("nav-title").innerHTML = title;
}