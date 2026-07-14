import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginpage from '../Login-page/loginpage';
import Aside from '../Components/Admin-Dashboard/Aside/Aside';
import DashBoard from '../Components/Admin-Dashboard/pages/DashBoard';
import AddEmployee from '../Components/Admin-Dashboard/pages/AddEmployee';
import AllEmployees from '../Components/Admin-Dashboard/pages/AllEmployees';
import { DataProvider } from '../Context/AdminContext/Datacontext';
import { DataProviderTwo } from '../Context/AdminContext/AnotherContext';
import Projects from '../Components/Admin-Dashboard/pages/Projects';
import AssignProject from '../Components/Admin-Dashboard/pages/AssignProject';
import Attendance from '../Components/Admin-Dashboard/pages/Attendance';
import Wrongpage from '../Errorpage/Wrongpage';
import MeetingRoom from '../Components/Admin-Dashboard/pages/MeetingRoom';
import AllMeetingRooms from '../Components/Admin-Dashboard/pages/BookedRooms';
import ActivityMonitoring from '../Components/Admin-Dashboard/pages/ActivityMonitoring';

const AdminRoot = () => {
    return (
        <DataProvider>
            <DataProviderTwo>
                <Routes>
                    <Route path="/" element={<Loginpage />} />
                    <Route path="/aside" element={<Aside />}>
                        <Route index element={<DashBoard />} />
                        <Route path="addemployee" element={<AddEmployee />} />
                        <Route path="allemployees" element={<AllEmployees />} />
                        <Route path="addproject" element={<Projects />} />
                        <Route
                            path="assignproject"
                            element={<AssignProject />}
                        />
                        <Route path="attendance" element={<Attendance />} />
                        <Route path="meeting-room" element={<MeetingRoom />} />
                        <Route
                            path="all-meeting-room"
                            element={<AllMeetingRooms />}
                        />
                        <Route
                            path="Activity-Monitoring"
                            element={<ActivityMonitoring />}
                        />
                        <Route path="*" element={<Wrongpage />} />
                    </Route>
                </Routes>
            </DataProviderTwo>
        </DataProvider>
    );
};

export default AdminRoot;
