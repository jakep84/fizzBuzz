//To do this I think I should plot the numbers out into an array and then splice the coresponding items as nessasary

//Done---create an empty array 
var fizzBuzz = [];
//Done---create a for loop
for (var i = 0; i <= 100; i++) {
    //Done---if divisible by 3 && 5 && has a modulo equal to zero for both log fizzBuzz
    if (((i % 3) === 0) && ((i % 5) === 0)) {           //Done---push fizzbuzz
        fizzBuzz.push("Fizz Buzz");
        //remove coresponding number add "fizz buzz" in its place 
    }
    //Done---if the number when divided by 3 do something
    else if ((i % 3) === 0) {
        //Done---push "fizz"
        fizzBuzz.push("Fizz"); 
        // remove coresponding number add fizz in its place  

    //Done---if divisible by 5 
    } else if ((i % 5) === 0) {
        //Done-- push "buzz"
        fizzBuzz.push("Buzz"); 
        // remove coresponding number add fizz in its place
    } 
    //Done---log the for loop into an array called fizzBuzz
    fizzBuzz.push(i);
};
//Done---add fizzBuzz to the "demo" paragraph
document.getElementById("demo").innerHTML = fizzBuzz;

