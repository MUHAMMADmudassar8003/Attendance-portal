import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const attendanceData = [
    { id: 1, date: "19 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hr", overtime: "2 hrs" },
    { id: 2, date: "20 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hr", overtime: "2 hrs" },
    { id: 3, date: "21 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hr", overtime: "2 hrs" },
    { id: 4, date: "22 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hr", overtime: "2 hrs" },
    { id: 5, date: "23 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hr", overtime: "2 hrs" },
    { id: 6, date: "24 Feb 2019", punchIn: "10 AM", punchOut: "7 PM", production: "9 hrs", break: "1 hr", overtime: "2 hrs" },
  ];

  const activityLogs = [
    "Punch in at 10:00 AM",
    "Break at 12:00 PM",
    "Resume at 12:30 PM",
    "Punch out at 7:00 PM",
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      
      <Box
        sx={{
          padding: 3,
          marginTop: '64px',  // Adjust this value based on the height of your Navbar
          marginLeft: '240px',  // Adjust if your Sidebar has a fixed width
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Timesheet</Typography>
          <Typography variant="body1">Punch in at</Typography>
          <Typography variant="h3" sx={{ marginY: 2 }}>
            3.45 hrs
          </Typography>
          <Button variant="contained" color="success">
            Punch Out
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            BREAK: 1.21 hrs
          </Typography>
          <Typography variant="body2">Overtime: 3 hrs</Typography>
        </Paper>

        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Statistics</Typography>
          <Typography variant="body2">Today: 3.45/8 hrs</Typography>
          <Typography variant="body2">This Week: 28/40 hrs</Typography>
          <Typography variant="body2">This Month: 90/160 hrs</Typography>
          <Typography variant="body2">Remaining: 70/160 hrs</Typography>
          <Typography variant="body2">Overtime: 5 hrs</Typography>
        </Paper>

        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Today Activity</Typography>
          <List>
            {activityLogs.map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Attendance List</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S. No</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Punch In</TableCell>
                  <TableCell>Punch Out</TableCell>
                  <TableCell>Production</TableCell>
                  <TableCell>Break</TableCell>
                  <TableCell>Overtime</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendanceData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.punchIn}</TableCell>
                    <TableCell>{row.punchOut}</TableCell>
                    <TableCell>{row.production}</TableCell>
                    <TableCell>{row.break}</TableCell>
                    <TableCell>{row.overtime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper sx={{ padding: 2, gridColumn: "span 2" }}>
          <Typography variant="h6">Daily Records</Typography>
          {/* Implement the chart component here */}
        </Paper>
      </Box>
    </>
  );
};

export default Dashboard;
