var add = function(number1, number2) {
    return number1+number2;
    };
    
    var sub = function(number1, number2) {
    return number1-number2;
    };
    
    var multiply= function(number1, number2) {
    return number1*number2;
    };
    
    var divide= function(number1, number2) {
    return number1/number2;
    };
    
    var number1 =parseInt(prompt("Enter a number: "));
    var number2 =parseInt(prompt("Enter another number: "));
    var result =divide(number1, number2);
    alert(result);

// this is the code for a BMI calculator from the exercise
//     var height=parseInt(prompt("How inches tall are you?"));
// var weight=parseInt(prompt("How much do you weigh?"));

// var BMI = function(height, weight){
// return (weight * 703)/(height * height)
// };

// var result = BMI (height, weight);
// alert(result);

// celsius to fahrenheit converter

// var celsius=parseInt(prompt("Enter C'"));
// var convert= function(celsius){
// return celsius + " C " + ((celsius * 9/5) + 32) +" F";
// }
// var result = convert(celsius);
// alert(result);