# Employee_Mgmt_backend<br/>
This project is an Employee Management System built using Node.js, Express.js, MongoDB, and Inquirer.js for command-line interface interactions.<br/>
## Table of Content<br/>
Features<br/>
Technologies Used<br/>
Setup Instructions<br/>
API Endpoints<br/>
Functionality<br/>
Screenshots<br/>
## 1.Features<br/>
### CRUD Operations:<br/>
Allows creating, reading, updating, and deleting employee records.<br/>
### Search and Filter:<br/>
Fetches all employees, fetches a specific employee by ID, and filters employees based on age and department.<br/>
### CLI Interface:<br/>
Uses Inquirer.js to provide a command-line interface for interacting with the application.<br/>
### RESTful API:<br/>
Provides RESTful endpoints (POST, PUT, GET, DELETE) for managing employee data.<br/>

## Technologies Used<br/>
### Node.js:<br/>
JavaScript runtime environment.<br/>
### Express.js:<br/>
Web application framework for Node.js.<br/>
### MongoDB:<br/>
NoSQL database for storing employee records.<br/>
### Mongoose:<br/>
MongoDB object modeling tool for Node.js.<br/>
### Inquirer.js:<br/>
Command-line user interface for Node.js.<br/>

## Setup Instructions<br/>
### Clone the repository:<br/>
git clone <repository_url><br/>
cd employee-management-system<br/>

## Install dependencies:<br/>
npm install<br/>

## Set up environment variables:<br/>
PORT=4000<br/>
MONGODB_URL=your_mongodb_connection_string<br/>

## Start the server:<br/>
npm start<br/>

## API Endpoints<br/>
POST /employee/addEmp:&nbsp;
Add a new employee.<br/>

PUT /employee/updateEmp/:id:&nbsp;
Update an existing employee by ID.<br/>

DELETE /employee/deleteEmp/:id:&nbsp;
Delete an employee by ID.<br/>

GET /employee/fetchEmps:&nbsp;
Fetch all employees.<br/>

GET /employee/fetchPEmp/:id:&nbsp;
Fetch a specific employee by ID.<br/>

GET /employee/filterEmp:&nbsp;
Filter employees by age and/or department.<br/>

## Functionality<br/>
To interact with the Employee Management System via the command line interface:<br/>

Add a new employee<br/>
Update an employee<br/>
Delete an employee<br/>
Fetch all employees<br/>
Fetch a specific employee<br/>
Filter employees<br/>

## Screenshots<br/>





































