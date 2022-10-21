import { ICar } from '../../interfaces/ICar';

const carMock:ICar = {
  model: 'Ferrari',
  year: 2020,
  color: 'Vermelho',
  buyValue: 1000000,
  doorsQty: 2,
  seatsQty: 4

}

const carMockWithId:ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Ferrari',
  year: 2020,
  color: 'Vermelho',
  buyValue: 1000000,
  doorsQty: 2,
  seatsQty: 4
}

export { carMock, carMockWithId };