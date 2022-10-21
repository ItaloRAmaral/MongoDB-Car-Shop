import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId } from '../../mocks/carMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'readOne')
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);

    sinon.stub(carModel, 'read').resolves([carMockWithId]);
    sinon.stub(carModel, 'delete')
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create a Car', () => {
    it("successfully created", async () => {
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it('Failed to create', async () => {
      let error;

      try {
        await carService.create({});
      } catch (err: any) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError)
    });
  });

  describe('Read a Car', () => {
    it('successfully found', async () => {
      const carFound = await carService.readOne(carMockWithId._id);

      expect(carFound).to.be.deep.equal(carMockWithId);
    });

    it('not found', async () => {
      let error;

      try {
        await carService.readOne(carMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error, "error should be defined").not.to.be.undefined;
      expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Read all Cars', () => {
    it('successfully found', async () => {
      const carsFound = await carService.read();

      expect(carsFound).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Delete a Car', () => {
    it('successfully deleted', async () => {
      const carDeleted = await carService.delete(carMockWithId._id);

      expect(carDeleted).to.be.deep.equal(carMockWithId);
    });

    it('not found', async () => {
      let error;

      try {
        await carService.delete(carMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error, "error should be defined").not.to.be.undefined;
      expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
    });
  });
});