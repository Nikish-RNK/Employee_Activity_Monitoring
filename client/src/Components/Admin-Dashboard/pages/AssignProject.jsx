import React, { useContext } from "react";
import DataContext from "../../../Context/AdminContext/Datacontext";
import AnotherContext from "../../../Context/AdminContext/AnotherContext";
import PopUp from "../../Popup/PopUp";
import "../css/AssignProject.css";

const AssignProject = () => {
    const { allEmp } = useContext(DataContext);
    const {
        // showEmployee,
        // handleEmployee,
        handleAssignSubmit,
        handleSelectedemployee,
        handleChange,
        assignFormData,
        setPopUp,
        popUp
    } = useContext(AnotherContext);

    return (
        <section className="assign-page">
            <div className="assign-card">

                {/* ── Header ── */}
                <div className="assign-header">
                    <div className="assign-header-top">
                        <h4>Assign Project</h4>
                        <span className="assign-header-tag">— Form</span>
                    </div>
                </div>

                <div className="assign-card-content">
                    <form onSubmit={handleAssignSubmit} className="assign-form">

                        {/* ── Fields Grid ── */}
                        <div className="assign-grid">
                            <div className="form-group">
                                <label>Project Name</label>
                                <input
                                    type="text"
                                    name="projectName"
                                    value={assignFormData.projectName}
                                    onChange={handleChange}
                                    placeholder="e.g. Website Redesign"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Manager Name</label>
                                <select
                                    name="managerName"
                                    value={assignFormData.managerName}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a Manager</option>
                                    {allEmp.map((each) => (
                                        <option key={each._id} value={`${each.firstName} ${each.lastName}`}>
                                            {each.firstName} {each.lastName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Starting Date</label>
                                <input
                                    type="date"
                                    name="startingDate"
                                    value={assignFormData.startingDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Ending Date</label>
                                <input
                                    type="date"
                                    name="finishingDate"
                                    value={assignFormData.finishingDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* ── Employee Select ── */}

                        <div className="employees-group">
                            <label>Select Employees</label>
                            <select
                                name="selectedEmployees"
                                value={assignFormData.selectedEmployees}
                                onChange={handleSelectedemployee}
                                required
                                multiple
                                className="project-select"
                            >
                                {allEmp.map((each) => (
                                    <option key={each._id}>
                                        {each.firstName} {each.lastName}
                                    </option>
                                ))}
                            </select>
                            <p className="select-hint">Hold Ctrl to select multiple employees</p>
                        </div>


                        {/* ── Footer Buttons ── */}
                        <div className="assign-btns">
                            {/* <button
                                type="button"
                                className="btn-secondary"
                                onClick={handleEmployee}
                            >
                                {showEmployee ? "Close Employees" : "Select Employees"}
                            </button> */}
                            <button type="submit" className="btn-primary">
                                Assign Project
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            {popUp.show && (
                <PopUp
                    message={popUp.message}
                    isSuccess={popUp.isSuccess}
                    onClose={() => setPopUp({ show: false, message: "", isSuccess: true })}
                />
            )}
        </section>
    );
};

export default AssignProject;