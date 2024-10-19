const titre = document.getElementsByClassName("title");
console.log(titre,"recuperer toutes les elements contenant le  title");

const h = document.getElementsByTagName("h2");
console.log(h,"recuperer toutes les elements selon le nom de la balise");

const id = document.getElementById("demo");
document.getElementById("demo").style.color="blue";
console.log(id,"recuperer toutes les elements selon leur id");

document.getElementById("demo").innerText= "text modifie avec innertext";
function salutation(){
    if(id.innerHTML==="Libre pour tout le monde"){
        id.innerHTML="bonjour tout le monde";
    }else{
         id.innerHTML="Libre pour tout le monde";
    }
}
id.onclick=salutation;
const booklist= document.querySelector("#liste livre li:nth-child(2) .name");
console.log("notre element est  " ,booklist);
const mySelector=document.querySelectorAll("#liste livre .name");
console.log("mes elements sont " ,mySelector);
//document.getElementById("demo").innerHTML="<h2></h2>";
// le bom manipuler les fenetre  en mobile 
