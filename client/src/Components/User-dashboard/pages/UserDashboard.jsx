import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import DataContext from "../../../Context/AdminContext/Datacontext";
import project from "../../Admin-Dashboard/assets/images/project-cloud-disk.png";
import { Link } from "react-router-dom";
import AnotherContext from "../../../Context/AdminContext/AnotherContext";

const UserDashBoard = () => {
    const { tasks, toggleComplete, deleteTask, newTask, setNewTask, addTask } =
        useContext(DataContext);
    const { assignedProjects } = useContext(AnotherContext);

    return (
        <div className="main-dashboard col-12">
            <div className="dashboard p-1 col-lg-10 col-12 mx-auto">
                <header className="dash-header col-12 text-center">
                    <div className="heading">
                        <h2>Dashboard</h2>
                    </div>
                </header>
                <section className="dash-section d-flex flex-wrap justify-content-center align-items-center">
                    <div className="manager-total-div">
                        <img className="total-icon" src={project} alt="icons" />
                        <div>
                            <h3 className="total total-pro fs-5 fs-md-4 fs-lg-3 m-0">
                                Your Projects
                            </h3>

                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to={"user-projects"}
                            >
                                <p className="m-0">view more</p>
                            </Link>
                        </div>
                    </div>

                    <div className="manager-total-div">
                        <img className="total-icon" src={project} alt="icons" />
                        <div>
                            <h3 className="total total-loan fs-5 fs-md-4 fs-lg-3 m-0">
                                Booked Rooms
                            </h3>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                                to={"user-booked-rooms"}
                            >
                                <p className="m-0">view more</p>
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="bottom-container d-block col-12  d-lg-flex  justify-content-center">
                    <div className="project-list-container col-12 col-lg-8 p-3 ">
                        <table className="table table-striped table-responsive-sm">
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
                                                project.startingDate
                                            ).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {new Date(
                                                project.finishingDate
                                            ).toLocaleDateString()}
                                        </td>
                                        <td>
                                            {project.selectedEmployees.join(
                                                ", "
                                            )}{" "}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="todo-main-container col-12 col-lg-4  d-flex justify-content-center">
                        <div className="todo-container ">
                            <h1>To-Do List</h1>

                            <div className="todo-input">
                                <input
                                    type="text"
                                    value={newTask}
                                    placeholder="Add a new task..."
                                    onChange={(e) => setNewTask(e.target.value)}
                                />
                                <button onClick={addTask}>Add</button>
                            </div>

                            <ul className="manager-todo-list ">
                                {tasks?.map((task) => (
                                    <li
                                        key={task.id}
                                        className={
                                            task.completed ? "completed" : ""
                                        }
                                    >
                                        <span
                                            onClick={() =>
                                                toggleComplete(task.id)
                                            }
                                        >
                                            {task.text}
                                        </span>
                                        <button
                                            className="delete"
                                            onClick={() => deleteTask(task.id)}
                                        >
                                            <MdDeleteOutline />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;
