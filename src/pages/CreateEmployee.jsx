import { NavLink } from 'react-router';
import CreateEmployeeForm from '../features/createEmployeeForm/CreateEmployeeForm';

function CreateEmployee() {
  return (
    <>
      <h1 className="title">HRnet</h1>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2 className="title">Create Employee</h2>
        <CreateEmployeeForm />
      </div>
    </>
  );
}

export default CreateEmployee;
