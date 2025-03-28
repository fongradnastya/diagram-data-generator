import fs from "fs";
import { faker } from "@faker-js/faker";
import { writeToStream } from "fast-csv";

// Function to generate random employee data
const generateEmployees = (count) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    department: faker.commerce.department(),
    country: faker.location.country(),
    city: faker.location.city(),
  }));
};

// Generate data
const employees = generateEmployees(100);

// Write data to CSV
const stream = fs.createWriteStream("employees.csv");
writeToStream(stream, employees, { headers: true })
  .on("finish", () => console.log("CSV file successfully created!"));
