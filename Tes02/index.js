//BAGIAN 1




//jawaban no 1

const calculateAge = (BirthYear)=> {
    return 2019 - BirthYear;
}
 
const yearUntilRetirement = (object) => {
	const age = calculateAge(object.BirthYear);
	const retirement = 60 - age;
   	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}
 
yearUntilRetirement(
    {BirthYear: 1987, firstName: 'John'} );
    


/*
// jawaban no 2

   const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    let i = numbers.map(item=>{
      return sum+=item
    })
    console.log(i);
}

addNumber(1,2,3,4,5,6,7)
    
  */ 



/*
//jawaban no 3

let phi = 3.14;
let power = 2;
let radius = 0;
 
const calculateArea = (obj) => {
return phi * Math.pow(obj.radius, obj.power);
};
radius = 21;
let area21 = calculateArea({radius: radius, power: 2 });
radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });
console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);
*/


/* 
//jawaban no 4

const makeAjaxRequest = (url, method) => {
    if(!method)
    {
           method = `GET`
    }
    console.log(`${url}, ${method}`);
}
makeAjaxRequest(`www.google.com`);
*/



// BAGIAN 2

/*
// jawaban no 1

const WarnaKesukaan =(warna="putih") =>{
    return console.log(`Warna kesukaan saya adalah ${warna}`)
    }
     WarnaKesukaan('biru');
    

//jawaban no 2

let namabuah1 = ["apel", "mangga"];
let namabuah2 = ["sirsak", "semangka"];

let namabuah = [...namabuah1, ...namabuah2];
console.log(namabuah);
*/

