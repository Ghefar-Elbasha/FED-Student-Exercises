const num = Math.ceil(Math.random() * 10);
 const gnum = prompt('Guess the number between 1 and 10');
 if (gnum == num)
   console.log('Matched');
  else if (gnum > num)
  console.log('Number too high');
  else (gnum < num)
  console.log('Number too low');