import React, { useContext } from "react";
import "../css/AddEmployee.css";
import { useLocation } from "react-router-dom";
import DataContext from "../../../Context/AdminContext/Datacontext";
import PopUp from "../../Popup/PopUp";

const AddEmployee = () => {
    const location = useLocation();

    const {
        handleSubmit,
        handleChange,
        inputData = {},
        popUp,
        setPopUp
    } = useContext(DataContext);

    const { employeeId } = location.state || {};

    return (
        <div>
            <div className="whole container-fluid row justify-content-center align-items-center">

                <div className="addemp-heading d-flex justify-content-center align-items-center col-12 text-center">
                    <h5>{employeeId ? "Edit Employee" : "Add Employee"}</h5>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="employee-form d-flex flex-column justify-content-around"
                >

                    {/* FIRST LINE */}
                    <div className="first-line-input d-block d-lg-flex justify-content-around">

                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={inputData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={inputData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Date of Birth:</label>
                            <input
                                type="date"
                                name="dob"
                                value={inputData.dob}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={inputData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    {/* SECOND LINE */}
                    <div className="secound-line-input d-block d-lg-flex justify-content-around">

                        <div className="form-group">
                            <label>Gender:</label>
                            <select
                                name="gender"
                                value={inputData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={inputData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={inputData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={inputData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    {/* ADDRESS */}
                    <fieldset>
                        <legend>Address:</legend>
                        <div className="third-line-input d-block d-lg-flex justify-content-around">
                            {["street", "city", "state", "zipCode"].map((field) => (
                                <div key={field} className="fieldset-input">
                                    <label>{field}:</label>
                                    <input
                                        type="text"
                                        name={`address[${field}]`}
                                        value={inputData.address?.[field] || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    {/* FOURTH LINE */}
                    <div className="fourth-line-input d-block d-lg-flex justify-content-around">

                        <div className="form-group">
                            <label>Country:</label>
                            <input
                                type="text"
                                name="address[country]"
                                value={inputData.address?.country || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Upload 3 Face Images:</label>
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={(e) => {
                                    const files = Array.from(e.target.files);

                                    if (files.length !== 3) {
                                        alert("Please select exactly 3 images");
                                        return;
                                    }

                                    handleChange({
                                        target: {
                                            name: "images",
                                            value: files
                                        }
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Status:</label>
                            <select
                                name="status"
                                value={inputData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Role:</label>
                            <select
                                name="role"
                                value={inputData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Role</option>
                                <option value="Manager">Manager</option>
                                <option value="Employee">Employee</option>
                            </select>
                        </div>

                    </div>

                    {/* SUBMIT */}
                    <div className="form-btn">
                        <button type="submit">
                            {employeeId ? "Save Changes" : "Add Employee"}
                        </button>
                    </div>

                </form>

                {/* POPUP */}
                {popUp.show && (
                    <PopUp
                        message={popUp.message}
                        isSuccess={popUp.isSuccess}
                        onClose={() =>
                            setPopUp({
                                show: false,
                                message: "",
                                isSuccess: true
                            })
                        }
                    />
                )}

            </div>
        </div>
    );
};

export default AddEmployee;