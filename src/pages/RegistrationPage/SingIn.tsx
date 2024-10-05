import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import backgroundImage from '../../assets/img/ai-generated-8750166_1920.jpg';
import Spinner from '../../components/spinner/Spinner';
import { useAppDispatch } from '../../hooks/customHook';
import { loginUser } from '../../api/authApi';

type SignInInputs = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isGoingBack, setIsGoingBack] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    try {
      const resultAction = await dispatch(loginUser(data)).unwrap();
      console.log('Успешный вход:', resultAction);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  const handleGoBack = () => {
    setIsGoingBack(true);
    let timer = countdown;
    const countdownInterval = setInterval(() => {
      timer -= 1;
      setCountdown(timer);
      if (timer === 0) {
        clearInterval(countdownInterval);
        navigate('/signup');
      }
    }, 1000);
  };

  return (
    <PageWrapper>
      <BackButton
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
        disabled={isGoingBack}
      >
        {isGoingBack ? (
          <CountdownWrapper>
            <Typography variant="body2" style={{ fontSize: '0.8rem', color: "white" }}>
              Возврат через {countdown}...
              <Spinner isLoading={isGoingBack} />
            </Typography>
          </CountdownWrapper>
        ) : (
          'Назад'
        )}
      </BackButton>
      <StyledContainer maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'Sofadi One, system-ui', textAlign: 'center' }}>
          Вход в систему
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTextField
            label="Email"
            {...register("email", { 
              required: "Email обязателен", 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный формат email"
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <StyledTextField
            label="Пароль"
            type="password"
            {...register("password", { 
              required: "Пароль обязателен",
              minLength: {
                value: 6,
                message: "Пароль должен содержать минимум 6 символов"
              }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <StyledButton type="submit" variant="contained" color="primary">
            Войти
          </StyledButton>
        </StyledForm>
      </StyledContainer>
    </PageWrapper>
  );
};

export default SignIn;

const PageWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(4),
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const BackButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
}));

const CountdownWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});
