import express from 'express';
import errorHandler from './middlewares/errorMiddleware';
import carRouter from './routes/carRoutes';

const app = express();
app.use(express.json());

app.use(carRouter);

app.use(errorHandler);

export default app;
