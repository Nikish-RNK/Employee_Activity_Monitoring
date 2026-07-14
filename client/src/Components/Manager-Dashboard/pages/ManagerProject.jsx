import React, { useContext } from 'react';
import '../css/ManagerProject.css';
import AnotherContext from '../../../Context/AdminContext/AnotherContext';

const ManagerProjects = () => {
    const { assignedProjects } = useContext(AnotherContext);

    return (
        <div className="container">
            <div className="text-center my-4 manager-project-heading">
                <h3>Assigned Projects</h3>
            </div>
            <div className="table-responsive">
                <table className="table  text-center">
                    <thead className="table-light">
                        <tr>
                            <th>SI/No</th>
                            <th>Project Name</th>
                            <th>Manager Name</th>
                            <th>Starting Date</th>
                            <th>Finishing Date</th>
                            <th>Assigned Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignedProjects.map((project, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{project.projectName}</td>
                                <td>{project.managerName}</td>
                                <td>
                                    {new Date(
                                        project.startingDate,
                                    ).toLocaleDateString()}
                                </td>
                                <td>
                                    {new Date(
                                        project.finishingDate,
                                    ).toLocaleDateString()}
                                </td>
                                <td>{project.selectedEmployees.join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerProjects;
