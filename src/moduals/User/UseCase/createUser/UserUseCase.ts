import AllResponse from "../../../../responses/AllResponse";
import UserRepository from "../../repository/implementation/userRepository";

class UserUseCase {
  constructor(
    private UserUseCase: UserRepository,
    private allResponse: AllResponse
  ) {}

  async execute({
    full_name,
    email,
    phone_number,
    password,
    confirm_password,
    role_id,
    latitudes,
    longitudes,
  }: any) {
    const userMailCheck = await this.UserUseCase.checkMail({ email });
    if (userMailCheck) {
      return await this.allResponse.fail("This mail already register",[])
    }
    if (password === confirm_password) {
      const userData = await this.UserUseCase.addUser({
        full_name,
        email,
        phone_number,
        password,
        role_id,
        latitudes,
        longitudes,
      });

      if (userData) {
        return await this.allResponse.success('user create sucessfully',userData)
      } else {
        return await this.allResponse.fail('User create fail',[])
      }
    } else {
      return await this.allResponse.fail('both password dont match',[])
    }
  }
}

export { UserUseCase };
