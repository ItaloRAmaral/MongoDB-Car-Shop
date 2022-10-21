import { Model, isValidObjectId } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

abstract class MongoModel <T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(item: T): Promise<T> {
    return this._model.create({ ...item });
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id: id });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async update(id: string, item: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndUpdate(id, item, { new: true });
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete(id);
  }
}

export default MongoModel;