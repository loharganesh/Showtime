import React from 'react';

// Redux
import {useSelector, useDispatch} from 'react-redux';

// Actions
import {logout} from '../../redux/user/user.actions';

// Styled Components
import {Container, Info} from './profile.styles';
import {Spacer} from '../../components/elements';

// Components
import {Icon} from '../../components/icon/icon.component';
import {
  Title,
  Button,
  Paragraph,
  TextInput,
  Avatar,
  Caption,
} from 'react-native-paper';
import {View, Text} from 'react-native';

export const ProfileScreen = () => {
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleLogoutBtnPress = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Spacer size="medium" />
      <Avatar.Image
        size={65}
        source={{
          uri: 'https://camo.githubusercontent.com/c6fe2c13c27fe87ac6581b9fe289d2f071bd1b4ef6f3e3c5fc2aba0bbc23fd88/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37632f50726f66696c655f6176617461725f706c616365686f6c6465725f6c617267652e706e67',
        }}
      />
      <Spacer />
      <Title>{user.name}</Title>
      <Info>
        <Icon name="EMAIL_LINE" size={18} />
        <Spacer position="left" size="xsmall" />
        <Caption>{user.email}</Caption>
        <Spacer position="left" size="regular" />
        <Icon name="PHONE_LINE" size={16} />
        <Spacer position="left" size="xsmall" />
        <Caption>{user.phone_number}</Caption>
      </Info>
      <Spacer size="regular" />
      <Button mode="contained" onPress={handleLogoutBtnPress}>
        Logout
      </Button>
    </Container>
  );
};
