(async () => {
    const inquirer = (await import('inquirer')).default;
    const axios = (await import('axios')).default;

    const API_URL = `http://localhost:4000/employee`;

    const mainMenu = async () => {
        const choices = [
            'Add a new employee',
            'Update an employee',
            'Delete an employee',
            'Fetch all employees',
            'Fetch a specific employee',
            'Filter employees',
            'Exit'
        ];

        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: choices
            }
        ]);

        switch (action) {
            case 'Add a new employee':
                await addEmployee();
                break;
            case 'Update an employee':
                await updateEmployee();
                break;
            case 'Delete an employee':
                await deleteEmployee();
                break;
            case 'Fetch all employees':
                await fetchAllEmployees();
                break;
            case 'Fetch a specific employee':
                await fetchSpecificEmployee();
                break;
            case 'Filter employees':
                await filterEmployees();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
        }

        await mainMenu();
    };

    const addEmployee = async () => {
        const { fullName, age, DOB, salary, department } = await inquirer.prompt([
            { type: 'input', name: 'fullName', message: 'Enter employee full name:' },
            { type: 'input', name: 'age', message: 'Enter employee age:' },
            { type: 'input', name: 'DOB', message: 'Enter employee date of birth (YYYY-MM-DD):' },
            { type: 'input', name: 'salary', message: 'Enter employee salary:' },
            { type: 'input', name: 'department', message: 'Enter employee department:' }
        ]);

        try {
            const response = await axios.post(`${API_URL}/addEmp`, { fullName, age, DOB, salary, department });
            console.log('Employee added successfully:', response.data);
        } catch (error) {
            console.error('Error adding employee:', error.message);
        }
    };

    const updateEmployee = async () => {
        const { id, fullName, age, DOB, salary, department } = await inquirer.prompt([
            { type: 'input', name: 'id', message: 'Enter employee ID to update:' },
            { type: 'input', name: 'fullName', message: 'Enter new employee full name:' },
            { type: 'input', name: 'age', message: 'Enter new employee age:' },
            { type: 'input', name: 'DOB', message: 'Enter new employee date of birth (YYYY-MM-DD):' },
            { type: 'input', name: 'salary', message: 'Enter new employee salary:' },
            { type: 'input', name: 'department', message: 'Enter new employee department:' }
        ]);

        try {
            const response = await axios.put(`${API_URL}/updateEmp/${id}`, { fullName, age, DOB, salary, department });
            console.log('Employee updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating employee:', error.message);
        }
    };

    const deleteEmployee = async () => {
        const { id } = await inquirer.prompt([
            { type: 'input', name: 'id', message: 'Enter employee ID to delete:' }
        ]);

        try {
            const response = await axios.delete(`${API_URL}/deleteEmp/${id}`);
            console.log('Employee deleted successfully:', response.data);
        } catch (error) {
            console.error('Error deleting employee:', error.message);
        }
    };

    const fetchAllEmployees = async () => {
        try {
            const response = await axios.get(`${API_URL}/fetchEmps`);
            console.log('Employees:', response.data.emp);
        } catch (error) {
            console.error('Error fetching employees:', error.message);
        }
    };

    const fetchSpecificEmployee = async () => {
        const { id } = await inquirer.prompt([
            { type: 'input', name: 'id', message: 'Enter employee ID to fetch:' }
        ]);

        try {
            const response = await axios.get(`${API_URL}/fetchPEmp/${id}`);
            console.log('Employee:', response.data.employee);
        } catch (error) {
            console.error('Error fetching employee:', error.message);
        }
    };

    const filterEmployees = async () => {
        const { age, department } = await inquirer.prompt([
            { type: 'input', name: 'age', message: 'Enter age to filter (leave blank if not filtering by age):' },
            { type: 'input', name: 'department', message: 'Enter department to filter (leave blank if not filtering by department):' }
        ]);

        const filterParams = {};
        if (age) filterParams.age = age;
        if (department) filterParams.department = department;

        try {
            console.log('Filter Params:', filterParams); // Log the filter parameters
            const response = await axios.get(`${API_URL}/filterEmp`, { params: filterParams });
            console.log('Filtered employees:', response.data.emp);
        } catch (error) {
            console.error('Error filtering employees:', error.message);
        }
    };

    await mainMenu();
})();
