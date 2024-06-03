import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Grid, Paper } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const LeaveApplicationPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalDays, setTotalDays] = useState(0);
    const [reason, setReason] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
        if (endDate && date) {
            calculateTotalDays(date, endDate);
        }
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        if (startDate && date) {
            calculateTotalDays(startDate, date);
        }
    };

    const calculateTotalDays = (start, end) => {
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Including the end date
        setTotalDays(diffDays);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Leave application submitted:', { startDate, endDate, totalDays, reason });
        // Here you can add your logic to send this data to the server
    };

    return (
        <Container maxWidth="sm">
            <Paper sx={{ padding: 3, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>Apply for Leave</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <DatePicker
                                    label="Start Date"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <DatePicker
                                    label="End Date"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                    renderInput={(params) => <TextField {...params} fullWidth />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Total Days"
                                    value={totalDays}
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Reason for Leave"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </Box>
            </Paper>
        </Container>
    );
};

export default LeaveApplicationPage;
