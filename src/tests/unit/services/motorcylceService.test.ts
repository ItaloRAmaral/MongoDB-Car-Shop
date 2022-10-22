import { expect } from 'chai';
import sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import MotorcycleModel from '../../../models/MotorcycleModel';
import MotorcycleService from '../../../services/MotorcycleService';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcyleMock';

describe('Motorcycle Service', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);

  before(() => {
    sinon.stub(motorcycleModel, 'create').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleModel, 'readOne')
      .onCall(0)
      .resolves(motorcycleMockWithId)
      .onCall(1)
      .resolves(null);

    sinon.stub(motorcycleModel, 'read').resolves([motorcycleMockWithId]);
    sinon.stub(motorcycleModel, 'delete')
      .onCall(0)
      .resolves(motorcycleMockWithId)
      .onCall(1)
      .resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create a Motorcycle', () => {
    it("successfully created", async () => {
      const motorcycleCreated = await motorcycleService.create(motorcycleMock);

      expect(motorcycleCreated).to.be.deep.equal(motorcycleMockWithId);
    });

    it('Failed to create', async () => {
      let error;

      try {
        await motorcycleService.create({});
      } catch (err: any) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError)
    });
  });

  describe('Read a Motorcycle', () => {
    it('successfully found', async () => {
      const motorcycleFound = await motorcycleService.readOne(motorcycleMockWithId._id);

      expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);
    });

    it('not found', async () => {
      let error;

      try {
        await motorcycleService.readOne(motorcycleMockWithId._id);
      } catch (err: any) {
        error = err;
      }

      expect(error, "error should be defined").not.to.be.undefined;
      expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Read all Motorcycles', () => {
    it('successfully found', async () => {
      const motorcyclesFound = await motorcycleService.read();

      expect(motorcyclesFound).to.be.deep.equal([motorcycleMockWithId]);
    });
  });

  describe('Delete a Motorcycle', () => {
    it('successfully deleted', async () => {
      const motorcycleDeleted = await motorcycleService.delete(motorcycleMockWithId._id);

      expect(motorcycleDeleted).to.be.deep.equal(motorcycleMockWithId);
    });

    it('not found', async () => {
      let error;

      try {
        await motorcycleService.delete(motorcycleMockWithId._id);
      } catch (err: any) {
        error = err;
      }
      expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe('Update a Motorcycle', () => {
    it('successfully updated', async () => {
      sinon.stub(motorcycleModel, "update").resolves(motorcycleMockWithId);

      const motorcycleUpdated = await motorcycleService.update(motorcycleMockWithId._id, motorcycleMock);

      expect(motorcycleUpdated).to.be.deep.equal(motorcycleMockWithId);

      sinon.restore();
    });

     it('failure - zod', async () => {
      let error;

      try {
        await motorcycleService.update("any-id", { INVALID: "OBJECT" });
      } catch (err: any) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });

    it("Failure - motorcycle not Found", async () => {
      sinon.stub(motorcycleModel, "update").resolves(null);
      let error: any;

      try {
        await motorcycleService.update("any-id", motorcycleMock);
      } catch (err) {
        error = err;
      }

      expect(error?.message).to.be.eq(ErrorTypes.EntityNotFound);

      sinon.restore();
    });
  });

});