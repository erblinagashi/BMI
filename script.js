const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2 ;
const BMIJoh  = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJoh;

document.write(BMIMark, BMIJoh);