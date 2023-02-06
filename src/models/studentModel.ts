const studentsManager: StudentManager = {};

function getStudentData(): StudentManager {
  return studentsManager;
}

function addStudent(studentName: string, student: Student): boolean {
  if (studentName in studentsManager) {
    return false;
  }
  studentsManager[studentName] = student;
  return true;
}

function getStudent(studentName: string): Student | undefined {
  if (!(studentName in studentsManager)) {
    return undefined;
  }
  return studentsManager[studentName];
}

export { getStudentData, addStudent, getStudent };
