/*//Arrow function
// (ini adalah hasil latihan sendiri)
//fungsi yang memiliki parameter
const operasiPenjumlahan = (bil1, bil2) => {
  const hasil =  bil1 + bil2;
  return hasil;
};

console.log(operasiPenjumlahan(13,23)); // Output: 7

// fungsi yang tidak memiliki paramter
const kumpulanangka = () => {
  const angka = ["1", "2", "3", "4"];
  return angka[Math.floor(Math.random()*(angka.length))];// outputnya adalah random
}

console.log(kumpulanangka()); 

*/



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



//excercise pertemuan 11, tanggal: 29 september 2020
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

