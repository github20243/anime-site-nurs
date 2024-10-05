import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/anime">
            Каталог
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
