import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import bcrypt, { hash } from "bcrypt";

class RoomTypeUseCase {
  constructor(
    private roomType: RoomRepostroy,
    private allResponce: AllResponse
  ) {}

  async execute({ room_type_name, image, order }: any) {
    const createRoomType = await this.roomType.addRoomType({
      room_type_name,
      image,
      order,
    });

    if (createRoomType) {
      return await this.allResponce.success("create room type successfully", createRoomType);
    } else {
      return await this.allResponce.fail("create room type fail", []);
    }
  }
}

export { RoomTypeUseCase };
