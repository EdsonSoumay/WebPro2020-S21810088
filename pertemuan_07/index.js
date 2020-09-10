/* java scipt conditional*/

//menggunakan if,if else dan else
let nilaiMhs =56;
if (nilaiMhs >=91 && nilaiMhs <=100){// if digunakan untuk kondisi pertama
    console.log ("Grade A");
}
else if (nilaiMhs >=85 && nilaiMhs <=90){// else if digunakan untuk kondisi kedua sampai berikutnya
    console.log("Grade A-");
}
else if (nilaiMhs >=82 && nilaiMhs <=84){
    console.log("Grade B+")
}    
else if (nilaiMhs >=78 && nilaiMhs <=81){
    console.log("Grade B")
}   
else if (nilaiMhs >=75 && nilaiMhs <=77){
    console.log("Grade B-")
}
else if (nilaiMhs >=70 && nilaiMhs <=74){
    console.log("Grade C+");
}    
else if (nilaiMhs >=67 && nilaiMhs <=69){
    console.log("Grade C");
}

else if (nilaiMhs >100) {
    console.log("data tidak falid");// menampilkan kondisi jika nilai berada diatas maximum
}

else {
    console.log("Fail"); // else menampilkan semua kondisi selain if dan else if
  }
  
  // menggunakan swicth and case
  // switch dan case adalah alternatif lain dalam menggunakan kondisi
  let jumlahtanggal;
let bulan = "Januari";

switch (bulan) {
    case "Januari":
    jumlahtanggal = "31 tanggal";
    break;
    case "Februari":
    jumlahtanggal = "28/29 tanggal";
    break;
    case "Maret":
    jumlahtanggal = "31 tanggal";
    break;
    case "April":
    jumlahtanggal = "30 tanggal";
    break;
    case "Mei":
    jumlahtanggal = "31 tanggal";
    break;
    case "Juni":
    jumlahtanggal = "30 tanggal";
    break;
    case "juli":
    jumlahtanggal = "31 tanggal";
    break;
    case "Agustus":
    jumlahtanggal = "31 tanggal";
    break;
    case "September":
    jumlahtanggal = "30 tanggal";
    break;
    case "Oktober":
    jumlahtanggal = "31 tanggal";
    break;
    case "November":
    jumlahtanggal = "30 tanggal";
    break;
    case "Desember":
    jumlahtanggal = "31 tanggal";
    break;

    default:
    jumlahtanggal = "tidak ada nama bulan seperti itu";// mirip dengan sintax else di if else
}

console.log(jumlahtanggal); // menampilkan output


/* 
java script loop -> perulangan 
*/

// for loop
for( let i =1; i <=10; i++)// melakukan perulangan biasa
{
    console.log(i);//dipanggil
}

//for/in loop
// loop untuk mengulangi setiap properti dari sebuah objek
const datadiri = {
    Nama: " Edson Robert Soumay",
    TTL : "Palu, 25 September 2000",
    fakultas: "Ilmu Komputer",
    Jurusan: "Sistem Informasi",
    Alamat: "Hative Besar, Ambon, Maluku"
    
 };
 for (x in datadiri) {
   console.log(x, ':', datadiri[x]);// cara panggil
 }

 //for off lop
 //mengulangi setiap elemen dari objek
 const buku = ["Edson Robert Soumay",  
   "Palu, 25 September 2000", 
   "Fakultas ilmu komputer",
   "Sistem Informasi",
   "Hative Besar, Ambon, Maluku"
];

for (x of buku) {
  console.log(x); //dipanggil
  //console.log(x);// dipanggil
}


//While Loop
// outputnya sama sperti loop tapi dengan cara yang berbeda
let i = 0;// tentukan dan deklarasi bilangan awal 

while (i <= 11) // tentukan batas perulangan
{
  console.log(i);
  i++;
}

//Do While Loop
let j = 1;// deklarasi dan tentukan nilai awal

do { //kode akan dijalankan ketika kondisi benar
  console.log(j);
  j++;
} while (j <= 10);// menentukan batas perulangan


