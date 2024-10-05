import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '../../hooks/customHook';
import { logoutUser } from '../../api/authApi'; // Исправленный импорт
import { toast } from 'react-toastify'; // Импортируйте Toastify для уведомлений

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  const handleLogout = async () => {
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      // Если выход успешен, перенаправьте пользователя
      navigate('/');
    } else {
      // Если выход не удался, покажите уведомление об ошибке
      toast.error('Не удалось выйти');
    }
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Logo variant="h6">AnimeSite</Logo>
        <Navigation>
          <Link to="/">Home</Link>
          {!isAuthenticated ? (
            <>
              <StyledButton onClick={() => navigate('/signin')} variant="outlined" color="inherit">
                Sign In
              </StyledButton>
              <StyledButton  onClick={() => navigate('/signup')} variant="outlined" color="inherit">
                Sign Up
              </StyledButton>
            </>
          ) : (
            <>
              <StyledButton  onClick={() => navigate('/profile')} variant="outlined" color="inherit">
                Profile
              </StyledButton>
              <StyledButton onClick={handleLogout} variant="outlined" color="inherit">
                Log Out
              </StyledButton>
            </>
          )}
        </Navigation>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

// Остальной код для стилизованных компонентов

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main,
  boxShadow: 'none',
  padding: '2px 16px',
  position: 'relative',
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 1,
}));

const Logo = styled(Typography)(() => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#fff',
  fontFamily: "'Russo One', sans-serif",
  '&:hover': {
    transform: 'scale(1.05) rotate(-5deg)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const Navigation = styled('nav')(() => ({
  display: 'flex',
  alignItems: 'center',
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '24px',
    fontSize: '1.2rem',
    position: 'relative',
    fontFamily: "'Roboto', sans-serif",
    '&:after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '-5px',
      left: 0,
      background: 'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',
      visibility: 'hidden',
      transform: 'scaleX(0)',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover:after': {
      visibility: 'visible',
      transform: 'scaleX(1)',
    },
    '&:hover': {
      textShadow: '0 0 10px rgba(255,255,255,0.8)',
    },
  },
}));

const StyledButton = styled(Button)(() => ({
  color: '#fff',
  borderColor: '#fff',
  marginLeft: '10px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));
