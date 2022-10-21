import { Request, Response, NextFunction, Router } from 'express';
import CarController from '../controllers/carController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const carRouter = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRouter.post('/cars', (req: Request, res: Response, next: NextFunction) => 
  carController.create(req, res, next));
carRouter.get('/cars/:id', (req, res, next) => carController.readOne(req, res, next));
carRouter.get('/cars', (req, res, next) => carController.read(req, res, next));
carRouter.put('/cars/:id', (req, res, next) => carController.update(req, res, next));
carRouter.delete('/cars/:id', (req, res, next) => carController.delete(req, res, next));

export default carRouter;