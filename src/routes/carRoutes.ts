import { Router } from 'express';
import CarController from '../controllers/carController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const carRouter = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRouter.post('/cars', (req, res) => carController.create(req, res));
carRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));
carRouter.get('/cars', (req, res) => carController.read(req, res));
carRouter.put('/cars', (req, res) => carController.update(req, res));

export default carRouter;