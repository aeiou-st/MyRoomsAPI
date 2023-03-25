import AllResponse from "../../../../responses/AllResponse";
import UserRepository from "../../repository/implementation/userRepository";
import { UserController } from "./UserController";
import { UserUseCase } from "./UserUseCase";

const userRepository = new UserRepository();
const allresponse = new AllResponse()
const userUseCase = new UserUseCase(userRepository,allresponse);
const userController = new UserController(userUseCase);

export { userController };
