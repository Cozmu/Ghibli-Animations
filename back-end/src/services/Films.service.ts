import { ModelStatic } from "sequelize";
import FilmsModel from "../database/models/Films.model";
import IFilms from "../database/models/interfaces/IFilms";

class FilmsService {
  constructor(
    private _filmsModel:ModelStatic<FilmsModel>,
  ) {}

  async getAllFilms():Promise<IFilms[]> {
    const result = await this._filmsModel.findAll();
    return result;
  }

}

export default FilmsService;