import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import { AddRoomDetailsUseCase } from "./AddRoomDetailsUseCase";
import { AddRoomDatailsController } from "./AddRoomDetailsController";

const roomRepostroy = new RoomRepostroy();
const allResponce = new AllResponse();
const addRoomDetailsUseCase = new AddRoomDetailsUseCase(roomRepostroy, allResponce);
const addRoomDatailsController = new AddRoomDatailsController(addRoomDetailsUseCase, allResponce);

export { addRoomDatailsController };
