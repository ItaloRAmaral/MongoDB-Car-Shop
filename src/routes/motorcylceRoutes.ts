import { Request, Response, NextFunction, Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleService from '../services/MotorcycleService';
import MotorcycleModel from '../models/MotorcycleModel';

const motorcycleRouter = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

const ID_ROUTE = '/motorcycles/:id';

motorcycleRouter.post('/motorcycles', (req: Request, res: Response, next: NextFunction) => 
  motorcycleController.create(req, res, next));

motorcycleRouter.get(ID_ROUTE, (req, res, next) => 
  motorcycleController.readOne(req, res, next));

motorcycleRouter.get('/motorcycles', (req, res, next) => 
  motorcycleController.read(req, res, next));

motorcycleRouter.put(ID_ROUTE, (req, res, next) => 
  motorcycleController.update(req, res, next));

motorcycleRouter.delete(ID_ROUTE, (req, res, next) => 
  motorcycleController.delete(req, res, next));

export default motorcycleRouter;
