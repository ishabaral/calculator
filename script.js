const reset = () => {
    document.getElementById("input-box").value = "";
    document.getElementById("input-display").value = "";
}

const partialReset = () => {
    document.getElementById("input-box").value = "";
}

const displayNum = (num) => document.getElementById("input-box").value += num;

const result = () => {
    let a = document.getElementById("input-box").value;
    let b = eval(a);
    document.getElementById("input-box").value = b;
    document.getElementById("input-display").value = a;
}
