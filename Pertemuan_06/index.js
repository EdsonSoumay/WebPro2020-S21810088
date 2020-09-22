
// const mahasiswa1 =['John', "Doe", 31, true];

//console.log(mahasiswa1);

//literal
 const mhs1 = { //objek literal, objek method
     namaDepan: "jhon", //properties, key dalam objek
     namaBelakang: "Joe",
     umur: 31, 
     sudahlulus: true,  
     alamat : { 
         jalan :" dr ler",
         kecamatan: "hative besar", //objek didalam objek
         kabupaten: "kota ambon", 
     },
     IPSemester: [3.12, 3.55, 3.01, 3.14],
     hitungIPK: function (){ //harus pake this untuk akses dari dalam fungsi properti dalam objek
        console.log(this.IPSemester);  
        let total = 0;
         this.IPSemester.forEach(function(el){//follback funct
                total =total +el;
         });
      //   return total/4;  // return tidak disimpan didalam objek
       this.IPKUmulatif =total/4; //this simpan didalam objek
     },
    }; 
    
    delete mhs1.namaBelakang;
    console.log(mhs1);

//kata kunci
     const mhs2 = new Object();
     mhs2.namaDepan = "Jane"; //mengakses properti dari objek yg sama
     mhs2.namaBelakang ="smith";


     // cara mengakses properti objek
     // ada 2 cara 
     // dot notation
  //   console.log(mhs1.umur);

     //breaked notation []
    // console.log(mhs1["namaBelakang"]);  
    console.log(mhs1.alamat.jalan);  
    console.log(mhs1.IPSemester[2]); 
    console.log(mhs1.hitungIPK);
    console.log(mhs1.hitungIPK);
   
    mhs1.hitungIPK;
    console.log(mhs1);

    //consept array objek
    //javascript objek notation
    const mahasiswa =[
        {
            namaDepan: "jhon",
            namaBelakang: "frf",
        },
        {
            namaDepan: "rwer",
            namaBelakang: "rfsadf", 
        }
    ];
    mahasiswa.forEach(function(el)
    {
        console.log(el);
    });















/*

//1. Object Literals
const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: 'Minahasa Utara',
    },
    IPSemester: [3.12, 3.55, 3.01, 3.14],
    hitungIPK: function() {
        // console.log(this.IPSemester);
        let total = 0;
        this.IPSemester.forEach(function(el)
        {
            total = total + el;
        });
        this.IPKumulatif = total /4;
    }
};

//delete mhs1.namaBelakang;
//console.log(mhs1);

// 2. Kata kunci new
// const mh2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";

//mengakses Properti Objek
//1. Dot notation
// console.log(mhs1.umur);
//2.bracket notation
// console.log(mhs1["namaBelakang"]);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// console.log(mhs1.hitungIPK());
// mhs1.hitungIPK();
// console.log(mhs1);


*/
/*
   Dari putu  Object
*/

//const mahasiswa1 = ["John", "Doe", 31, true];

//mendeklarasi object
//1. object literals
/*const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat: {
        Jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 4.00, 3.08, 3.99],
    hitungIPK: function () {
        let total = 0;
        this.IPSemester.forEach(function (el) {
            total = total + el;
        });
        this.IPKomulatif = total / 4;
    }
};
*/
/*2. kata kunci new
const mhs2 = new Object();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith";
*/

//mengakses properti object 
//1. Dot notation
//console.log(mhs1.umur);
//2. Bracket notation
//console.log(mhs1['namaBelakang']);

//console.log(mhs1.alamat.jalan);
//console.log(mhs1.IPSemester[2]);
//mhs1.hitungIPK();
//console.log(mhs1);

//Array object (JSON)
/*const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function (el){
    console.log(el);
});
*/