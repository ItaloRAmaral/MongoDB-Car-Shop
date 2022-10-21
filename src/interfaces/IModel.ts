export interface IModel<T> {
  create: (item: T) => Promise<T>;
  readOne(id: string): Promise<T | null>;
  read(): Promise<T[]>;
  update(id: string, item: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}