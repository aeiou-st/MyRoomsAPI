import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import bcrypt, { hash } from "bcrypt";

class GetRoomTypeUseCase {
  constructor(
    private roomType: RoomRepostroy,
    private allResponce: AllResponse
  ) {}

  async execute() {
    const getRoomTypeDetails = await this.roomType.getRoomType();

    if (getRoomTypeDetails) {
      return await this.allResponce.success("Get All Details Room Type", getRoomTypeDetails);
    } else {
      return await this.allResponce.fail("Get All Details Room Type fail", []);
    }
  }
}

export { GetRoomTypeUseCase };
