import express, { Express, Request, Response } from "express";
import { userController } from "../../moduals/User/UseCase/createUser";
import { userLoginController } from "../../moduals/User/UseCase/UserLogin";
import { getroleController } from "../../moduals/User/UseCase/getRole";

const routerUser = express.Router()


routerUser.post('/create_user',(request:Request,response:Response)=>{
    userController.handle(request,response)
})

routerUser.post('/login',(request:Request,response:Response)=>{
    userLoginController.handle(request,response)
})

routerUser.get('/get_role',(request:Request,response:Response)=>{
    getroleController.handle(request,response)
})



export {routerUser}