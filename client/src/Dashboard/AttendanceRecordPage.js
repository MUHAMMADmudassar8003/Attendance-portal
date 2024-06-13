import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DataGrid } from '@mui/x-data-grid';
import dummyData from './dummyData';

const AttendanceRecordPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [filteredRecords, setFilteredRecords] = useState([]);

  const handleFilter = () => {
    const filtered = dummyData.filter(record => {
      const recordDate = new Date(record.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      return (
        (!start || recordDate >= start) &&
        (!end || recordDate <= end) &&
        (!statusFilter || record.status === statusFilter)
      );
    });

    setFilteredRecords(filtered);
  };

  const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'punchIn', headerName: 'Punch In', width: 150 },
    { field: 'punchOut', headerName: 'Punch Out', width: 150 },
  ];

  return (
    <>
    
      <Box sx={{ display: 'flex', marginLeft: '240px', paddingTop: '20px',marginTop: 0 }}>
        <Container maxWidth="lg">
          <Paper sx={{ padding: 4, marginBottom: 4, backgroundColor: 'grey.100' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'orange' }}>
              Attendance Records
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Absent">Absent</MenuItem>
                  <MenuItem value="Leave">Leave</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }} onClick={handleFilter}>
              Filter
            </Button>
          </Paper>
          <Paper sx={{ padding: 4, backgroundColor: 'grey.100' }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'orange' }}>
              Filtered Records
            </Typography>
            <Box sx={{ height: 400 }}>
              <DataGrid
                rows={filteredRecords}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                sx={{
                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: 'grey.300',
                  },
                  '& .MuiDataGrid-row': {
                    '&:nth-of-type(even)': { backgroundColor: 'grey.50' },
                  },
                }}
              />
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default AttendanceRecordPage;
