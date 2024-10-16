// var est de scope fonction(portee fonction)
function exampleVar(){
    var x=5;
    if(true){
        var x=10;
        console.log("la valeur a l interieur" + x);

    }
    console.log("la valeur de x en dehors de la condition" + x);
}
exampleVar();
// let est de scope bloc(portee bloc)
function exampleLet(){
    let y=5;
    if(true){
        var y=10;
        console.log("la valeur a l interieur" + y);

    }
    console.log("la valeur de x en dehors de la condition" + y);
}
exampleLet();

//const
function exampleConst(){
    const z=5;
    console.log("la valeur de z" + z);
    //z=10;
    



}
