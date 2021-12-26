import React, {useState, useEffect} from 'react';

// Utils
import {isValidEmail, isValidPassword} from '../../utils/string-helpers';

import {useSelector, useDispatch} from 'react-redux';

// Actions
import {startCreateUser} from '../../redux/user/user.actions';

// Styled Components
import {Container} from './register.styles';

// Components
import {Spacer} from '../../components/elements';
import {Headline, TextInput, Button, Caption} from 'react-native-paper';

export const RegisterScreen = () => {
  const {logingIn} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailInpError, setEmailInpError] = useState(false);
  const [passwordInpError, setPasswordInpError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleNameChange = name => {
    setName(name);
  };
  const handleEmailChange = email => {
    setEmail(email);
  };
  const handlePhoneNumberChange = phoneNumber => {
    setPhoneNumber(phoneNumber);
  };
  const handlePasswordChange = password => {
    setPassword(password);
  };
  const handleConfirmPasswordChange = confirmPassword => {
    setConfirmPassword(confirmPassword);
  };

  const handleCreateAccountBtnPress = () => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      phoneNumber === '' ||
      password !== confirmPassword
    )
      return;
    const user = {name, email, password, phone_number: phoneNumber};
    dispatch(startCreateUser(user));
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

  useEffect(() => {
    if (confirmPassword === '') {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(confirmPassword !== password);
    }
  }, [confirmPassword]);

  return (
    <Container>
      <Headline>Create a new account</Headline>
      <Spacer />
      <TextInput
        placeholder="Name"
        label="Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <Spacer />
      <TextInput
        error={emailInpError}
        placeholder="Email"
        label="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <Spacer />
      <TextInput
        placeholder="Phone Number"
        label="Phone Number"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <Spacer />
      <TextInput
        error={passwordInpError}
        placeholder="Password"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      {passwordInpError && (
        <Caption>
          Minimum eight characters, at least one uppercase letter, one lowercase
          letter and one number
        </Caption>
      )}
      <Spacer />
      <TextInput
        error={confirmPasswordError}
        placeholder="Confirm Password"
        label="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />
      <Spacer />
      <Button
        mode="contained"
        loading={logingIn}
        disabled={logingIn}
        onPress={handleCreateAccountBtnPress}>
        {logingIn ? 'Creating Account' : 'Create Account'}
      </Button>
    </Container>
  );
};
