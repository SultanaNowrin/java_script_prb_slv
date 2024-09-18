var num1 = 50;
var num2 = 30;
var result;

//using if...else
//if(condition){statement1} else{statement2{}

if(num1>num2){
    result = num1*num1;
    console.log(result);
}
else{
    result = num1+num2;
    console.log(result);
}

//using ternary operator
//condition ? exprIfTrue : exprIfFalse

(num1>num2) ? result=num1*num1 : resultt=num1+num2
console.log(result)