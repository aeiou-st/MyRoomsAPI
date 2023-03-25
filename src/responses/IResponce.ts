interface IResponce{
    unauthorizedResponse({res,message}:any):Promise<any>
    badRequestResponse({res,err}:any):Promise<any>
    conflictErrorResponse({res,message}:any):Promise<any>
    internalServerErrorResponse({res, err}:any):Promise<any>
    successResponse({res,message,data}:any):Promise<any>

    success(ResponceMessage:any,ResponceData:any):Promise<any>
    fail(ResponceMessage:any,ResponceData:any):Promise<any>
}

export {IResponce}