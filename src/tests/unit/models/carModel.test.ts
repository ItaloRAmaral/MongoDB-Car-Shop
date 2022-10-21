import { expect } from "chai";
import sinon from "sinon";
import CarModel from '../../../models/CarModel';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe('searching a car', () => {
    it('successfully found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const carFound = await carModel.readOne('validId');
      expect(carFound).to.be.deep.equal(carMockWithId);

      stub.restore();
    })

    it('_id not found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let error; 
      try {
        await carModel.readOne('invalidId');
      } catch (err: any) {
        error = err;
      }
      
      expect(error.message).to.be.eq('InvalidMongoId');
      stub.restore();
    });
  });

  describe('searching all cars', () => {
    it('successfully found', async () => {
      const carsFound = await carModel.read();
      expect(carsFound).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('updating a car', () => {
    it('successfully updated', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const carUpdated = await carModel.update('validId', carMock);
      expect(carUpdated).to.be.deep.equal(carMockWithId);

      stub.restore();
    });

    it('_id not found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let error; 

      try {
        await carModel.update('invalidId', carMock);
      } catch (err: any) {
        error = err;
      }
      
      expect(error.message).to.be.eq('InvalidMongoId');
      stub.restore();
    });
  });

  describe('deleting a car', () => {
    it('successfully deleted', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const carDeleted = await carModel.delete('validId');
      expect(carDeleted).to.be.deep.equal(carMockWithId);

      stub.restore();
    });

    it('_id not found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let error; 

      try {
        await carModel.delete('invalidId');
      } catch (err: any) {
        error = err;
      }
      
      expect(error.message).to.be.eq('InvalidMongoId');
      stub.restore();
    });
  });
});