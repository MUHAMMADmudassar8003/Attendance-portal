import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Assessment';
import AttendanceIcon from '@mui/icons-material/EventAvailable';
import TrainingIcon from '@mui/icons-material/School';
import LeaveIcon from '@mui/icons-material/AirplanemodeActive';
import RecordsIcon from '@mui/icons-material/LibraryBooks';

const Sidebar = () => {
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
        { text: 'Reports', icon: <ReportIcon />, path: '/reports' },
        { text: 'Attendance Record Page', icon: <AttendanceIcon />, path: '/attendance-record-page' },
        { text: 'Training', icon: <TrainingIcon />, path: '/training' },
        { text: 'Apply For Leave', icon: <LeaveIcon />, path: '/apply-for-leave' },
        { text: 'Records', icon: <RecordsIcon />, path: '/records' },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: '#2e3b4e',
                    color: 'white',
                    marginTop: '64px', // Adjust this if Navbar height changes
                },
            }}
        >
            <Typography variant="h6" sx={{ padding: '16px' }}>
                IDAP
            </Typography>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} component={Link} to={item.path}>
                        <ListItemIcon sx={{ color: 'white' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
