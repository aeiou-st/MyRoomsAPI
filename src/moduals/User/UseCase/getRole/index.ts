import AllResponse from "../../../../responses/AllResponse";
import UserRepository from "../../repository/implementation/userRepository";
import { RoleController } from "./RoleController";
import { RoleUseCase } from "./RoleUseCase";


const userRepository = new UserRepository()
const allResponce = new AllResponse()
const roleUseCase = new RoleUseCase(userRepository,allResponce)
const getroleController = new RoleController(roleUseCase,allResponce)


export { getroleController}