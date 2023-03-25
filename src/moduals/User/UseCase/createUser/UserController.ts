import express, { Express, Request, Response } from "express";
import { UserUseCase } from "./UserUseCase";
import AllResponse from "../../../../responses/AllResponse";

class UserController {
  constructor(private UserController: UserUseCase) {}

  async handle(request: Request, response: Response) {
    const {
      full_name,
      email,
      phone_number,
      password,
      confirm_password,
      role_id,
      latitudes,
      longitudes,
    } = request.body;

    const userData = {
      full_name: full_name,
      email: email,
      phone_number: phone_number,
      password: password,
      confirm_password:confirm_password,
      role_id: role_id,
      latitudes: latitudes,
      longitudes: longitudes,
    };



    const addUser = await this.UserController.execute(userData);

    if(addUser == null){
        return response.status(500).send(addUser)
      }else{
       return response.status(200).send(addUser)
       

    }
  

  }
}

export { UserController };
