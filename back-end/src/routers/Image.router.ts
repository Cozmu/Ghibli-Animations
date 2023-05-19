import { Router } from 'express';
import ImageController from '../controllers/Image.controller';

const router = Router();

const imageController = new ImageController();

router.get('/:url', imageController.getImage);

export default router