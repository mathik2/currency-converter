function submit() {
    var rupee = document.getElementById("rupee").value;
    var dollar = rupee * 0.013;
    var yuan = rupee * 0.089;
    var prupee = rupee * 2.16;
    var ruble = rupee * 1.03;
    var yen = rupee * 1.40
    var euro = rupee * 0.011;

    document.getElementById("dollar").value = dollar;
    document.getElementById("yuan").value = yuan;
    document.getElementById("prupee").value = prupee;
    document.getElementById("ruble").value = ruble;
    document.getElementById("yen").value = yen;
    document.getElementById("euro").value = euro;

}

function reset() {
    document.getElementById("rupee").value = "0";

    document.getElementById("dollar").value = "0"
    document.getElementById("yuan").value = "0"
    document.getElementById("prupee").value = "0";
    document.getElementById("ruble").value = "0";
    document.getElementById("yen").value = "0";
    document.getElementById("euro").value = "0";
}