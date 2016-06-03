//To do this I think I should plot the numbers out into an array and then splice the coresponding items as nessasary
//Done---create an empty array 
var fizzBuzz = [];
//Done---create a for loop
for (var i = 0; i <= 1000; i++) {

    //Done---if the number when divided by 3 do something
    if ((i % 3) === 0) {
        fizzBuzz.push("Fizz"); 
        //  replace it with fizz  

        //has a modulo equal to 0 log fizz
        //if divisible by 5 log buzz
    } else if ((i % 5) === 0) {
        ////if the number when divided by 5 has a 
        //splice buzz
        fizzBuzz.push("Buzz"); 
        //        //modulo equal to zero log buzz
        //console.log("buzz");
    } else if (((i % 3) === 0) && ((i % 5) === 0)) {
        //                 //if divisible by 3 && 5 && has a modulo equal to zero for both log fizzBuzz
        //slice fizzbuzz
        fizzBuzz.push("Fizz Buzz")
    }
    //Done---log the for loop into an array
    fizzBuzz.push(i);
};

document.getElementById("demo").innerHTML = fizzBuzz;
//run the fizzbuzz variable
