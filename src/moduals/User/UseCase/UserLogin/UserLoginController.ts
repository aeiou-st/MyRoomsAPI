import express, { Express, Request, Response } from "express";
import AllResponse from "../../../../responses/AllResponse";
import { UserLoginUseCase } from "./UserLoginUseCase";

class UserLoginController {
  constructor(
    private UserLogin: UserLoginUseCase,
    private allResponce: AllResponse
  ) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginData = {
      email: email,
      password: password,
    };

    const result = await this.UserLogin.execute(loginData);
    if (result) {
      return response.status(200).send(result);
    } else {
      return response.status(500).send(result);
    }
  }
}

export { UserLoginController };
