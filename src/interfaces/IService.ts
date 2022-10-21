export interface IService<T> {
  create(item: unknown): Promise<T>;
  readOne(id: string): Promise<T>;
  read(): Promise<T[]>;
  update(id: string, item: unknown): Promise<T>;
  delete(id: string): Promise<T>;
}