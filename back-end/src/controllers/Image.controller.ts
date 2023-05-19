import { Request, Response } from "express";
import path from 'path'

class ImageController {
  async getImage(req:Request, res:Response):Promise<void> {
    const { url } = req.params;
    return res.sendFile(path.resolve(__dirname, `../../img/${url}`));
  }
}

export default ImageController;
