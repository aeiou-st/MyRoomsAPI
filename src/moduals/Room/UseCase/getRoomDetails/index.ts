import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import { GetRoomDetailsUseCase } from "./GetRoomDetailsUseCase";
import { GetRoomDetailsController } from "./GetRoomDetailsController";

const roomRepostroy = new RoomRepostroy();
const allResponce = new AllResponse();
const getRoomDetailsUseCase = new GetRoomDetailsUseCase(roomRepostroy, allResponce);
const getRoomDetailsController = new GetRoomDetailsController(getRoomDetailsUseCase, allResponce);

export { getRoomDetailsController };
