import AllResponse from "../../../../responses/AllResponse";
import { RoomRepostroy } from "../../repository/implementation/roomRepostroy";
import bcrypt, { hash } from "bcrypt";

class AddRoomDetailsUseCase {
  constructor(
    private roomType: RoomRepostroy,
    private allResponce: AllResponse
  ) { }

  async execute({ user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount, }: any) {
    const getRoomTypeDetails = await this.roomType.addRoomDetails({ user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount });

    if (getRoomTypeDetails) {
      return await this.allResponce.success("create room details successfully", getRoomTypeDetails);
    } else {
      return await this.allResponce.fail("create room details fail", []);
    }
  }
}

export { AddRoomDetailsUseCase };
