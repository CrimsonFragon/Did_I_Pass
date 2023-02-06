import express, { Express } from 'express';
import StudentController from './controllers/StudentController';

const app: Express = express();
const PORT = 8435;

app.use(express.json());

app.get(`/api/students`, StudentController.getAllStudents);
app.post(`/api/students`, StudentController.createNewStudent);
app.get(`/api/students/:studentName`, StudentController.getStudentByName);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
