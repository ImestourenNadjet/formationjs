// var est de scope fonction(portee fonction portée fonctionnelle)
function exampleVar(){
    var x = 5;
    if(true){
        var x = 10; // Cela réécrit la valeur de `x` dans toute la fonction
        console.log("La valeur à l'intérieur : " + x);// Affiche 10

    }
    console.log("la valeur de x en dehors de la condition" + x);// Affiche également 10
}



// let est de scope bloc(portée bloc)
function exampleLet(){
    let y = 10;
    if(true){
        let y = 20; // Ceci crée une nouvelle variable `y` dans le bloc `if`   
        console.log("la valeur a l interieur : " + y);// Affiche 20

    }
    console.log("la valeur de y en dehors de la condition : " + y);// Affiche 10
}
exampleLet();


//const (valeur constante)
function exampleConst(){
    const z = 5;
    console.log("la valeur de z : " + z); // Affiche 5
     // z = 10; // Cela provoquerait une erreur car z est une constante
}
    exampleConst();
