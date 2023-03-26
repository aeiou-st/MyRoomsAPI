import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import { RoomTypeController } from "./RoomTypeController";
import { RoomTypeUseCase } from "./RoomTypeUseCase";

const roomRepostroy = new RoomRepostroy();
const allResponce = new AllResponse();
const roomTypeUseCase = new RoomTypeUseCase(roomRepostroy, allResponce);
const roomTypeController = new RoomTypeController(roomTypeUseCase, allResponce);

export { roomTypeController };
