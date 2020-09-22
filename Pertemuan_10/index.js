//kita tidak boleh mendeklarasi variable dengan nama yang sama
//1.  var, let, const
// var adalah masalah yang pertama, karena variable dapat dideklarasi dengan nama yang sama
// kalo let tidak
var nama ="edson";
var nama = "Soumay";
console.log (nama);
// scope var = function scop
// scope  dalam js ada 2 : function dan block
// yang bagus adalah block, karena banyak bahasa pemrograman pake block

/*function test()
{
    for (var i=0; i<10; i++)
    {
        console.log(i);
    }

} //ini cara yang benar
test();
console.log(i);
*/

/*
// IFE = sebuah fungsi yang langsung dipanggil saat didefinisikan

function test()
({
    for (var i=0; i<10; i++)
    {
        console.log(i);
    }

})();
console.log(i);
*/
for(let i = 0; i < 10; i++ ) //scope dari let adalah block
{
    console.log(i);
}
//console.log(i);

//template literal

const person= {
    firstName: "edson",
    lastName: "Soumay",
    age: 19,

};
console.log("Hello nama saya " 
+ person.firstName + 
" " + person.lastName + "." 
+ " Umur saya adalah " 
+ person.age)

console.log(`halo nama saya ${person.firstName} ${person.lastName} umur saya ${person.age} tahun`);