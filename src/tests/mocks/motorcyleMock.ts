import { IMotorcycle  } from '../../interfaces/IMotorcycle';

const motorcycleMock:IMotorcycle = {
  model: 'Honda',
  year: 2020,
  color: 'Vermelho',
  buyValue: 1000000,
  category: 'Street',
  engineCapacity: 1000
}

const motorcycleMockWithId:IMotorcycle & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Honda',
  year: 2020,
  color: 'Vermelho',
  buyValue: 1000000,
  category: 'Street',
  engineCapacity: 1000
}

export { motorcycleMock, motorcycleMockWithId };