// Get the modal
var modal = document.getElementById("modal");
var btn = document.getElementById("s");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
    var value1 = document.getElementById("startingBalance").value;
    document.getElementById('input1').value = value1;

    var value2 = document.getElementById("expectedReturn").value;
    document.getElementById('input2').value = value2;

    var value3 = document.getElementById("monthlyDeposit").value;
    document.getElementById('input3').value = value3;

    var value4 = document.getElementById("duration").value;
    document.getElementById('input4').value = value4;
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}