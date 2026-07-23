import express from "express"
import coffeeRouter from "./routers/coffeeRouter.js"

const App = express()

App.use("/coffee", coffeeRouter)


App.listen(8080, ()=>{
    console.log(`Listening to http://localhost:8080`);
    
})