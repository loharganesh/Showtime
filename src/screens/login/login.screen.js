import React, {useState, useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';

// Actions
import {startLogin} from '../../redux/user/user.actions';

// Utils
import {isValidEmail, isValidPassword} from '../../utils/string-helpers';

// Styled Components
import {Container} from './login.styles';

// Components
import {Spacer} from '../../components/elements';
import {Headline, TextInput, Button, Caption} from 'react-native-paper';

export const LoginScreen = () => {
  const {user, logingIn, error} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailInpError, setEmailInpError] = useState(false);
  const [passwordInpError, setPasswordInpError] = useState(false);

  const handleEmailInputChange = email => {
    setEmail(email);
  };

  const handlePasswordInputChange = password => {
    setPassword(password);
  };

  const handleLoginBtnPress = () => {
    if (email === '' || password === '') return;
    dispatch(startLogin(email, password));
  };

  useEffect(() => {
    if (email !== '') {
      setEmailInpError(!isValidEmail(email));
    } else {
      setEmailInpError(false);
    }
  }, [email]);

  useEffect(() => {
    if (password !== '' && isValidPassword(password) === false) {
      setPasswordInpError(!isValidPassword(password));
    } else {
      setPasswordInpError(false);
    }
  }, [password]);

  return (
    <Container>
      <Headline>Login to{'\n'}your account</Headline>
      <Spacer />
      <TextInput
        error={emailInpError}
        name="username"
        placeholder="Username"
        label="Username"
        value={email}
        onChangeText={handleEmailInputChange}
      />
      <Spacer />
      <TextInput
        error={passwordInpError}
        placeholder="Password"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordInputChange}
      />
      {error && <Caption>{error.message}</Caption>}
      {passwordInpError && (
        <Caption>
          Minimum eight characters, at least one uppercase letter, one lowercase
          letter and one number
        </Caption>
      )}
      <Spacer />
      <Button
        mode="contained"
        loading={logingIn}
        disabled={logingIn}
        onPress={handleLoginBtnPress}>
        {logingIn ? 'Loging in' : 'Login'}
      </Button>
    </Container>
  );
};
