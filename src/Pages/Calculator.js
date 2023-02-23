import React from "react";


export const Calculator = () =>{
const params = new URLSearchParams(window.location.search);
  const num1 = parseInt(params.get('num1'));
  const num2 = parseInt(params.get('num2'));
  const op = decodeURIComponent(params.get('op'));
    let result;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      result = NaN;
  }

  return (
    <div>
      <h2>Your calculation result is <span id="calc-result">{result}</span></h2>
    </div>
  );
}
