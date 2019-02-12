function fizzbuzz () {
  for(i = 0; i < 100; i++) 
  {
      if (i % 3 === 0 && i % 5 === 0)
      {
        console.log("FizzBuzz");                    
      }
      else 
        if(isFizz(i))
        {
          console.log("Fizz");
        }
        else 
          if(isBuzz(i))
          {
            console.log("Buzz");
          }
          else
            console.log(i);
  }
}

isFizz = function(number) {
  return number % 3 == 0;
}

isBuzz = function(number) {
  return number % 5 == 0;
}


fizzbuzz()