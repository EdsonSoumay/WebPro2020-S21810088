
// REST PARAMETER dan SPREAD OPERATOR

// mirip  karna menggunakan tanda elipsis(...) tetapi tidak sama

// rest parameter digunakan pada parameter fungsi


//Cara lama
const hitung = (a, b, c, d, e) => {
    const angka = [a,b, c, d,e ]// simpan nilai ke dalam array
   let total = 0;
    for (let i=0; i<5; i++)
    {
        total = total + angka [i];
    }
    return total;
}
console.log(hitung(1, 2, 3 , 4, 5));


//Cara baru

const hitung3 = (...angka) => {
   console.log(angka)
    let total = 0;
   angka.forEach((el) =>{
    total= total + el
   }) 
    return total;
}
console.log(hitung3(1, 2, 3 , 4, 5) );




const hitung2= (par1, par2, ...pars) =>
{
    console.log(par1)
    console.log(par2)
    console.log(pars)
    let total = 0;
    pars.forEach((el) =>
    {
        total = total + el;
    })
    return total;
}
console.log(hitung2(1,2,3,4,5))



// spread operator = memisahkan array menjadi sebuah elemen
// 1. duplicate array
const angka1 = [1, 2, 3, 4, 5];
const angka2 = [...angka1]
angka1[0] =10

console.log(angka1);
console.log(angka2);

//2. merge array
const number1 = [ 1, 2, 3, 4, 5]
const number2 = [ 6, 7, 8, 9, 10]
const number3 = [ 11, 12]
const mergenumber = [ ...number1, ...number2,13,...number3]
console.log(mergenumber)

//3. fill object
let orang = {
    nama : "jhon",
    umur: 33,
}
orang = { ...orang, pekerjaan: "guru", pendidikan: "S2"}
console.log(orang)

//4. Merge
const object1 = { a:1, b:2}
const object2 = { c:3, d:4}
const mergeobject = { ...object1, ...object2}
console.log(mergeobject)




