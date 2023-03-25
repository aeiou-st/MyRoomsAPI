import express, { Express, Request, Response } from "express";
import AllResponse from "../../../../responses/AllResponse";
import { RoleUseCase } from "./RoleUseCase";

class RoleController {
  constructor(
    private UserLogin: RoleUseCase,
    private allResponce: AllResponse
  ) {}

  async handle(request: Request, response: Response) {


    const result = await this.UserLogin.execute();
    if (result) {
      return response.status(200).send(result);
    } else {
      return response.status(500).send(result);
    }
  }
}

export { RoleController };
