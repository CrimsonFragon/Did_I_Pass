import express, { Express } from 'express';
import { notImplemented } from './controllers/NotImplementedController';

const app: Express = express();
const PORT = 8435;

app.post('/api/students', notImplemented);
app.get('/api/students/:studentName', notImplemented);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
