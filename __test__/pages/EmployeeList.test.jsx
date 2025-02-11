import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createRoutesStub } from 'react-router';
import EmployeeList from '../../src/pages/EmployeeList';

/*eslint-disable */
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

/*eslint-enable */

const initialState = {
  employeeList: [],
};

const mockStore = configureStore({
  preloadedState: initialState,
  reducer: (state) => state,
});

describe('EmployeeList page tests suite', () => {
  it('should render without crash', () => {
    const Stub = createRoutesStub([
      {
        path: '/employee-list',
        Component: EmployeeList,
      },
    ]);

    render(
      <Provider store={mockStore}>
        <Stub initialEntries={['/employee-list']} />
      </Provider>,
    );

    expect(screen.getByText('Current Employees')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    // table
    expect(document.querySelector('.tableContainer')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
