function shiftContent(item, title) {
    var c = document.getElementsByClassName("content");
    for (var i = 0; i < c.length; i++) {
        c[i].style.display = "none";
    }
    document.getElementById(item).style.display = "block";
    document.getElementById("nav-title").innerHTML = title;
    /* hide dropdown panel */
    document.getElementById("dropdown-content").style.display = "none";
    dropdown = false;
}

dropdown = false;
function showDropdownContent() {
    if (dropdown == false) {
        document.getElementById("dropdown-content").style.display = "block";
        dropdown = true;
    }
    else {
        document.getElementById("dropdown-content").style.display = "none";
        dropdown = false;
    }
}