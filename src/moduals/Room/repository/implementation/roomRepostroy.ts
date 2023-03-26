import { User } from "../../../User/model/User";
import { RoomDetails } from "../../model/RoomDetails";
import { RoomType } from "../../model/RoomType";
import { IRoom } from "../IRoom";

class RoomRepostroy implements IRoom {
  async addRoomType({ room_type_name, image, order }: any): Promise<any> {
    const getData = {
      room_type_name: room_type_name,
      image: image,
      order: order,
    };
    const createRoomType = await RoomType.create(getData);

    return createRoomType;
  }

  async getRoomType(): Promise<any> {
    const getRoomType = await RoomType.findAll({
      order: [["order", "ASC"]],
      include: {
        model: RoomDetails
      }
    });
    return getRoomType;
  }


  async addRoomDetails({ user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount, }: any): Promise<any> {
    const addRoomDetails = {
      user_id,
      room_type_id,
      room_cover_image,
      address_1,
      address_2,
      bethroom,
      room,
      about,
      monthly_amount,
      deposite_amount,
    }

    const roomCreate = await RoomDetails.create(addRoomDetails)
    return roomCreate


  }

  async getRoomDetails(): Promise<any> {

    const getRoomAll = await User.findAll({
      include: {
        model: RoomDetails
      }
    })
    return getRoomAll
  }
}

export { RoomRepostroy };
