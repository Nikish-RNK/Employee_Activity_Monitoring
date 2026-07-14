import React, { useContext } from 'react';
import DataContext from '../../../Context/AdminContext/Datacontext';
import '../css/project.css';
import { FaTrash } from 'react-icons/fa6';
import { MdAssignmentAdd } from 'react-icons/md';
import AnotherContext from '../../../Context/AdminContext/AnotherContext';
import PopUp from '../../Popup/PopUp';

const Projects = () => {
    const {
        handleChange,
        project,
        handleClick,
        allManager,
        projectList,
        handleProjectDelete,
        popUp,
        setPopUp,
    } = useContext(DataContext);

    const { handleAssign } = useContext(AnotherContext);

    return (
        <div className="projects-page">
            {/* ── Header ── */}
            <div className="projects-header">
                <div className="projects-header-top">
                    <h4>All Projects</h4>
                    <span className="projects-header-tag">— Overview</span>
                </div>
            </div>

            <div className="projects-body">
                {/* ── Left: Add Project Form ── */}
                <div className="projects-form-panel">
                    <div className="form-panel-header">
                        <h5>Add Project</h5>
                        <p>Fill in the details to create a new project</p>
                    </div>

                    <form onSubmit={handleClick} className="projects-form">
                        <div className="form-group">
                            <label>Project Title</label>
                            <input
                                onChange={handleChange}
                                name="project_title"
                                type="text"
                                value={project.project_title}
                                placeholder="e.g. Website Redesign"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Starting Date</label>
                            <input
                                onChange={handleChange}
                                name="project_start_date"
                                type="date"
                                value={project.project_start_date}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>End Date</label>
                            <input
                                onChange={handleChange}
                                name="project_end_date"
                                type="date"
                                value={project.project_end_date}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Project Manager</label>
                            <select
                                name="project_employee"
                                value={project.project_employee}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Manager
                                </option>
                                {allManager.map((each) => (
                                    <option
                                        key={each._id}
                                        value={each.firstName}
                                    >
                                        {each.firstName} {each.lastName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="btn-primary">
                            Add Project
                        </button>
                    </form>
                </div>

                {/* ── Right: Projects Table ── */}
                <div className="projects-table-panel">
                    <div className="table-panel-header">
                        <h5>Project List</h5>
                        <span className="project-count">
                            {projectList.length} projects
                        </span>
                    </div>

                    <div className="table-wrapper">
                        <table className="projects-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Project Title</th>
                                    <th>Manager</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Assign</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectList.length > 0 ? (
                                    projectList.map((each, index) => (
                                        <tr key={each._id}>
                                            <td className="td-index">
                                                {index + 1}
                                            </td>
                                            <td className="td-title">
                                                {each.project_title}
                                            </td>
                                            <td>{each.project_employee}</td>
                                            <td>
                                                {new Date(
                                                    each.project_start_date,
                                                ).toLocaleDateString()}
                                            </td>
                                            <td>
                                                {new Date(
                                                    each.project_end_date,
                                                ).toLocaleDateString()}
                                            </td>
                                            <td>
                                                <button
                                                    className="action-btn assign-btn"
                                                    aria-label="Assign Project"
                                                    onClick={() =>
                                                        handleAssign(each)
                                                    }
                                                >
                                                    <MdAssignmentAdd />
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="action-btn delete-btn"
                                                    aria-label="Delete Project"
                                                    onClick={() =>
                                                        handleProjectDelete(
                                                            each._id,
                                                        )
                                                    }
                                                >
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="td-empty">
                                            No projects added yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {popUp.show && (
                <PopUp
                    message={popUp.message}
                    isSuccess={popUp.isSuccess}
                    onClose={() =>
                        setPopUp({ show: false, message: '', isSuccess: true })
                    }
                />
            )}
        </div>
    );
};

export default Projects;
