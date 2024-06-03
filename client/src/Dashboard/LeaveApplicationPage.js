import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const LeaveApplicationPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [totalDays, setTotalDays] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleApply = () => {
        // Logic for applying leave
        console.log('Leave applied from:', startDate, 'to', endDate);
        console.log('Total days:', totalDays);
        console.log('Remarks:', remarks);
    };

    return (
        <Box sx={{ padding: 3, marginLeft: '240px' }}>
            <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Apply for Leave</Typography>
                <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                    <TextField
                        label="Total Number of Days"
                        type="number"
                        value={totalDays}
                        onChange={(e) => setTotalDays(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        label="Remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                    />
                </Box>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleApply}>
                    Apply
                </Button>
            </Paper>
        </Box>
    );
};

export default LeaveApplicationPage;
