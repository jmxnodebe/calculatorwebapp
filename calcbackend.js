function clearoutput() {
    document.getElementById("output").innerHTML = "0"
}
function cleardefault() {
    var input = document.getElementById("output").innerHTML
    if(input == "0") {
        input = " "
        document.getElementById("output").innerHTML = input
    }
}
function writeEqn(value) {
    cleardefault()

    document.getElementById("output").innerHTML += value
}
function solveEqn() {
    cleardefault()

    var eqn = document.getElementById("output").innerHTML
    var solution = eval(eqn)
    document.getElementById("output").innerHTML = solution
}