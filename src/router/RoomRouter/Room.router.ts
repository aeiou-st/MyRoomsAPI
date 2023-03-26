import express, { Express, Request, Response } from "express";
import { roomTypeController } from "../../moduals/room/UseCase/addRoomType";
import multer from "multer";
import path from "path";
import moment from "moment";
import bodyParser from "body-parser";
import { getRoomTypeController } from "../../moduals/room/UseCase/getRoomType";
import { addRoomDatailsController } from "../../moduals/room/UseCase/addRoomDetails";
import { getRoomDetailsController } from "../../moduals/room/UseCase/getRoomDetails";

const routerRoom = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'image') {
      cb(null, path.join(__dirname, "../../../public/roomtypeimage"));
    } else if (file.fieldname === 'room_cover_image') {
      cb(null, path.join(__dirname, "../../../public/coverimage"));
    }
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({
  storage: storage,
  fileFilter: (req: any, file: any, cb: any) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Only image file upload");
  }
});

routerRoom.post("/create_room_type", upload.single("image"), (request: Request, response: Response) => {
  roomTypeController.handle(request, response);
}
);

routerRoom.post("/add_room", upload.single("room_cover_image"), (request: Request, response: Response) => {
  addRoomDatailsController.handle(request, response);
}
);

routerRoom.get("/get_room_type", (request: Request, response: Response) => {
  getRoomTypeController.handle(request, response);
});

routerRoom.get("/get_room_details", (request: Request, response: Response) => {
  getRoomDetailsController.handle(request, response);
});

export { routerRoom };
