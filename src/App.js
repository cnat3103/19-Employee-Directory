import React from 'react';
import Navbar from './components/Navbar';
import EmployeesTable from './components/EmployeesTable';
import Employees from './utils/Employees';


const App = () => {
  // created employees state for storing Employees array
  const [employees] = React.useState(Employees);
  const [searchTerm, setSearchTerm] = React.useState('');

  // receive callback from Navbar and setSearchTerm
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  // search employee and return search results
  const searchedEmployees = employees.filter(result => {
    const searchBylastName = result.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByfirstName = result.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByTitle = result.title.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByTeam = result.team.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByRole = result.role.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByEmail = result.email.toLowerCase().includes(searchTerm.toLowerCase());
    return searchBylastName || searchByfirstName || searchByTitle || searchByTeam || searchByRole || searchByEmail;
  })

  return (
    <div>
      <Navbar onSearch={handleSearch} search={searchTerm} />
      <EmployeesTable employees={searchedEmployees} />
    </div>
  )
};

export default App;