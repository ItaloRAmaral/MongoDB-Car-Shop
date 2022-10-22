import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request,
    res: Response<IMotorcycle>,
    next: NextFunction,
  ) {
    try {
      const results = await this._service.create(req.body);
  
      return res.status(201).json(results);
    } catch (error) {
      next(error); 
    }
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.readOne(req.params.id);
  
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async read(
    _req: Request,
    res: Response<IMotorcycle[]>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.read();
  
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.update(req.params.id, req.body);
  
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
    next: NextFunction,
  ) {
    try {
      const result = await this._service.delete(req.params.id);
  
      return res.status(204).json(result);
    } catch (error) {
      next(error);
    }
  }
}