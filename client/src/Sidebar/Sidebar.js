import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
                },
            }}
        >
            <Typography variant="h6" sx={{ padding: '16px' }}>
                IDAP
            </Typography>
            <List>
                {['Dashboard', 'Reports', 'Performance', 'Training', 'Apply For Leave'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={text === 'Dashboard' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
