let buttonClickMe = document.getElementById("start");
let mainFrom = document.getElementById("mainForm");


buttonClickMe.onclick = function (){
    buttonClickMe.setAttribute("style", "display: none");
    mainFrom.setAttribute("style", "display: block");
}



