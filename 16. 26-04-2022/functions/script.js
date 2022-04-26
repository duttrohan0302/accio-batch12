
function multiply(p1,p2){
    return p1*p2;
}

function divide(p1,p2){
    console.log(p1/p2);
}

function toCelsius(fahrenheit){
    return (5/9)*(fahrenheit-32);
}

let x = toCelsius(99)
document.write("The temperature is "+x+" deg Celsius")