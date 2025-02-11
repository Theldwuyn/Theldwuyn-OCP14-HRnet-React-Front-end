import { configureStore } from '@reduxjs/toolkit';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import createEmployeeReducer from '../../../src/features/createEmployeeForm/createEmployeeFormSlice.js';
import CreateEmployeeForm from '../../../src/features/createEmployeeForm/CreateEmployeeForm';
import { fireEvent, render, screen } from '@testing-library/react';
/*eslint-disable */
import { toBeInTheDocument } from '@testing-library/jest-dom/vitest';
import { Provider } from 'react-redux';

/*eslint-enable */
const store = configureStore({
  reducer: {
    employeeList: createEmployeeReducer,
  },
});
const mockDispatch = vi.spyOn(store, 'dispatch');

describe('CreateEmployeeForm test suite', () => {
  function customGetByText(text) {
    return screen.getByText(text);
  }

  beforeEach(() => {
    render(
      <Provider store={store}>
        <CreateEmployeeForm />
      </Provider>,
    );
  });

  it('should render a form', () => {
    const labelTexts = [
      'First Name',
      'Last Name',
      'Birth Date',
      'Start Date',
      'Street',
      'City',
      'State',
      'Zip Code',
      'Department',
    ];

    const labelElements = labelTexts.map((text) => customGetByText(text));
    labelElements.forEach((label) => {
      expect(label).toBeInTheDocument;
      const labelSibling = label.nextElementSibling;
      switch (label.htmlFor) {
        case 'states':
        case 'departments':
          expect(labelSibling.tagName).toBe('SELECT');
          break;
        case 'birthDate':
        case 'startDate':
          // datepicker component wrap an input inside 2 nested div
          // <div><div><input /></div></div>
          expect(labelSibling.firstElementChild.firstElementChild.tagName).toBe(
            'INPUT',
          );
          break;
        default:
          expect(labelSibling.tagName).toBe('INPUT');
          break;
      }
      expect(labelSibling).toBeInTheDocument();
    });
  });
  it('should dispatch an action when user submit the form', () => {
    const subButton = screen.getByTestId('subButton');
    fireEvent.click(subButton);
    expect(mockDispatch).toHaveBeenCalled();
    vi.clearAllMocks();
  });
});

vi.clearAllMocks();
