
//       Task 3

function Human(name, age, dep){
    this.name = name;
    this.age = age; 
    this.departament = dep; 
    
} 

const human1 = new Human('John', 25, 'bookkeeping');  

Human.prototype.toString = function humanToString() {
    return `Hi, my name is ${this.name}, I'm ${this.age} years old and I'm from 
    ${this.dep} department.`; 
  } 

console.log( `${human1}`  );
 

