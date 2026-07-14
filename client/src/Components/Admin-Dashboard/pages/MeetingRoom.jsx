import React, { useContext } from 'react';
import '../css/MeetingRoom.css';
import DataContext from '../../../Context/AdminContext/Datacontext';
import PopUp from '../../Popup/PopUp';

const MeetingRoom = () => {
    const {
        handleChange,
        allManager,
        bookRoom,
        handleBookingRoom,
        popUp,
        setPopUp,
    } = useContext(DataContext);

    return (
        <div className="meeting-page">
            {/* ── Header ── */}
            <div className="meeting-header">
                <div className="meeting-header-top">
                    <h4>Room Booking</h4>
                    <span className="meeting-header-tag">— Form</span>
                </div>
            </div>

            <div className="meeting-card-content">
                <form onSubmit={handleBookingRoom} className="meeting-form">
                    {/* ── Row 1 ── */}
                    <div className="meeting-grid">
                        <div className="form-group">
                            <label>Project Head</label>
                            <select
                                name="projectHead"
                                value={bookRoom?.projectHead}
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

                        <div className="form-group">
                            <label>Available Room</label>
                            <select
                                name="roomsForMeeting"
                                value={bookRoom.roomsForMeeting}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Room
                                </option>
                                <option value="Room A">Room A</option>
                                <option value="Room B">Room B</option>
                                <option value="Room C">Room C</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Reason</label>
                            <input
                                type="text"
                                name="reasonForMeeting"
                                value={bookRoom.reasonForMeeting}
                                onChange={handleChange}
                                placeholder="Reason for booking"
                            />
                        </div>
                    </div>

                    {/* ── Row 2 ── */}
                    <div className="meeting-grid">
                        <div className="form-group">
                            <label>Booking Date</label>
                            <input
                                type="date"
                                name="bookingDate"
                                value={bookRoom.bookingDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Meeting Start Time</label>
                            <input
                                type="time"
                                name="meetingStartingTime"
                                value={bookRoom.meetingStartingTime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Meeting End Time</label>
                            <input
                                type="time"
                                name="meetingEndingTime"
                                value={bookRoom.meetingEndingTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* ── Row 3 ── */}
                    <div className="meeting-full-row">
                        <div className="form-group">
                            <label>Additional Requirements</label>
                            <input
                                type="text"
                                name="additionalRequirement"
                                value={bookRoom.additionalRequirement}
                                onChange={handleChange}
                                placeholder="e.g. Projector, whiteboard, coffee..."
                            />
                        </div>
                    </div>

                    {/* ── Footer Buttons ── */}
                    <div className="meeting-btns">
                        <button type="submit" className="btn-primary">
                            Book Room
                        </button>
                    </div>
                </form>
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

export default MeetingRoom;
