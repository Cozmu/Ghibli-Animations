import express from 'express';
import ImageRouter from './routers/Image.router';
import FilmsRouter from './routers/Films.router';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.Routers();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private Routers():void {
    this.app.use('/images', ImageRouter);
    this.app.use('/films', FilmsRouter);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };