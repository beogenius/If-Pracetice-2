function setOutput() {
    document.getElementById('out-put').value += number;
}
function calculator(){
    let output = document.getElementById("out-put").value;
    result = eval(output);
    document.getElementById("out-put").value=result;
}
