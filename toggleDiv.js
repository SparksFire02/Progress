var first = document.getElementById("1");
var second = document.getElementById("2");
var tog1 = document.getElementById("tog1");
var tog2 = document.getElementById("tog2");

function toggleDiv(val) {
    switch(val) {
        case 1:
            if(first.style.display == "none") {
                first.style.display = "flex";
                tog1.innerHTML = "expand_less";
            }
            else {
                first.style.display = "none";
                tog1.innerHTML = "expand_more";
            }
            break;
        case 2:
            if(second.style.display == "none") {
                second.style.display = "flex";
                tog2.innerHTML = "expand_less";
            } else {
                second.style.display = "none";
                tog2.innerHTML = "expand_more";
            }
                
            break;
        default:
    }

}