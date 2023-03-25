

interface IUserinterface {

    addUser({full_name,email,phone_number,password,role_id,latitudes,longitudes}:any):Promise<any>
    checkMail({email}:any):Promise<any>
    login({email,password}:any):Promise<any>
    getRole():Promise<any>
}

export default IUserinterface