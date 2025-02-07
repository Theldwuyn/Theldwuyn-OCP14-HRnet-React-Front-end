import { NavLink } from 'react-router';
import EmployeeListTable from '../features/employeeList/EmployeeListTable';

function EmployeeList() {
  return (
    <>
      <h1 className="title">Current Employees</h1>
      <div className="container">
        <div className="tableContainer">
          <EmployeeListTable />
        </div>
        <NavLink to="/">Home</NavLink>
      </div>
    </>
  );
}

export default EmployeeList;
