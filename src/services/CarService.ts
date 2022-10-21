import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _carService: IModel<ICar>;
  
  constructor(model: IModel<ICar>) {
    this._carService = model;
  }

  public async create(item: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(item);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._carService.create(parsed.data);
  }

  public async readOne(_id: string): Promise<ICar> {
    const car = await this._carService.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }

  public async read(): Promise<ICar[]> {
    return this._carService.read();
  }

  public async update(_id: string, item: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(item);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updatedCar = await this._carService.update(_id, parsed.data);
    if (!updatedCar) throw new Error(ErrorTypes.EntityNotFound);

    return updatedCar;
  }

  public async delete(_id: string): Promise<ICar> {
    const car = await this._carService.delete(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }
}

export default CarService;