import fs from "fs"

const args = process.argv.splice(2)
// console.log(args);

// operation: add, list, delete
// add: nameOfMed form dose

const operation = args[0]
const medName = args[1]
const medForm = args[2]
const medDose = args[3]

const fileName = "database.txt"

if(operation === "add"){
    addMed(medName, medForm, medDose)
}

if(operation === "list"){
    listMeds()
}


function listMeds(){
    let allMeds = fs.readFileSync(fileName, {encoding: "utf-8"})
    console.log(allMeds);
}

function addMed(name, form, dose){
    fs.appendFileSync(fileName, `${name}: ${form} => ${dose}\n`, {encoding: "utf-8"})
}