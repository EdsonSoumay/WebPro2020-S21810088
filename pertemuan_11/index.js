//Arrow function
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
