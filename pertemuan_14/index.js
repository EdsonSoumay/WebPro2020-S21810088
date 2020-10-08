// DESTRUKTURISASI
// adalah cara untuk membongkar isi dari array atau object dan menyimpan hasilnya ke dalam variable-variable lain

// DESTRUKTURISASI ARRAY

//--cara lama
/*let hari =["senin", "selasa", "rabu"]
let hari2= hari[0];
let hari3= hari[1];
let hari4= hari[2];

console.log(hari3);
*/


//--cara baru

/*
let hari =["senin", "selasa", "rabu"] //cara mendeklarasi variable array
let [hari2, hari3, hari4]= hari; //cara melakukan destrukturisasi array 
console.log(hari2);
console.log(hari4);
*/

//bisa juga seperti ini
//kita mengosongkan tempat di hari ketiga dan hari kelima
/*
let[hari2, ,hari4, ,hari6]= ["senin", "selasa", "rabu","kamis", "jumat"]; //gunakan koma kosong untuk melewati elemen
console.log(hari2);
console.log(hari4);
console.log(hari6);
*/

//bisa juga untuk menukar antar 2 variable
/*
let hewan1 ="ayam";
let hewan2 ="babi";
[hewan1,hewan2] = [hewan2,hewan1];
console.log(hewan1); //ouput babi
console.log(hewan2); //output ayam
*/


//DESTRUKTURISASI OBJECT

//cara lama
/*
let student = {
    nama: "Edson",
    umur: 20,
    fakultas:"Computer Science",
    Jurusan: "Sistem Informasi",
    aktifkuliah: true
  };
  
  let nama = student.nama;
  let umur = student.umur;
  let fakultas =student.fakultas;
  let Jurusan = student.Jurusan;
  let aktifkuliah = student.aktifkuliah;
  
  console.log(nama); 
  console.log(umur); 
  console.log(fakultas);
  console.log(Jurusan);
  console.log(aktifkuliah); 

  */
  //cara baru
  /*
  let student = {
    nama: "Edson",
    umur: 20,
    fakultas:"Computer Science",
    Jurusan: "Sistem Informasi",
    aktifkuliah: true
  };
  let { nama, umur, fakultas, Jurusan, aktifkuliah}=student; //destrukturisasi object

  console.log(nama);
  console.log(umur);
  console.log(fakultas);
  console.log(Jurusan);
  console.log(aktifkuliah);

*/
  // merubah nama varible berbedah dari properti
 /* let student = {
    nama: "Edson",
    umur: 20,
    fakultas:"Computer Science",
    Jurusan: "Sistem Informasi",
    aktifkuliah: true
  };
  let { nama:name, umur:age, fakultas:faculty}=student; menggunakan tanda titik dua

  console.log(name);
  console.log(age);
  console.log(faculty);
*/
  //destrukturisasi objek bertingkat
/*
  let student = {
    nama: "Edson",
    umur: 20,
    fakultas:"Computer Science",
    Jurusan: "Sistem Informasi",
    aktifkuliah: true,
    IPpersemester:{
        semester1 : 3.80 ,
        semester2 : 3.63 ,
        semester3 : 3.63 , 
        semester4 : 3.76 ,
    }
  };
 let {
     IPpersemester: {semester4}     
    }=student;
    console.log(semester4);
*/