import express, { Express, Request, Response } from "express";
import AllResponse from "../../../../responses/AllResponse";
import { GetRoomTypeUseCase } from "./GetRoomTypeUseCase";
class GetRoomTypeController {
  constructor(
    private roomType: GetRoomTypeUseCase,
    private allResponce: AllResponse
  ) {}

  async handle(request: Request, response: Response) {
    const result = await this.roomType.execute();
    if (result) {
      return response.status(200).send(result);
    } else {
      return response.status(500).send(result);
    }
  }
}

export { GetRoomTypeController };
