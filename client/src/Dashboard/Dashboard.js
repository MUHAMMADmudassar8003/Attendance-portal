import React from 'react';
import { Box, Paper, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemText } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ padding: 3, marginLeft: '240px', display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Timesheet</Typography>
                <Typography variant="body1">Punch in at</Typography>
                <Typography variant="h3" sx={{ marginY: 2 }}>3.45 hrs</Typography>
                <Button variant="contained" color="success">Punch Out</Button>
                <Typography variant="body2" sx={{ marginTop: 2 }}>BREAK: 1.21 hrs</Typography>
                <Typography variant="body2">Overtime: 3 hrs</Typography>
            </Paper>

            <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Statistics</Typography>
                <Typography variant="body2">Today: 3.45/8 hrs</Typography>
                <Typography variant="body2">This Week: 28/40 hrs</Typography>
                <Typography variant="body2">This Month: 90/160 hrs</Typography>
                <Typography variant="body2">Remaining: 90/160 hrs</Typography>
                <Typography variant="body2">Overtime: 5 hrs</Typography>
            </Paper>

            <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Today Activity</Typography>
                <List>
                    {['Punch in at 10:00 AM', 'Punch in at 11:00 AM', 'Punch in at 11:30 AM', 'Punch in at 1:30 AM'].map((text, index) => (
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
                            {[1, 2, 3, 4, 5, 6].map((row) => (
                                <TableRow key={row}>
                                    <TableCell>{row}</TableCell>
                                    <TableCell>19 Feb 2019</TableCell>
                                    <TableCell>10 AM</TableCell>
                                    <TableCell>7 PM</TableCell>
                                    <TableCell>9 hrs</TableCell>
                                    <TableCell>1 hr</TableCell>
                                    <TableCell>2 hrs</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Paper sx={{ padding: 2, gridColumn: 'span 2' }}>
                <Typography variant="h6">Daily Records</Typography>
                {/* Implement the chart component here */}
            </Paper>
        </Box>
    );
};

export default Dashboard;
