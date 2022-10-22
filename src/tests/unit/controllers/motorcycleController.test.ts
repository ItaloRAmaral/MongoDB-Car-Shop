import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcyleMock';
import MotorcycleController from '../../../controllers/MotorcycleController';
import MotorcycleService from '../../../services/MotorcycleService';
import MotorcycleModel from '../../../models/MotorcycleModel';

describe('Motorcycle Controller', () => {
  const motorcycleModel = new MotorcycleModel();
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  before(() => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleMock);
    sinon.stub(motorcycleService, 'readOne').resolves(motorcycleMock);
    sinon.stub(motorcycleService, 'read').resolves([motorcycleMockWithId]);
    sinon.stub(motorcycleService, 'delete').resolves(motorcycleMockWithId);
    sinon.stub(motorcycleService, 'update').resolves(motorcycleMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Motorcycle', () => {
    it('Successfully created', async () => {
      req.body = motorcycleMock;
      await motorcycleController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Read a Motorcycle', () => {
    it('Successfully read', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcycleController.readOne(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMock)).to.be.true;
    });
  });

  describe('Read Motorcycles', () => {
    it('Successfully read', async () => {
      await motorcycleController.read(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorcycleMockWithId])).to.be.true;
    });
  });

  describe('Delete a Motorcycle', () => {
    it('Successfully deleted', async () => {
      req.params = { id: motorcycleMockWithId._id };
      await motorcycleController.delete(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithId)).to.be.true;
    });
  });

  describe('Update a Motorcycle', () => {
    it('Successfully updated', async () => {
      await motorcycleController.update(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleMockWithId)).to.be.true;
    });
  });

  describe('Error Handling', () => {
    it('Create Error Handling', async () => {
      const error = new Error('Error');
      (motorcycleService.create as sinon.SinonStub).throws(error);

      const next = sinon.spy();
      await motorcycleController.create(req, res, next);

      sinon.assert.calledOnce(next);
    });

    it('ReadOne Error Handling', async () => {
      const error = new Error('Error');
      (motorcycleService.readOne as sinon.SinonStub).throws(error);

      const next = sinon.spy();
      await motorcycleController.readOne(req, res, next);

      sinon.assert.calledOnce(next);  
    });

    it('Read Error Handling', async () => {
      const error = new Error('Error');
      (motorcycleService.read as sinon.SinonStub).throws(error);

      const next = sinon.spy();
      await motorcycleController.read(req, res, next);

      sinon.assert.calledOnce(next);  
    });

    it('Delete Error Handling', async () => {
      const error = new Error('Error');
      (motorcycleService.delete as sinon.SinonStub).throws(error);

      const next = sinon.spy();
      await motorcycleController.delete(req, res, next);

      sinon.assert.calledOnce(next);  
    });

    it('Update Error Handling', async () => {
      const error = new Error('Error');
      (motorcycleService.update as sinon.SinonStub).throws(error);

      const next = sinon.spy();
      await motorcycleController.update(req, res, next);

      sinon.assert.calledOnce(next);  
    });

  });
});