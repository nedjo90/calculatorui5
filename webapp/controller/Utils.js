sap.ui.define([], function () {
  "use strict";
  function getClickedValue(event) {
    let id = event.getSource().getId().split("-").pop();
    let value = "";
    switch (id) {
      case "plusBtn":
        value = "+";
        break;
      case "minusBtn":
        value = "-";
        break;
      case "multiplyBtn":
        value = "*";
        break;
      case "divideBtn":
        value = "/";
        break;
      case "oneBtn":
        value = "1";
        break;
      case "twoBtn":
        value = "2";
        break;
      case "threeBtn":
        value = "3";
        break;
      case "fourBtn":
        value = "4";
        break;
      case "fiveBtn":
        value = "5";
        break;
      case "sixBtn":
        value = "6";
        break;
      case "sevenBtn":
        value = "7";
        break;
      case "eightBtn":
        value = "8";
        break;
      case "nineBtn":
        value = "9";
        break;
      case "dotBtn":
        value = ".";
        break;
      case "zeroBtn":
        value = "0";
        break;
      case "cancelBtn":
        value = "C";
        break;
      case "equalBtn":
        value = "=";
        break;
      default:
        value = "unexpected error";
    }
    // console.log(value);
    return value;
  }


  
  function updateResult(result, input) {
    // console.log("result = ", result);
    // console.log("input = ", input);
    // return [result, input].join("");
    if (/[0-9]/.test(input)) {
      if (result == "0") {
        result = input;
      } else {
        result = [result, input].join("");
      }
    } else if (input == "C" && result.substr(-1) != "0") {
      result = result.slice(0, -1);
    } else if (
      input == "." &&
      /[0-9]/.test(result.substr(-1)) &&
      !result
        .split(/[+\-*/]/)
        .pop()
        .includes(".")
    )
      result = [result, "."].join("");
    else if (
      (input == "+" || input == "-" || input == "*" || input == "/") &&
      result.substr(-1) != "+" &&
      result.substr(-1) != "-" &&
      result.substr(-1) != "*" &&
      result.substr(-1) != "/"
    ) {
      result = [result, input].join("");
    }
    if (result == "") result = "0";
    if (input == "=") {
      if (/[+\-*/]/.test(result.substr(-1))) {
        result = result.slice(0, -1);
      }
      result = result.split(/([+\-*/])/);
      let finalResult = result[0] * 1;
      for (let step = 1; step < result.length; step += 2) {
        switch (result[step]) {
          case "+":
            finalResult = finalResult + result[step + 1] * 1;
            break;
          case "-":
            finalResult = finalResult - result[step + 1] * 1;
            break;
          case "*":
            finalResult = finalResult * result[step + 1] * 1;
            break;
          case "/":
            if (result[step + 1] == "0") {
              alert("Divide by 0 is impossible");
              return "0";
            }
            finalResult = (finalResult / result[step + 1]) * 1;
            break;
        }
      }
    //   console.log("finalResult = ", finalResult);
      return finalResult;
    }
    return result;
  }

  return {
    getClickedValue: getClickedValue,
    updateResult: updateResult,
  };
});
