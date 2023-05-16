import { App } from './app';
import 'dotenv';
import 'dotenv/config';

const PORT = process.env.BE_PORT || 3001;
new App().start(PORT);