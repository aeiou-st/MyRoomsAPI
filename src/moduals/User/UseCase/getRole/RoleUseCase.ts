import AllResponse from "../../../../responses/AllResponse";
import UserRepository from "../../repository/implementation/userRepository";
import bcrypt, { hash } from 'bcrypt'

class RoleUseCase {
  constructor(
    private UserLogin: UserRepository,
    private allResponce: AllResponse
  ) {}

  async execute() {
      const getRole = await this.UserLogin.getRole()

      if(getRole){
        return await this.allResponce.success('Get All User Role',getRole)
      }else{
        return await this.allResponce.fail('Role get fail',[])
      }
  }
}

export { RoleUseCase };
