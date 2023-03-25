import AllResponse from "../../../../responses/AllResponse";
import UserRepository from "../../repository/implementation/userRepository";
import { UserLoginController } from "./UserLoginController";
import { UserLoginUseCase } from "./UserLoginUseCase";


const userRepository = new UserRepository()
const allResponce = new AllResponse()
const userLoginUseCase = new UserLoginUseCase(userRepository,allResponce)
const userLoginController = new UserLoginController(userLoginUseCase,allResponce)


export {userLoginController}