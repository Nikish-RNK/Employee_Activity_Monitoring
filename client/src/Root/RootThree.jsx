import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProviderTwo } from '../Context/AdminContext/AnotherContext';
import { DataProvider } from '../Context/AdminContext/Datacontext';
import UserAside from '../Components/User-dashboard/UserAside/userAside';
import UserDashBoard from '../Components/User-dashboard/pages/UserDashboard';
import UserProjects from '../Components/User-dashboard/pages/UserProject';
import UserBookedRooms from '../Components/User-dashboard/pages/UserBookedRooms';

const UserRoot = () => {
    return (
        <DataProvider>
            <DataProviderTwo>
                <Routes>
                    <Route path="userAside" element={<UserAside />}>
                        <Route index element={<UserDashBoard />} />
                        <Route
                            path="user-projects"
                            element={<UserProjects />}
                        />
                        <Route
                            path="user-booked-rooms"
                            element={<UserBookedRooms />}
                        />
                    </Route>
                </Routes>
            </DataProviderTwo>
        </DataProvider>
    );
};

export default UserRoot;
