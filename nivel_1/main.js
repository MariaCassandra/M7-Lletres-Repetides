 //Ejercicio 1
var letras = ["M", "A", "R", "J", "A"];

for (var i = 0; i < letras.length; i++) {
console.log(letras[i]);
}


//Ejercicio 2
 const nombre = "MAR1A";

const vocal = nombre.match(/[aeiou]/gi);
       
console.log(`Partim del nom ${nombre}`);
        
for (let i=0; i < nombre.length; i++) {
           
if(nombre[i].match(/[aeiou]/i))
 {
console.log(`He trobat la VOCAL: ${nombre[i]}`);
} 
            
else if(nombre[i].match(/(?![aeiou])[a-z]/i))
{
console.log(`He trobat la CONSONANT: ${nombre[i]}`); 
}

else if(nombre[i].match(/[0-9]/))
{
console.log(`Els noms de persones no contenen el número: ${nombre[i]}`);  
}
}

  
//Ejercicio 3
const fullName = "MarjaCassandraReponen";
const m = new Map();
let vegades = 0;
        
console.log(`Partim del nom ${fullName}`);

for (let i=0; i < fullName.length; i++) {
           
for (let j=0; j < fullName.length; j++) { 
if(fullName[i].match(fullName[j]))
{
vegades = vegades + 1;
} 
m.set(fullName[i], vegades);  
} 
vegades = 0;
          
}

for (const [k, v] of m.entries()) {
console.log(`${k.toUpperCase()}:`, v)
}
  

//Ejercicio 4
let firstName = "Maria";
let surName = "Cassandra";
let completeName = firstName + " " + surName;
       
for(let i=0; i < completeName.length; i++)
{
console.log(`${i}: "${completeName[i].toUpperCase()}"`);
} 
        console.log(`lenght: ${completeName.length}`);


