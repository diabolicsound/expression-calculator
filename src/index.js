
function expressionCalculator(expr) {
    let arr = expr.split(' ');
  let stack1 = [];
  let stack2 = [];
  let stack3 = [];
  let obj = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
  }

  let plus = "+";
  let minus = "-";
  let multi = "*";
  let div = "/"

  for (let i = 0; i < arr.length; i++) {
      if (isNaN(Number(arr[i])) == false && arr[i] !== "") {
          stack1.push(+arr[i]);
      }
      else if (isNaN(Number(arr[i])) && stack2.length == 0) {
        stack2.push((arr[i]));
      } 
      else if (isNaN(Number(arr[i])) && obj[arr[i]] <= obj[stack2[(stack2.length-1)]]) {
          if (stack2[stack2.length - 1] == "+") {
         let add = stack1[(stack1.length - 2)] + stack1[(stack1.length - 1)]
        stack1.pop();
        stack1.pop();
        stack1.push(add);
        stack2.pop();
        stack2.push(arr[i])
          }
        
         else if (stack2[stack2.length - 1] == "-") {
          let add = stack1[(stack1.length - 2)] - stack1[(stack1.length - 1)]
          stack1.pop();
          stack1.pop();
          stack1.push(add);
          stack2.pop();
          stack2.push(arr[i]);
            }
            else if (stack2[stack2.length - 1] == "*") {
              let add = stack1[(stack1.length - 2)] * stack1[(stack1.length - 1)]
              stack1.pop();
              stack1.pop();
              stack1.push(add);
              stack2.pop();
              stack2.push(arr[i]);
                }
                else if (stack2[stack2.length - 1] == "/") {
                  let add = stack1[(stack1.length - 2)] / stack1[(stack1.length - 1)]
                  stack1.pop();
                  stack1.pop();
                  stack1.push(add);
                  stack2.pop();
                  stack2.push(arr[i]);
                    }

      else if (isNaN(Number(arr[i])) && (obj[arr[i]] > obj[stack2[(stack2.length-1)]])) {
      stack2.push(arr[i])
      }
  }
  }
if (stack2[0] == "*") {
    return (stack1[0] * stack1[1]);
}
else if (stack2[0] == "/") {
    return (stack1[0] / stack1[1]);
}
else if (stack2[0] == "+") {
    return (stack1[0] + stack1[1]);
}
else if (stack2[0] == "-") {
    return (stack1[0] - stack1[1]);
}


}
module.exports = {
    expressionCalculator
}
