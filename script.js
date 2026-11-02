document.getElementById("button").onclick = function() {
    let x;
    x = document.getElementById("email").value

    let y;
    y = document.getElementById("password").value

    if (x.trim() === ""){
        window.alert(`Pls fill your Email`)
    }
    else if (y.trim() === ""){
        window.alert(`Pls fill your Password`)
    }
    else{
        window.location.href = "Page-2/index-2.html"; 
    }

}
