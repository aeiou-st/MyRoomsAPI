interface IRoom {
  addRoomType({ room_type_name, image }: any): Promise<any>;
  getRoomType(): Promise<any>;
  addRoomDetails({ user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount, }: any): Promise<any>
  getRoomDetails(): Promise<any>;
}

export { IRoom };
