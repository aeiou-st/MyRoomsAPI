import AllResponse from "../../../../responses/AllResponse";
import UserRepository from "../../repository/implementation/userRepository";
import bcrypt, { hash } from 'bcrypt'

class UserLoginUseCase {
  constructor(
    private UserLogin: UserRepository,
    private allResponce: AllResponse
  ) {}

  async execute({ email, password }: any) {
    const checkMail = await this.UserLogin.checkMail({ email });

    if (checkMail == null) {
      return await this.allResponce.fail("Email does not exsting", []);
    }
    
    const passwordMatch  = await bcrypt.compare(password,checkMail.dataValues.password) 
  
    
    if (passwordMatch == true) {
      const loginData = await this.UserLogin.login({ email, password });
      if (loginData) {
        return await this.allResponce.success("login sucessfully", loginData);
      } else {
        return await this.allResponce.fail("login fail", []);
      }
    }else{
      return await this.allResponce.fail('password does not match',[])
    }
  }
}

export { UserLoginUseCase };
