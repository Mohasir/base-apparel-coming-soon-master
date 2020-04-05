
var input = document.querySelector(".input-email");
var icon = document.querySelector(".icon-error");
var msg = document.querySelector(".msg-error");


input.addEventListener("focus", function() {
    icon.style.display = "none"
    msg.style.display = "none"
    input.style.border = "1px solid  hsl(0, 10%, 70%)"
});
 

function showMsg(element) {   
    if (input.textContent == null | emailValidate(input.value)) {
        input.style.border = "1px solid hsl(0, 93%, 68%)"
        icon.style.display = "block"
        msg.style.display = "block"
    }
}

function emailValidate(email) {
    console.log(email)
    if (email.includes('@') & email.includes('.')) {
        return 0
    } else {
        return 1
    }    
}