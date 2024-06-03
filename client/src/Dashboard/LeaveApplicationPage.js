import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const LeaveApplicationPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [openDialog, setOpenDialog] = useState(false); // State for dialog
    const [totalDays, setTotalDays] = useState('');

    const calculateTotalDays = () => {
        const start = startDate;
        const end = endDate;
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const handleApply = () => {
        const totalDays = calculateTotalDays();
        setTotalDays(totalDays);
        setOpenDialog(true); // Open dialog
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // Close dialog
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
                {/* Dialog to display total days */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Total Days</DialogTitle>
                    <DialogContent>
                        <Typography>{`Total number of days: ${totalDays}`}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>OK</Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Box>
    );
};

export default LeaveApplicationPage;
