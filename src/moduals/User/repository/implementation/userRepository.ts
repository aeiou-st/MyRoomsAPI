import IUserinterface from "../IUser";
import jwt,{Secret} from 'jsonwebtoken'
import { User } from "../../model/User";
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { Role } from "../../model/Role";
dotenv.config()



class UserRepository implements IUserinterface {
  async addUser({
    full_name,
    email,
    phone_number,
    password,
    role_id,
    latitudes,
    longitudes,
  }: any): Promise<any> {
    const userDetails = {
      full_name,
      email,
      phone_number,
      password,
      role_id,
      latitudes,
      longitudes,
    };

    if(password){
      userDetails.password = await bcrypt.hash(password,12)
    }


    const createUser = await User.create(userDetails);
    if (createUser) {
      return createUser;
    } else {
      return null;
    }
  }

  async checkMail({ email }: any): Promise<any> {
    const userExstingThisMail = await User.findOne({
      where: { email: email },
    });
    return userExstingThisMail;
  }



  async login({ email, password }: any): Promise<any> {
    const user = await User.findOne({
      where:{email:email}
    })
    
    const JWT_SCRECT_KEY1:any = process.env.JWT_SCRECT_KEY
    
    const token = jwt.sign({email,password},JWT_SCRECT_KEY1,{
      expiresIn:86400
    })
    return {
      userDetails: user,
      token:token
    }
  }


  async getRole(): Promise<any> {
    const getRole = await Role.findAll()
    return getRole
  }
}

export default UserRepository;
