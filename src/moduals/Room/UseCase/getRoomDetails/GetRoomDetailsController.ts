import express, { Express, Request, Response } from "express";
import AllResponse from "../../../../responses/AllResponse";
import { GetRoomDetailsUseCase } from "./GetRoomDetailsUseCase";
class GetRoomDetailsController {
  constructor(
    private getRoomDetails: GetRoomDetailsUseCase,
    private allResponce: AllResponse
  ) { }

  async handle(request: Request, response: Response) {
    const result = await this.getRoomDetails.execute();
    if (result) {
      return response.status(200).send(result);
    } else {
      return response.status(500).send(result);
    }
  }
}

export { GetRoomDetailsController };
