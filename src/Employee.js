import React, { useEffect, useState } from 'react';
import axios from "axios";

function Employee() {

    // declaring state to store data
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch api using axios
                const data = (await axios.get('http://localhost:5000/api/getEmployee')).data;
                console.log(data)
                setEmployee(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='main'>
            <div className='table-employee'>
                <table className="table table-light table-striped border shadow mt-4">
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th scope="col">EmployeeID</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render data on ui using map */}
                        {
                            employee.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{emp.EmployeeID}</td>
                                        <td>{emp.FirstName}</td>
                                        <td>{emp.LastName}</td>
                                        <td>{emp.Age}</td>
                                        <td>{emp.Gender}</td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee