import { Request, Response } from "express";
import FilmsService from "../services/Films.service";

class FilmsController {
  constructor(
    private _filmsService:FilmsService,
  ) {}

  async findAllFilms(_req:Request, res:Response):Promise<Response> {
    const result = await this._filmsService.getAllFilms();
    return res.status(200).json(result);
  }
}

export default FilmsController;