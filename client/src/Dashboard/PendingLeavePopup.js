import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText, Box } from '@mui/material';

const dummyPendingLeaves = [
  { name: "John Doe", days: 3, remarks: "Medical Leave" },
  { name: "Jane Smith", days: 5, remarks: "Family Emergency" }
];

const PendingLeavePopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ color: 'orange' }}>Pending Leaves</DialogTitle>
      <DialogContent>
        <List>
          {dummyPendingLeaves.map((leave, index) => (
            <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <ListItemText 
                primary={`${leave.name} - ${leave.days} days`} 
                secondary={leave.remarks} 
                sx={{ color: 'black' }}
              />
              <Box sx={{ display: 'flex', gap: 2, marginTop: 1 }}>
                <Button variant="contained" sx={{ backgroundColor: 'orange', '&:hover': { backgroundColor: 'darkorange' } }}>
                  Approve
                </Button>
                <Button variant="contained" sx={{ backgroundColor: 'grey', '&:hover': { backgroundColor: 'darkgrey' } }}>
                  Reject
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: 'orange' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PendingLeavePopup;
