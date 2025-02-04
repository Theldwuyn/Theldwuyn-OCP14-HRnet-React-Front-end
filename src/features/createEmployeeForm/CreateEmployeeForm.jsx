import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { addEmployee } from './createEmployeeFormSlice.js';
import { states } from '../../data/states.js';
import { departments } from '../../data/department.js';
import Modal from '../../../modale/modal.jsx';

// style
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/createEmployeeForm.css';

function CreateEmployeeForm() {
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const buttonOpenModal = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const employee = {
      firstName: e.currentTarget.firstName.value.trim(),
      lastName: e.currentTarget.lastName.value.trim(),
      birthDate: birthDate,
      startDate: startDate,
      address: {
        street: e.currentTarget.street.value.trim(),
        city: e.currentTarget.city.value.trim(),
        state: e.currentTarget.states.value,
        zipCode: e.currentTarget.zipCode.value,
      },
      department: e.currentTarget.departments.value,
    };
    dispatch(addEmployee(employee));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />

        <label htmlFor="birthDate">Birth Date</label>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          name="birthDate"
          id="birthDate"
        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          name="startDate"
          id="startDate"
        />

        <fieldset>
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input type="text" name="street" id="street" />

          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />

          <label htmlFor="states">State</label>
          <select name="states" id="states">
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" name="zipCode" id="zipCode" />
        </fieldset>

        <label htmlFor="departments">Department</label>
        <select name="departments" id="departments">
          {departments.map((dep) => (
            <option key={dep.value} value={dep.value}>
              {dep.label}
            </option>
          ))}
        </select>

        <button type="submit" ref={buttonOpenModal}>
          Save
        </button>
      </form>
      <Modal buttonRef={buttonOpenModal} content="Employee Created !" />
    </>
  );
}

export default CreateEmployeeForm;
