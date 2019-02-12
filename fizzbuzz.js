fizzbuzz = function(limit) {
  let sequence = "";
  for(i = 1; i <= limit; i++) {
      if (isFizzBuzz(i))
        sequence += "FizzBuzz";         
      else if(isFizz(i))
        sequence += "Fizz";
      else if(isBuzz(i))
        sequence += "Buzz";
      else
        sequence += i ;
  }
  return sequence;
}

isFizz = function(number) {
  return number % 3 == 0;
}

isBuzz = function(number) {
  return number % 5 == 0;
}

isFizzBuzz = function(number) {
  return number % 3 == 0 && number % 5 == 0;
}


console.log(fizzbuzz(15));