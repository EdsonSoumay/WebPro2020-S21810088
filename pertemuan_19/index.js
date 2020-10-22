console.log ("JS dan class dan OOP");

//CLASS & CONSTRUCTOR
/*
const Person ={
    firstName: "Edson",
    lastName: "Soumay",
    displayFullName : function (){
        console.log(`${this.firstName} ${this.lastName}`);
    },
};

    //person.displayfullName();
    class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

    //const person1 = new Person("Edson", "Soumay");
    //console.log(person1);
    //person1.displayFullName();
    //const person2 = new Person("Juan", "San");
    //person2.displayFullName();

*/

//INHERITANCE

/*
class student extends Person{
    constructor(firstName, lastName,NIM){
        super(firstName, LastName);
        this.NIM =NIM;
    }
    displayNIM()
    {
        console.log (`Your NIM is $(this,NIM)`);
    }
}

const john = new Student ("John", "Doe", "112233")
john.displayFullName();
john.displayNIM();
*/

//STATIC MEMBER
/*
class student extends Person{
    constructor(firstName, lastName,NIM, age){
        super(firstName, LastName);
        this.NIM = NIM;
        this.age = age;
    }
    static halo(){// static dianggap bukan function, properti didalamnya tidak bisa dipakai
        console.log (`halo `);
    }
    displayNIM()
    {
        console.log (`Your NIM is $(this,NIM)`);
    }
}

const john = new Student ("John", "Doe", "112233")
john.displayFullName();
john.displayNIM();
student.halo();

*/
//SETER & GETER
/*
class student extends Person{
    constructor(firstName, lastName,NIM, age){
        super(firstName, LastName);
        this.NIM = NIM;
        this.age = age;
    }
    static halo(){// static dianggap bukan function, properti didalamnya tidak bisa dipakai
        console.log (`halo `);
    }
    displayNIM()
    {
        console.log (`Your NIM is $(this,NIM)`);
    }

    set studentScore(score){ //seter
        this.score = score;
    }

    get studentScore()//geter
    {return this.score;

    }
}

const john = new Student ("John", "Doe", "112233")
john.displayFullName();
john.displayNIM();
student.halo(); 

john.studentScore =90;
console.log (john.studentScore);
*/