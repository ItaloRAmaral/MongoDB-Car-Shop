import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(
    req: Request,
    res: Response<ICar>,
    next: NextFunction,
  ) {
    try {
      // const { model, year, color, buyValue, doorsQty, seatsQty } = req.body;
      // const car = { model, year, color, buyValue, doorsQty, seatsQty };
      // console.log('createControler', car);
      const results = await this._service.create(req.body);
  
      return res.status(201).json(results);
    } catch (error) {
      next(error); 
    }
  }

  public async readOne(
    req: Request,
    res: Response<ICar>,
    _next: NextFunction,
  ) {
    const result = await this._service.readOne(req.params.id);

    return res.status(200).json(result);
  }

  public async read(
    req: Request,
    res: Response<ICar[]>,
    _next: NextFunction,
  ) {
    const result = await this._service.read();

    return res.status(200).json(result);
  }

  public async update(
    req: Request,
    res: Response<ICar>,
    _next: NextFunction,
  ) {
    const { model, year, color, buyValue, doorsQty, seatsQty } = req.body;
    const car = { model, year, color, buyValue, doorsQty, seatsQty };

    const result = await this._service.update(req.params.id, car);

    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<ICar>,
    _next: NextFunction,
  ) {
    const result = await this._service.delete(req.params.id);

    return res.status(200).json(result);
  }
}