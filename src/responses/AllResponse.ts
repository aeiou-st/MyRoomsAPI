import { IResponce } from "./IResponce";


class AllResponse implements IResponce {
  
  async successResponse({ res, message, data }: any): Promise<any> {
  return await res.status(200).json({
      status: "ok",
      statusCode: 200,
      isSuccess: true,
      message: message,
      data: data,
      error: null,
    });
  }

  async internalServerErrorResponse({ res, err }: any): Promise<any> {
    await res.status(500).json({
      status: "ok",
      statusCode: 500,
      isSuccess: false,
      message: "Internal server error",
      data: null,
      error: err,
    });
  }

  async conflictErrorResponse({ res, message }: any): Promise<any> {
   await  res.status(200).json({
      status: "ok",
      statusCode: 409,
      isSuccess: false,
      message: message,
      data: null,
      error: "conflict",
    });
  }

  async badRequestResponse({ res, err }: any): Promise<any> {
   await  res.status(200).json({
      status: "ok",
      statusCode: 400,
      isSuccess: false,
      message: err,
      data: null,
      error: "Bad Request Error is occured",
    });
  }

  async unauthorizedResponse({ res, message }: any): Promise<any> {
    await res.status(401).json({
      status: "unauthorized",
      statusCode: 401,
      isSuccess: false,
      message: message,
      data: null,
      error: null,
    });
  }

  async success(ResponceMessage:any, ResponceData:any): Promise<any> {
      return {
        ResponceCode:0,
        ResponceMessage: ResponceMessage,
        ResponceData:ResponceData
      }
  }

  async fail(ResponceMessage:any, ResponceData:any): Promise<any> {
      return {
        ResponceCode:1,
        ResponceMessage: ResponceMessage,
        ResponceData:ResponceData
      }
  }

}

export default AllResponse

