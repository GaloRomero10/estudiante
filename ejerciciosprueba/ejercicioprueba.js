'use strict'
//Ejercicio1
function Student(name,mail,prom) {

    this.name = name; 
    this.mail = mail;
    this.prom = prom; 

    this.validaPromedio = function(){
        if(studentOne.prom >= 70){

          return ("Aprobado");
        }else{
            return alert("Reprobado");
        }
        
    }

}
let studentOne = new Student("Galo Romero","galoromero@sudamericano.edu.ec",70);

studentOne.validaPromedio();

let end = studentOne.mail.indexOf('@');
alert(studentOne.mail.slice(0,end));

//Ejercicio2

let ages= ["10","45","47"];

ages.splice(1,0,"22")

for(let i=0; i<ages.length;i++){

    if(ages[i]>25){
        alert(ages[i]);
    }
}