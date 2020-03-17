
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

  for (let i = 0; i < arr.length; i++) {
      if (isNaN(+arr[i]) == false && arr[i] !== "") {
          stack1.push(+arr[i]);
      }
      else if (isNaN(+arr[i]) && stack2.length == 0){
          stack2.push(arr[i]);
      }
     
      else if (isNaN(+arr[i]) && obj[arr[i]] <= obj[stack2[stack2.length - 1]]){
          if (stack2[stack2.length - 1] == "+") {
              let add = stack1[stack1.length -2] + stack1[stack1.length -1];
              stack1.pop();
              stack1.pop();
              stack1.push(add);
              stack2.pop();
              stack2.push(arr[i]);
          }
         else if (stack2[stack2.length - 1] == "-") {
            let sub = stack1[stack1.length -2] - stack1[stack1.length -1];
            stack1.pop();
            stack1.pop();
            stack1.push(sub);
            stack2.pop();
            stack2.push(arr[i]);
        }
        else if (stack2[stack2.length - 1] == "*") {
            let mul = stack1[stack1.length -2] * stack1[stack1.length -1];
            stack1.pop();
            stack1.pop();
            stack1.push(mul);
            stack2.pop();
            stack2.push(arr[i]);
        }
        else if (stack2[stack2.length - 1] == "/") {
            let div = stack1[stack1.length -2] / stack1[stack1.length -1];
            stack1.pop();
            stack1.pop();
            stack1.push(div);
            stack2.pop();
            stack2.push(arr[i]);
        }
      }
      else if (isNaN(+arr[i]) && obj[arr[i]] > obj[stack2[stack2.length - 1]]) {
        stack2.push(arr[i]);
      }
  }

for (let j = 0; j < 5; j++){
    if (stack2[stack2.length - 1] == "+") {
        let sum = stack1[stack1.length - 2] + stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(sum);
        stack2.pop();
    }
    else if (stack2[stack2.length - 1] == "-") {
        let mini = stack1[stack1.length - 2] - stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(mini);
       stack2.pop();
    }
    else if (stack2[stack2.length - 1] == "*") {
        let multic = stack1[stack1.length - 2] * stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(multic);
       stack2.pop();
    }
    else if (stack2[stack2.length - 1] == "/") {
        let div2 = stack1[stack1.length - 2] / stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(div2);
       stack2.pop();
    
    }
    
}
return stack1[0];

}
module.exports = {
    expressionCalculator
}
