function changeDisp(url) {
    "use strict";
    
    if(url) {
        document.getElementById("display").style.opacity = 1;
        document.getElementById("display").style.backgroundImage = "url(" + url + ")";   
    }
}

function hideDisp() {
    document.getElementById("display").style.opacity = 0;
}