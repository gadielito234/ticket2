function Done() {
    let balance = Number(document.getElementById("balance").value);
    
    if (balance > 0) {
        document.getElementById("Salida").textContent = "Active";
    } else {
        document.getElementById("Salida").textContent = "Blocked";
    }
}

function checkWithdrawal() {
    let balance = Number(document.getElementById("balance").value);
    let withdrawal = Number(document.getElementById("withdrawal").value);
    
    if (withdrawal > balance) {
        document.getElementById("Salida").textContent = "Denied";
    } else {
        document.getElementById("Salida").textContent = "Approved";
    }
}
