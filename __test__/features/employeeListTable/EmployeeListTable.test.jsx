import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import EmployeeListTable from '../../../src/features/employeeList/EmployeeListTable';
import { configureStore } from '@reduxjs/toolkit';
import createEmployeeReducer from '../../../src/features/createEmployeeForm/createEmployeeFormSlice.js';
import { Provider } from 'react-redux';

/*eslint-disable */
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

/*eslint-enable */

const initialState = {
  employeeList: [
    {
      firstName: 'John',
      lastName: 'Doe',
      startDate: '2022-01-10',
      department: 'HR',
      birthDate: '1990-05-15',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      startDate: '2021-07-20',
      department: 'Finance',
      birthDate: '1985-09-25',
      street: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
    },
  ],
};

const mockStore = configureStore({
  reducer: {
    employeeList: createEmployeeReducer,
  },
  preloadedState: initialState,
});

describe('EmployeeListTable unit tests suite', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <EmployeeListTable />
      </Provider>,
    );
  });
  it('should render the employee table with data', () => {
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Start Date')).toBeInTheDocument();
    expect(screen.getByText('Department')).toBeInTheDocument();
    expect(screen.getByText('Date of Birth')).toBeInTheDocument();
    expect(screen.getByText('Street')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Zip Code')).toBeInTheDocument();

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  it('should filter the employee when typing in search input', () => {
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Jane' } });

    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('Smith')).toBeInTheDocument();
    expect(screen.queryByText('John')).not.toBeInTheDocument();
  });

  it('should shows all employee when search input is cleared', () => {
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'Jane' } });
    expect(screen.queryByText('John')).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: '' } });
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });
});
