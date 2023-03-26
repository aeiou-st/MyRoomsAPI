import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import bcrypt, { hash } from "bcrypt";

class GetRoomDetailsUseCase {
  constructor(
    private getRoomDetails: RoomRepostroy,
    private allResponce: AllResponse
  ) { }

  async execute() {
    const getRoomTypeDetails = await this.getRoomDetails.getRoomDetails();

    if (getRoomTypeDetails) {
      return await this.allResponce.success("Get All Details Room Type", getRoomTypeDetails);
    } else {
      return await this.allResponce.fail("Get All Details Room Type fail", []);
    }
  }
}

export { GetRoomDetailsUseCase };
