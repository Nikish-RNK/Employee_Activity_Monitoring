import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ManagerAside from '../Components/Manager-Dashboard/ManagerAside/ManagerAside';
import ManagerDashBoard from '../Components/Manager-Dashboard/pages/ManagerDashBoard';
import ManagerProjects from '../Components/Manager-Dashboard/pages/ManagerProject';
import ManagerBookedRooms from '../Components/Manager-Dashboard/pages/ManagerBookedRooms';
import { DataProviderTwo } from '../Context/AdminContext/AnotherContext';
import { DataProvider } from '../Context/AdminContext/Datacontext';

const ManagerRoot = () => {
    return (
        <DataProvider>
            <DataProviderTwo>
                <Routes>
                    <Route path="manageraside" element={<ManagerAside />}>
                        <Route index element={<ManagerDashBoard />} />
                        <Route
                            path="manager-projects"
                            element={<ManagerProjects />}
                        />
                        <Route
                            path="manager-booked-rooms"
                            element={<ManagerBookedRooms />}
                        />
                    </Route>
                </Routes>
            </DataProviderTwo>
        </DataProvider>
    );
};

export default ManagerRoot;
