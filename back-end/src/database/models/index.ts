import { Sequelize } from 'sequelize';
import * as config from '../config/dataBase';

const sequelize = new Sequelize(config);

export default sequelize;