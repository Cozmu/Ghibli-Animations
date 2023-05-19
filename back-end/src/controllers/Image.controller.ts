import { Request, Response } from "express";
import path from 'path'

class ImageController {
  async getImage(req:Request, res:Response):Promise<void> {
    const { url } = req.params;
    return res.sendFile(path.resolve(`imgs/${url}`));
  }
}

export default ImageController;
