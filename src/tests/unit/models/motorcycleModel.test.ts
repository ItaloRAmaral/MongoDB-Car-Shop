import { expect } from 'chai';
import sinon from 'sinon';
import mongoose from 'mongoose';
import { Model } from 'mongoose';
import MotorcycleModel from '../../../models/MotorcycleModel';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcyleMock';

describe('Motorcycle Model', () => {
  const motorcycleModel = new MotorcycleModel();

  before(() => {
    sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'find').resolves([motorcycleMockWithId]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleMockWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleMockWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('creating a motorcycle', () => {
    it('successfully created', async () => {
      const newMotorcycle = await motorcycleModel.create(motorcycleMock);
      expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
    });
  });

  describe('searching a motorcycle', () => {
    it('successfully found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const motorcycleFound = await motorcycleModel.readOne('validId');
      expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);

      stub.restore();
    })

    it('_id not found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let error; 
      try {
        await motorcycleModel.readOne('invalidId');
      } catch (err: any) {
        error = err;
      }
      
      expect(error.message).to.be.eq('InvalidMongoId');
      stub.restore();
    });
  });

  describe('searching all motorcycles', () => {
    it('successfully found', async () => {
      const motorcyclesFound = await motorcycleModel.read();
      expect(motorcyclesFound).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('updating a motorcycle', () => {
    it('successfully updated', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const updatedMotorcycle = await motorcycleModel.update('validId', motorcycleMock);
      expect(updatedMotorcycle).to.be.deep.equal(motorcycleMockWithId);

      stub.restore();
    });

    it('_id not found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let error; 
      try {
        await motorcycleModel.update('invalidId', motorcycleMock);
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.eq('InvalidMongoId');
      stub.restore();
    });
  });

  describe('deleting a motorcycle', () => {
    it('successfully deleted', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(true);

      const deletedMotorcycle = await motorcycleModel.delete('validId');
      expect(deletedMotorcycle).to.be.deep.equal(motorcycleMockWithId);

      stub.restore();
    });

    it('_id not found', async () => {
      const stub = sinon.stub(mongoose, 'isValidObjectId').returns(false);
      let error; 
      try {
        await motorcycleModel.delete('invalidId');
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.eq('InvalidMongoId');
      stub.restore();
    });
  });
});
