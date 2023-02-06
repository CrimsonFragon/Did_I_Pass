type CourseGrade = {
  name: string;
  weight: number;
  grade: number;
};

type Assignments = Array<CourseGrade>;

type Student = {
  name: string;
  assignmentsWeight: Assignments;
  currentAverage: number;
};

type StudentManager = Record<string, Student>;

type CourseGrades = {
  assignmentWeights: array<CourseGrade>;
  finalExamWeight: number;
};

type NewStudentRequest = {
  name: string;
  assignmentsWeight: Assignments;
};

type StudentNameParam = {
  studentName: string;
};

type AssignmentGrade = {
  grade: number;
};

type FinalGrade = {
  overallScore: number;
  letterGrade: string;
};

type FinalExamScores = {
  neededForA: number;
  neededForB: number;
  neededForC: number;
  neededForD: number;
};
