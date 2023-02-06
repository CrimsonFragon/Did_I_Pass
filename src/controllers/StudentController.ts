import { Request, Response } from 'express';

import { getStudentData } from '../models/studentModel';

function getAllStudents(req: Request, res: Response): void {
  res.json(getStudentData());
}
export default { getAllStudents };
