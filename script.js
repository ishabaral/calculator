const reset = () => {
    document.getElementById("input-box").value = "";
    document.getElementById("input-display").value = "";
}

const clearOne = () => {
    let inputValue = document.getElementById("input-box").value;
    let modifiedInput = inputValue.substring(0, inputValue.length - 1);
    document.getElementById("input-box").value = modifiedInput;
}

const displayNum = (num) => document.getElementById("input-box").value += num;


const displayResult = () => {
    let expression = document.getElementById("input-box").value;
    let result = eval(expression);
    document.getElementById("input-box").value = result;
    document.getElementById("input-display").value = expression;
}
