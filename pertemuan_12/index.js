
/*
//arrow function
 materi tanggal: 29/09/2020

const calcAge = (year) =>{
    return 2020 - year;  
};

const calcAge = (birthYear, currentYear)=>{
    return currentYear -birthYear;
console.log(calcAge(1991));

//no argumen
const calcAge =() => {
return 2020-1992;
};

//implicit Return value
const calcAge =() =>  2020-1992;
console.log(calAge());

//contoh arrow funct
const years = [1990, 1992, 2001, 2005];

const calcAge5= years.map(function (el){
    return 2020 - el;
});

//arrow fnction
const calcAge6 = years.map( (el) => 2020 -el);
console.log(calAge6);
*/

//default parameter => parameter adalah sayarat input yang dimasukan
//argumen= nilai yang dimasukan kedalam parameter berdasarkan instruksi

// default parameter
//const calcAge = (birthYear, currentYear)=> currentYear - birthYear;
//console.log(calcAge (1991));

//Exercisse, convert to ES6 syntax

/*
let yearuntilRetirement =(year, FirstName)= => {
    var age = 28;
    var retirement = 65 - age;
    if( retirement > 0) {
        console.log (firstName + "Retired in")

    }
}
*/



//excercise 
//convert to ES6 Syntax
const yearsUntilRetirement = (year=2020, firstName ="Edson") => 
{
  const age =28; 
  const retirement = 65 - age;
  if (retirement > 0) 
    {
      console.log(`${firstName} retired in ${retirement} years`);
    }
  else 
    {
      console.log(`${firstName} is already retired.`);
    }
}

yearsUntilRetirement();

