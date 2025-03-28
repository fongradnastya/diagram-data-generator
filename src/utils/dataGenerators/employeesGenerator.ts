import { faker } from '@faker-js/faker';
import { type Employee } from '../../models/employee';

export namespace EmployeesGenerator {
  function createEmployee(): Employee {
    return { 
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      jobTitle: faker.person.jobTitle(),
      department: faker.commerce.department(),
      country: faker.location.country(),
      city: faker.location.city(),
    };
  }

  export function generateEmployees(employeesNumber: number): Employee[] {
    return new Array(employeesNumber)
      .map(createEmployee);
  };
}


