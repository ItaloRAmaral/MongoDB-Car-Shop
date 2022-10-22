import { IService } from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycleService: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motorcycleService = model;
  }

  public async create(item: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(item);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._motorcycleService.create(parsed.data);
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycleService.readOne(_id);
    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycle;
  }

  public async read(): Promise<IMotorcycle[]> {
    return this._motorcycleService.read();
  }

  public async update(_id: string, item: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(item);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updatedMotorcycle = await this._motorcycleService.update(_id, parsed.data);
    if (!updatedMotorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return updatedMotorcycle;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycleService.delete(_id);
    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycle;
  }
}

export default MotorcycleService;
