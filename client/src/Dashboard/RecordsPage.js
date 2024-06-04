import React from 'react';
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const RecordsPage = () => {
    return (
        <Box sx={{ padding: 3, marginLeft: '240px' }}>
            <Typography variant="h4" gutterBottom>
                Attendance Records
            </Typography>
            <Paper sx={{ padding: 2 }}>
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
        </Box>
    );
};

export default RecordsPage;
