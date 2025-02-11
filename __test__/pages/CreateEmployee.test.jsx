import { createRoutesStub } from 'react-router';
import { describe, expect, it } from 'vitest';
import CreateEmployee from '../../src/pages/CreateEmployee';
import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

/*eslint-disable */
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';

/*eslint-enable */

const mockStore = configureStore({
  reducer: (state) => state,
});

describe('CreateEmployee page tests suite', () => {
  it('should render without crash', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: CreateEmployee,
      },
    ]);

    render(
      <Provider store={mockStore}>
        <Stub initialEntries={['/']} />
      </Provider>,
    );

    expect(screen.getByText('HRnet')).toBeInTheDocument();
    expect(screen.getByText('View Current Employees')).toBeInTheDocument();
    expect(screen.getByText('Create Employee')).toBeInTheDocument();

    const form = screen.getByText('Create Employee').nextElementSibling;
    expect(form).toBeInTheDocument();
    expect(form.tagName).toBe('FORM');
  });
});
