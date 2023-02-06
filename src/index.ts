import express, { Express } from 'express';
import { notImplemented } from './controllers/NotImplementedController';
import StudentController from './controllers/StudentController';

const app: Express = express();
const PORT = 8435;

app.get(`/api`, StudentController.getAllStudents);
app.post(`/api/students`, notImplemented);
app.get(`/api/students/:studentName`, notImplemented);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
