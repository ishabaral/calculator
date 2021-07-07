const reset = () => {
    document.getElementById("input-box").value = "";
    document.getElementById("input-display").value = "";
}

const clearOne = () => {
    let inputValue = document.getElementById("input-box").value;
    let modifiedInput = inputValue.substring(0, inputValue.length - 1);
    document.getElementById("input-box").value = modifiedInput;
}

const displayNum = (num) => {
    document.getElementById("input-box").value += num;
    let inputNum = document.getElementById("input-box").value;

    let lastNum = inputNum[inputNum.length - 1];
    let secondLastNum = inputNum[inputNum.length - 2];
    // console.log(secondLastNum);
    if ((lastNum == '+' || lastNum == '-' || lastNum == '*' || lastNum == '/' || lastNum == '%') &&
        (secondLastNum == '+' || secondLastNum == '-' || secondLastNum == '*' || secondLastNum == '/' || secondLastNum == '%')) {
        inputNum = inputNum.replace(secondLastNum, lastNum);
        // console.log(inputNum);
        inputNum = inputNum.substring(0, inputNum.length - 1)
        document.getElementById("input-box").value = inputNum;
    }
}

const displayResult = () => {
    let expression = document.getElementById("input-box").value;
    let result = eval(expression);
    document.getElementById("input-box").value = result;
    document.getElementById("input-display").value = expression;
}
