import express, { Express, Request, Response } from "express";
import AllResponse from "../../../../responses/AllResponse";
import { AddRoomDetailsUseCase } from "./AddRoomDetailsUseCase";
class AddRoomDatailsController {
  constructor(
    private roomType: AddRoomDetailsUseCase,
    private allResponce: AllResponse
  ) { }

  async handle(request: Request, response: Response) {

    const { user_id, room_type_id, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount } = request.body
    const room_cover_image = request.file?.filename


    const addData = {
      user_id: user_id,
      room_type_id: room_type_id,
      room_cover_image: room_cover_image,
      address_1: address_1,
      address_2: address_2,
      bethroom: bethroom,
      room: room,
      about: about,
      monthly_amount: monthly_amount,
      deposite_amount: deposite_amount,
    }

    if (room_cover_image) {
      addData.room_cover_image = room_cover_image
    }

    const result = await this.roomType.execute(addData);
    if (result) {
      return response.status(200).send(result);
    } else {
      return response.status(500).send(result);
    }
  }
}

export { AddRoomDatailsController };
