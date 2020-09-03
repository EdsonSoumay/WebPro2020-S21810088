/*
tanggal :kamis, 3 September 2020; 
materi:aray
*/

//deklarasi array menggunakan tanda
let angka=[1,2,3,4,5,6,7,8];
console.log(angka);
let buah =["mangga","apel","jeruk"]
console.log(buah);

let arr =["text", 1, true]
console.log(arr);

let myFunc =function (){
    return "helo array";
    
}
//mengakses elemen dalam array
let arr2 =["text", 1, true, myfunc()"];
console.log(arr2[3]);

console.log(arr2.lenght);
console.log(typeof arr2);

//deklarasi menggunakan kata kunci baru
let buah2 =new Array ("pisang","kelapa", "manggis");
console.log(buah[2]);
//memanipulasi array

//1. menambah isi array
let mhs= [];
mhs[0]="Jhon";
mhs[1]="Bob";
mhs[2]="Jane";

console.log(mhs);

//2. mengubah isi array
mhs[1]="Edson";
console.log (mhs);

//3 menhapus isi array
mhs[2]=undefined;
console.log(mhs);

//loop dalam array (mirip dengan bahasa C)
for (let i=0; i<mhs.length; i++){
    console.log("mahasiswa ke =" + (i + 1) + "adalah " mhs[i]);
}

//Methode dalam array

//1. length= mengetahui jumlah elemen yang terdapat didalam array(diatas tadi)
//2 toString= menjadikan array sebagai string
let mhs1= ["Glain","Kevin", "Joshua"];
console.log(mhs1.toString);

//3. join= memberikan pembatas/simbol
console.log(mhs1.join(" - "));

// 4. push, pop, unshift, shift
// push= menambahkan elemen dari belakangan
    mhs1.push("mayrra");
    mhs1.push("stenly");
    
//, pop mengeluarkan array pada bagian belakang
    mhs1.pop("stenly");

//unshift menambah dari depan
mhs1.unshift("Eric"); 

//shift mengeluarkan dari depan
mhs1.shift("Eric");

//5. concat untuk menggabungkan array
let buah = ["mangga", "apel", "anggur"];
let sayur = ["kangkung", "bayam", "buncis"];
let makanan = buah.concat(sayur);// penggabungan antara array buah dan sayur
console.log(makanan);

//6. splice dan slice
// splice untuk mengganti elemen didalam array
let buah=["pisang","mangga", "apel", "jeruk"];
buah.splice(2, 0, "melon","semangka");
console.log(buah.join("-"));
//slice digunakan untuk memotong array
let buah2= buah.slice(0,3);
console.log(buah.join);

//7. for each dan map
//a. forEach
let angka = [1,2,3,4,5,6,7,8];
let tampilAngka = function (el) {
console.log(el);
return el;
;}

//8. sort
let angka = [1, 100, 20, 2, 5, 3 ,7, 8]//js hanya deteksi angka terkecil didepan
let mhs = ["edson", "an"];// diurukan berdasarkan abjad
angka.sort(function(a,b){
    return b-a; //teknik pengurutan;
});
console.log(angka);

//9. filter
let angka2 = angka.filter(function(el){
    return el> 5;
});
console.log(angka2);
