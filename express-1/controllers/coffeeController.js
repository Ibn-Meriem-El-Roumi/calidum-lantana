

function createCoffee(req, res){
    res.send("Creating a new item in the menu")
}

function getAllCoffees(req, res){
    res.send("Getting The Menu")
}

function getCoffeeById(req, res){
    res.send("Getting the coffee with the id="+req.params.id)

}

function deleteCoffeeById(req, res){
    res.send("Deleting a coffee")
}
export {
    createCoffee,
    getAllCoffees,
    getCoffeeById,
    deleteCoffeeById
}