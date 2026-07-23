import express from "express"
import {createCoffee, getAllCoffees, getCoffeeById, deleteCoffeeById} from "../controllers/coffeeController.js"

const coffeeRouter = express.Router()

coffeeRouter.get("/", getAllCoffees)

coffeeRouter.get("/:id", getCoffeeById)

coffeeRouter.post("/create", createCoffee)

export default coffeeRouter