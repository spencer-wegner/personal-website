var isDisplayed = [false, false, false, false];

function whatYouNeed() {
    if (isDisplayed[0] == false) {
        var e = document.getElementsByClassName("displaycontent");
        var head = document.getElementsByClassName("subtitle");
        e[0].style.display = "block";
        isDisplayed[0] = true;
        head[0].scrollIntoView();
    }
    else {
        var e = document.getElementsByClassName("displaycontent");
        e[0].style.display = "none";
        isDisplayed[0] = false;
    }
}

function howToPrepare() {
    if (isDisplayed[1] == false) {
        var e = document.getElementsByClassName("displaycontent");
        var head = document.getElementsByClassName("subtitle");
        e[1].style.display = "block";
        isDisplayed[1] = true;
        head[1].scrollIntoView();
    }
    else {
        var e = document.getElementsByClassName("displaycontent");
        e[1].style.display = "none";
        isDisplayed[1] = false;
    }
}

function howTheBodyWorks() {
    if (isDisplayed[2] == false) {
        var e = document.getElementsByClassName("displaycontent");
        var head = document.getElementsByClassName("subtitle");
        e[2].style.display = "block";
        isDisplayed[2] = true;
        head[2].scrollIntoView();
    }
    else {
        var e = document.getElementsByClassName("displaycontent");
        e[2].style.display = "none";
        isDisplayed[2] = false;
    }
}

function howToAdapt() {
    if (isDisplayed[3] == false) {
        var e = document.getElementsByClassName("displaycontent");
        var head = document.getElementsByClassName("subtitle");
        e[3].style.display = "block";
        isDisplayed[3] = true;
        head[3].scrollIntoView();
    }
    else {
        var e = document.getElementsByClassName("displaycontent");
        e[3].style.display = "none";
        isDisplayed[3] = false;
    }
}