import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

// style
import '../../style/employeeList.css';

function FilterComponent({ filterText, onFilter }) {
  return (
    <input
      type="text"
      id="search"
      placeholder="Search"
      value={filterText}
      onChange={onFilter}
    />
  );
}

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: 'Date of Birth',
    selector: (row) => row.birthDate,
    sortable: true,
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: 'State',
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: 'Zip Code',
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

function EmployeeListTable() {
  const [filterText, setFilterText] = useState('');
  const tableData = useSelector((state) => state.employeeList);
  console.log('data', tableData);

  const filteredData = tableData.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(filterText.toLowerCase()),
    ),
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText]);

  function handleSort(selectedColumn) {
    if (selectedColumn.name) {
      columns.forEach(
        (col) => (col.style = { backgroundColor: 'transparent' }),
      );
      const activeColumn = columns.find(
        (col) => col.name === selectedColumn.name,
      );
      activeColumn.style = { backgroundColor: 'grey' };
      console.log('active', activeColumn);
    }
    console.log('selected', selectedColumn);
  }

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      onSort={(selectedColumn) => handleSort(selectedColumn)}
    />
  );
}

FilterComponent.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default EmployeeListTable;
