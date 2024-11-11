interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dni: string;
  departmentId: string;
  baseSalary: number;
  relatives: Relative[];
}

interface EmployeeSubmit {
  firstName: string;
  lastName: string;
  email: string;
  dni: string;
  departmentId: string;
  baseSalary: number;
  relatives: Relative[];
}

interface Relative {
  firstName: string;
  relationship: 'Hijo/a' | 'Cónyuge' | 'Padre/Madre';
  dni: string;
  birthDate: string;
}

interface Department {
  id: string;
  name: string;
}