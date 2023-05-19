import { Request, Response } from "express";
import path from 'path'

class ImageController {
  async getImage(req:Request, res:Response):Promise<void> {
    const { url } = req.params;
    const imagePath = path.resolve(__dirname, '../../imgs', url);
    console.log(imagePath);

    return res.sendFile(imagePath);
  }
}

export default ImageController;
