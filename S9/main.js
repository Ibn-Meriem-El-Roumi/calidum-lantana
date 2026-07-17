// var studentName = "Mohamed"
// let studentAge = 23
// const studentFamilyName = "Bourahma"
// let isGraduated = false

// console.log("My name is ${What's up}");
// console.log(typeof "My name is ${studentAge}");
// console.log(`My name is ${1>2}`);
// console.log(typeof `My name is ${studentName}`);

// console.log(`My age is ${2026-1997}`);

// console.log(typeof isGraduated);

// Arithmitic Operators
// console.log(12%2);

// Logical Operators
// let count = 0
// count++
// console.log(count);
// console.log("Hello"+ "Everyone"+34);

// let minimumAge = 20
// let myAge = 21
// if(myAge >= minimumAge) {
//     console.log("You can enter the website");
// }else{
//     if(true){
//         console.log("You can NOT enter the website");

//     }else{

//     }
// }


// Switch case
// Accepted || Rejected || Pending
// let bourse = "idk"
// switch (bourse) {
//     case "Accepted":
//         console.log("You will be paid in full, ya Raouf");
//         break;
//     case "Rejected":
//         console.log("You will NOT be paid in full, ya Ritaj");
//         break;
//     case "Pending":
//         console.log("You will keep waiting, ya Sahar");
//         break;

//     default:
//         console.log("Meh");
//         break;
// }



// let students = ["Ritej", "Sahar", "Raouf"]
// console.log(students.length);


// // Loops
// for (let i=0 ; i <= 3 ; i++ ) {
//     console.log(`Hello, my number is ${i}`);
    
// }

// for (let i=0 ; i <= 1000 ; i++ ) {
//     console.log(`Hello, my number is ${i}`);
// }

// let i = 0
// while(i<20){
//     console.log(`Hello, my number is ${i}`);
//     i++
// }



// functions
// const colorInput = document.querySelector("#color")
// const fontSizeInput = document.querySelector("#font-size")



// function changeBodyStyle(desiredElement){
//     const element = document.querySelector(desiredElement) // const body = document.querySelector("h1")  
//     element.style.backgroundColor = colorInput.value
//     element.style.fontSize = `${fontSizeInput.value}px`
// }

// function changeBigTitle(newTitle){
//     const heading1 = document.querySelector("h1")
//     heading1.textContent = newTitle
// }

// changeBigTitle("Hello from BrainerX")



// // let studentName = "Sahar"
// // let studentAge = 18
// // let studentField = "Pharmacy"
// // let studentHobbies = ["Basketball", "Eating Sushi", "Bullying people"]
// // let isGraduated = false

// const sahar = {
//     name: "Sahar",
//     age: 18,
//     field: "Pharmacy",
//     hobbies: ["Basketball", "Eating Sushi", "Bullying people"],
//     isGreaduated: false
// }
// sahar.hobbies = "No hobbies"

// sahar = "Meh"

// console.log(sahar.hobbies);

const nameInput = document.querySelector("#name")
const speciesInput = document.querySelector("#species")

const button = document.querySelector("button")



function addPet(pet){
    const pets = document.querySelector("#pets")
    pets.innerHTML += `
        <div class="pet">
            <h1>${pet.name}</h1>
            <h4>${pet.species}</h4>
        </div>
    `
}

button.addEventListener("click", function(e){
    // e.preventDefault()
    let newPet = {
        name: nameInput.value,
        species: speciesInput.value
    }
    addPet(newPet)
})


// Step 1: Select all necessary element
const x = document.querySelector("#name")
const s = document.querySelector("#species")
const btn = document.querySelector("button")


// STep 2: add an event listner to the burron
btn.addEventListener("click", function(e){
    e.preventDefault()
    // Step 3: Gather the INPUT VALUES in one object
    let myPet = {
        name: x.value,
        species: s.value
    }

    // Step 4: call the adding function inside the event listner
    addPet(myPet)

})




function addPet(pet){
    const pets = document.querySelector("#pets")
    pets.innerHTML += `
        <div class="pet">
            <h1>${pet.name}</h1>
            <h4>${pet.species}</h4>
        </div>
    `
}







