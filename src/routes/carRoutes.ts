import { Router } from 'express';
import CarController from '../controllers/carController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const carRouter = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRouter.post('/cars', (req, res) => carController.create(req, res));

export default carRouter;