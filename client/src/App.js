import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Sidebar/Sidebar';
import LeaveApplicationPage from './Dashboard/LeaveApplicationPage';
import RecordsPage from './Dashboard/RecordsPage';
import AttendanceRecordPage from './Dashboard/AttendanceRecordPage';

function App() {
// <<<<<<< HEAD
//   return (
//     <Router>
//       <div className="App">
//         {/* <Sidebar /> */}
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/apply-for-leave" element={<LeaveApplicationPage />} />
//         </Routes>
//       </div>
//     </Router>
// //   );
// =======
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/apply-for-leave" element={<LeaveApplicationPage />} />
                    <Route path="/records" element={<RecordsPage />} />
                    <Route path="/Attendance-Record-Page" element={<AttendanceRecordPage />} />
                </Routes>
            </div>
        </Router>
    );
// >>>>>>> 1f7306a5116725de569dff503b0b11ede7ff2624
}

export default App;
