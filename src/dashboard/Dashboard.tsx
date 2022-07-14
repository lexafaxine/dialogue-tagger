import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Header } from './header';
import { SideNav } from './sidenav';
import { MainContent } from './mainContent';

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer}></Header>
        <SideNav open={open} toggleDrawer={toggleDrawer}></SideNav>
        <MainContent></MainContent>
      </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
