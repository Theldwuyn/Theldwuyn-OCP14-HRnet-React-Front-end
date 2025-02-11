import { describe, expect, it } from 'vitest';
import reducer, {
  addEmployee,
} from '../../../src/features/createEmployeeForm/createEmployeeFormSlice.js';

const mockEmployee = [
  {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '22-06-1980',
    startDate: '01-01-2025',
    street: 'some street',
    city: 'some city',
    state: 'some state',
    zipCode: 1,
    department: 'Sales',
  },
  {
    firstName: 'Jeanne',
    lastName: 'Doe',
    birthDate: '22-06-1990',
    startDate: '01-01-2025',
    street: 'some street',
    city: 'some city',
    state: 'some state',
    zipCode: 2,
    department: 'Engineering',
  },
];

describe('employee form slice test suite', () => {
  it('should handle an employee being added to an empty list', () => {
    const previousState = [];
    expect(reducer(previousState, addEmployee(mockEmployee[0]))).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '22-06-1980',
        startDate: '01-01-2025',
        street: 'some street',
        city: 'some city',
        state: 'some state',
        zipCode: 1,
        department: 'Sales',
      },
    ]);
  });
  it('should handle an employee being added to an existing list', () => {
    const previousState = [
      {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '22-06-1980',
        startDate: '01-01-2025',
        street: 'some street',
        city: 'some city',
        state: 'some state',
        zipCode: 1,
        department: 'Sales',
      },
    ];
    expect(reducer(previousState, addEmployee(mockEmployee[1]))).toEqual([
      {
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '22-06-1980',
        startDate: '01-01-2025',
        street: 'some street',
        city: 'some city',
        state: 'some state',
        zipCode: 1,
        department: 'Sales',
      },
      {
        firstName: 'Jeanne',
        lastName: 'Doe',
        birthDate: '22-06-1990',
        startDate: '01-01-2025',
        street: 'some street',
        city: 'some city',
        state: 'some state',
        zipCode: 2,
        department: 'Engineering',
      },
    ]);
  });
});
