let string = "Hello World";
let number = 21;
let boolean = true;
let array = [1, 2, 3];
let object = {
    name: "John",
    age: 21,
    techos: ["html", "css", "js"],
    admin: false,

};

let data =  [
    {
        name: "John",
        age: 21,
        techos: ["html", "css", "js"],
        admin: false,
    
    },

    {
        name: "kalid",
        age: 26,
        techos: ["html", "css", "js", "react"],
        admin: true,
    
    },

    
    {
        name: "coco",
        age: 25,
        techos: ["html", "css", "js", "php"],
        admin: false,
    
    },
];

// console.log(data[0].name);

// structure de controle
  if (data[0].age < data[1].age) {
    console.log( data[1].name + " est plus vieux que " + data[0].name);
  } else {
    console.log( data[0].name + " est plus vieux que " + data[1].name);
  }
  // while

  let w = 0;
    while (w < 10) {
        w++;
        // console.log(w);
    };

// for
for ( const user of data) {
    // document.body.innerHTML += `<li> ${user.name} - ${user.age} ans </li>`;
}
    
// on declarenla valeur de i / jusqu'ou non boucle / on incremente i si,la condition est remplie

for (i = 0; i < data.length; i++) {
    // document.body.innerHTML += `<li> ${data[i].name} - ${data[i].age} ans </li>`;
}

 
 
 document.body.addEventListener('click', (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
        case "js":
            document.body.style.background = "red";
            break;
        case "php":
            document.body.style.background = "blue";
        break;
        case "ruby":
            document.body.style.background = "green";
        break;
        default:
            null;
    }
})