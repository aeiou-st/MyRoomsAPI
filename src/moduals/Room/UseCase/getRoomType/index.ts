import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import { GetRoomTypeUseCase } from "./GetRoomTypeUseCase";
import { GetRoomTypeController } from "./GetRoomTypeController";

const roomRepostroy = new RoomRepostroy();
const allResponce = new AllResponse();
const getRoomTypeUseCase = new GetRoomTypeUseCase(roomRepostroy, allResponce);
const getRoomTypeController = new GetRoomTypeController(
  getRoomTypeUseCase,
  allResponce
);

export { getRoomTypeController };
