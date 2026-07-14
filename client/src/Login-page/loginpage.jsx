import React, { useContext } from 'react';
import '../Login-page/login-page.css';
import DataContext from '../Context/AdminContext/Datacontext';

const Loginpage = () => {
    const { handleChange, handleLogin, error } = useContext(DataContext);

    return (
        <div className="login-page">
            <section className="input-image">
                <div className="login-side  col-md-6">
                    <h2>LOG-IN</h2>

                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-div email-input">
                            <label className="labelone">User Email:</label>
                            <input
                                className="input"
                                type="text"
                                name="email"
                                required
                                placeholder="Enter Your Email"
                                // value="Admin123@gmail.com"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-div password-input">
                            <label className="labelone">User Password:</label>
                            <input
                                className="input"
                                type="password"
                                name="password"
                                required
                                placeholder="Enter Your Password"
                                // value="Admin123"
                                onChange={handleChange}
                            />
                        </div>
                        <button className="login-button" type="submit">
                            Submit
                        </button>
                        <div className="error">
                            {error && (
                                <h5 style={{ color: 'red', margin: '0' }}>
                                    {error}
                                </h5>
                            )}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Loginpage;
