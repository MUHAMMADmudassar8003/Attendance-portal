import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const LeaveApplicationPage = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false); // State for success dialog
    const [totalDays, setTotalDays] = useState('');

    useEffect(() => {
        if (startDate && endDate) {
            const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setTotalDays(diffDays);
        }
    }, [startDate, endDate]);

    const handleApply = () => {
        setOpenSuccessDialog(true); // Open success dialog
    };

    const handleCloseSuccessDialog = () => {
        setOpenSuccessDialog(false); // Close success dialog
    };

    return (
        <Box sx={{ padding: 3, marginLeft: '240px', display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ padding: 2, backgroundColor: 'grey.100', width: '400px' }}>
                <Typography variant="h6" sx={{ color: 'orange' }}>Apply for Leave</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={(newValue) => setStartDate(newValue)}
                            renderInput={(params) => <TextField {...params} sx={{ '& .MuiOutlinedInput-root': { borderColor: 'orange' } }} />}
                        />
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={(newValue) => setEndDate(newValue)}
                            renderInput={(params) => <TextField {...params} sx={{ '& .MuiOutlinedInput-root': { borderColor: 'orange' } }} />}
                        />
                    </LocalizationProvider>
                </Box>
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel sx={{ color: 'orange' }}>Leave Type</InputLabel>
                    <Select
                        value={leaveType}
                        onChange={(e) => setLeaveType(e.target.value)}
                        label="Leave Type"
                        sx={{ '& .MuiOutlinedInput-root': { borderColor: 'orange' } }}
                    >
                        <MenuItem value="Annual Leave">Annual Leave</MenuItem>
                        <MenuItem value="Medical Leave">Medical Leave</MenuItem>
                        <MenuItem value="Casual Leave">Casual Leave</MenuItem>
                    </Select>
                </FormControl>
                {startDate && endDate && (
                    <Typography variant="body1" sx={{ marginTop: 2, color: 'grey.800' }}>
                        Total number of days: {totalDays}
                    </Typography>
                )}
                <Box sx={{ marginTop: 2 }}>
                    <TextField
                        label="Remarks"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderColor: 'orange',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'orange',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'orange',
                            },
                            '& .MuiInputBase-input': {
                                color: 'black',
                            },
                        }}
                    />
                </Box>
                <Button variant="contained" sx={{ marginTop: 2, backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }} onClick={handleApply}>
                    Apply
                </Button>
                {/* Dialog to display success message */}
                <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
                    <DialogTitle sx={{ color: 'orange' }}>Success</DialogTitle>
                    <DialogContent>
                        <Typography sx={{ color: 'green' }}>Your leave application has been successfully submitted and is awaiting approval.</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseSuccessDialog} sx={{ color: 'orange' }}>OK</Button>
                    </DialogActions>
                </Dialog>
            </Paper>
        </Box>
    );
};

export default LeaveApplicationPage;
