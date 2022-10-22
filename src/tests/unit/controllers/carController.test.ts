import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarController from '../../../controllers/carController';
import CarService from '../../../services/CarService';
import CarModel from '../../../models/CarModel';

describe ('Car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;
  const next = {} as NextFunction;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'readOne').resolves(carMock);
    sinon.stub(carService, 'read').resolves([carMockWithId]);
    sinon.stub(carService, 'delete').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('Create Car', () => {
    it('Successfully created', async () => {
      req.body = carMock;
      await carController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read a Car', () => {
    it('Successfully read', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read Cars', () => {
    it('Successfully read', async () => {
      await carController.read(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([carMockWithId])).to.be.true;
    });
  });

  describe('Delete a Car', () => {
    it('Successfully deleted', async () => {
      req.params = { id: carMockWithId._id };
      await carController.delete(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });
});