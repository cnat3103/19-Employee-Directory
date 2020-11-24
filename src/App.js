import React from "react";
import Employees from "./utils/EmployeeData"
import { Input } from "semantic-ui-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./style.css"


// NOTE - basis for logic below was provided at the following site:
// https://codesandbox.io/s/objective-kepler-xu5y1?file=/src/index.js
// the code was cross referenced with activities in class and it was determined that the process outlined here
// is most consistent with the practices throughout the unit.

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: Employees,
        columns: [],
        searchInput: ""
      };
    }
  
    componentDidMount() {
      let columns = [
        {
          Header: "id",
          accessor: "id",
          sortable: true,
          show: true,
          displayValue: " ID"
        },
        {
          Header: "First Name",
          accessor: "firstName",
          sortable: true,
          show: true,
          displayValue: "First Name"
        },
        {
          Header: "Last Name",
          accessor: "lastName",
          sortable: true,
          show: true,
          displayValue: " Last Name "
        },
        {
            Header: "Title",
            accessor: "title",
            sortable: false,
            show: true,
            displayValue: " Title "
        },
        {
            Header: "Team",
            accessor: "team",
            sortable: true,
            show: true,
            displayValue: " Team "
        },
        {
            Header: "Role",
            accessor: "role",
            sortable: true,
            show: true,
            displayValue: " Role "
        },
        {
            Header: "Email",
            accessor: "email",
            sortable: false,
            show: true,
            displayValue: " Email "
        }
      ];
      this.setState({ columns });
    }
  
    handleChange = event => {
      this.setState({ searchInput: event.target.value }, () => {
        this.globalSearch();
      });
    };
  
    globalSearch = () => {
      let { searchInput } = this.state;
      let filteredData = Employees.filter(value => {
        return (
          value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
          value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.team.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.role.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.email.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      this.setState({ data: filteredData });
    };
  
    render() {
      let { data, columns, searchInput } = this.state;
      return (
        <div className="body">
          <br />
          <Input
            size="large"
            name="searchInput"
            value={searchInput || ""}
            onChange={this.handleChange}
            label="Search"
          />
          <br />
          <br />
          <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      );
    }
  }
  