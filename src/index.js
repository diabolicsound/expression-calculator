
function expressionCalculator(expr) {
    if (expr.includes('/ 0')) {
        throw Error('TypeError: Division by zero.');
    }
    let openbrack = 0;
    let closebrack = 0;

    for (let z = 0; z < expr.length; z++) {
        if (expr[z] == '('){
            openbrack += 1;
        }
        else if (expr[z] == ')') {
            closebrack += 1;
        }
    }
   if (closebrack !== openbrack) {
       throw Error('ExpressionError: Brackets must be paired')
   }
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
   /* if (isNaN(+arr[i]) && stack2[stack2.length - 1] == "-" && arr[i] !== "+") {
        stack1[stack1.length - 1] = -(stack1[stack1.length - 1]);
        stack2[stack2.length - 1] = "+";
        stack2.push(arr[i]);
    } */
     if (isNaN(+arr[i]) == false && arr[i] !== "") {
          stack1.push(+arr[i]);
      }
     
    
      else if (isNaN(+arr[i]) && stack2.length == 0){
          stack2.push(arr[i]);
      }
     
      else if (isNaN(+arr[i]) && obj[arr[i]] <= obj[stack2[stack2.length - 1]] && obj[stack2[stack2.length - 1]] !== "("){
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
      else if (isNaN(+arr[i]) && arr[i] !== ")") {
        stack2.push(arr[i]);
      }

      else if (isNaN(+arr[i]) && arr[i] == ")"){
          while (stack2[stack2.length - 1] !== "(") {
            if (stack2[stack2.length - 1] == "+") {
                let add = stack1[stack1.length -2] + stack1[stack1.length -1];
                stack1.pop();
                stack1.pop();
                stack1.push(add);
                stack2.pop();
            }
           else if (stack2[stack2.length - 1] == "-") {
              let sub = stack1[stack1.length -2] - stack1[stack1.length -1];
              stack1.pop();
              stack1.pop();
              stack1.push(sub);
              stack2.pop();
          }
          else if (stack2[stack2.length - 1] == "*") {
              let mul = stack1[stack1.length -2] * stack1[stack1.length -1];
              stack1.pop();
              stack1.pop();
              stack1.push(mul);
              stack2.pop();
          }
          else if (stack2[stack2.length - 1] == "/") {
              let div = stack1[stack1.length -2] / stack1[stack1.length -1];
              stack1.pop();
              stack1.pop();
              stack1.push(div);
              stack2.pop();
          }
          }
          if ((stack2[stack2.length - 1] == "(")) {
            stack2.pop()
        }
      }
    } 
    for (let j = 0; j < 15; j++){
     if (stack2[stack2.length - 1] == "-") {
        let mini = stack1[stack1.length - 2] - stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(mini);
       stack2.pop();
    } 
for (let j = 0; j < 5; j++){
     if (stack2[stack2.length - 1] == "-") {
        let mini = stack1[stack1.length - 2] - stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(mini);
       stack2.pop();
    } 
   else if (stack2[stack2.length - 1] == "+") {
        let sum = stack1[stack1.length - 2] + stack1[stack1.length - 1];
        stack1.pop();
        stack1.pop();
        stack1.push(sum);
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
    
    } }
    
} /*
console.log(stack1)
console.log(stack2)
console.log(-(stack1[1]))
*/
return stack1[0];
}

module.exports = {
    expressionCalculator
}
