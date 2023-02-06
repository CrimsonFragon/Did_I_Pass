import { Request, Response } from 'express';

import { getStudentData, addStudent, getStudent } from '../models/studentModel';

function getAllStudents(req: Request, res: Response): void {
  res.json(getStudentData());
}

function validateAssignmentWeight(assignmentsWeight: Assignments): boolean {
  /* const totalWeight = 0; 
  for (const courseGrade of assignmentsWeight) {
    totalWeight += courseGrade.weight;
  }
  if (totalWeight !== 100) {
    return false;
  } */
  return true;
}

function calculateAverage(assignmentsWeight: Assignments): number {
  const average = 0;
  /*
  for (const courseGrade of assignmentsWeight) {
    average += (courseGrade.grade / 100) * courseGrade.weight;
  }
*/
  return average;
}

function createNewStudent(req: Request, res: Response): void {
  console.log('\nPOST /api');
  console.log(req.body);

  const { name, assignmentsWeight } = req.body as NewStudentRequest;

  if (!validateAssignmentWeight(assignmentsWeight)) {
    res.sendStatus(400);
    return;
  }

  const currentAverage: number = calculateAverage(assignmentsWeight);
  const newStudent: Student = { name, assignmentsWeight, currentAverage };

  const didAddStudent = addStudent(name, newStudent);

  if (!didAddStudent) {
    res.sendStatus(409);
    return;
  }

  res.sendStatus(201);
}

function getStudentByName(req: Request, res: Response): void {
  const { studentName } = req.params as StudentNameParam;
  const student = getStudent(studentName);
  if (!student) {
    res.sendStatus(404);
  }
  res.json(student);
}

export default { getAllStudents, createNewStudent, getStudentByName };
