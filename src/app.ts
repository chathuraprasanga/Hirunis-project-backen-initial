import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';
import routes from './routes';
import cors from "cors";

const app: Application = express();

connectDB();

app.use(cors())
app.use(express.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('API Server is running...');
});

export default app;
