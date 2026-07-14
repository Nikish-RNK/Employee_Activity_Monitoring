import React, { useContext } from "react";
import AnotherContext from "../../../Context/AdminContext/AnotherContext";

const UserBookedRooms = () => {
    const { bookedRooms } = useContext(AnotherContext);

    return (
        <div className="container">
            <div className="text-center my-4 manager-room-heading">
                <h3>Booked Rooms</h3>
            </div>

            <div className="table-responsive">
                <table className="table text-center">
                    <thead className="table-light">
                        <tr>
                            <th>SI/No</th>
                            <th>Meeting Head</th>
                            <th>Room No.</th>
                            <th>Booking Date</th>
                            <th>Reason for Meeting</th>
                            <th>Meeting Starting Time</th>
                            <th>Meeting Ending Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedRooms.map((room, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{room.projectHead}</td>
                                <td>{room.roomsForMeeting}</td>
                                <td>
                                    {new Date(
                                        room.bookingDate
                                    ).toLocaleDateString()}
                                </td>
                                <td>{room.reasonForMeeting}</td>
                                <td>{room.meetingStartingTime}</td>
                                <td>{room.meetingEndingTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserBookedRooms;
