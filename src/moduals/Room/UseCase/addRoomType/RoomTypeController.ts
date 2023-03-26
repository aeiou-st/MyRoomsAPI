import express, { Express, Request, Response } from "express";
import AllResponse from "../../../../responses/AllResponse";
import { RoomTypeUseCase } from "./RoomTypeUseCase";

class RoomTypeController {
  constructor(
    private roomType: RoomTypeUseCase,
    private allResponce: AllResponse
  ) {}

  async handle(request: Request, response: Response) {
    const { room_type_name, order } = request.body;
    const image: any = request.file?.filename;

    const addData = {
      room_type_name: room_type_name,
      image: image,
      order: order,
    };

    console.log({ addData });

    if (image) {
      addData.image = image;
    }

    const result = await this.roomType.execute(addData);
    if (result) {
      return response.status(200).send(result);
    } else {
      return response.status(500).send(result);
    }
  }
}

export { RoomTypeController };
