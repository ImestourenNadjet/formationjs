function addition(a, b){
    return a + b;

}

console.log("l'addition des deux nbr (01) est :"+addition(1, 2));


const addition2 = (a, b)=> a + b;

console.log("l'addition des sdeux nbr(02) est : "+ addition(1, 2));

const bonsoirttlemonde = () => console.log("bnsr tt le monde ");
bonsoirttlemonde();


function nbrPaire(nombre){
    return nombre % 2=== 0;
}
console.log(nbrPaire(3));


const nbrPaire2 = (nombre)=> nombre % 2 === 0;


function multiplication(a, b){
    const result=a*b;
     return result; 
}

console.log("la multiplication des deux nbr est :"+multiplication(2, 3));

const multiplication2 = (a, b) => {
    const result=a*b;
     return result; 
};

console.log("la multiplication des deux nbr est :"+multiplication(2, 3));

