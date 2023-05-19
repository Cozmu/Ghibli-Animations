import { Router } from 'express';
import FilmsController from '../controllers/Films.controller';
import FilmsService from '../services/Films.service';
import FilmsModel from '../database/models/Films.model';

const filmsService = new FilmsService(FilmsModel);
const filmsController = new FilmsController(filmsService);

const router = Router();

router.get('/', filmsController.findAllFilms.bind(filmsController));

export default router