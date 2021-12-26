import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (email, password) => {
  try {
    const response = await AsyncStorage.getItem(email);

    if (response !== null) {
      const responseObject = JSON.parse(response);
      if (responseObject.password === password) {
        await AsyncStorage.setItem('currentUser', email);
        return responseObject;
      } else {
        throw {message: 'Invalid Password'};
      }
    } else {
      throw {message: 'No User Found'};
    }
  } catch (e) {
    throw {message: e.message};
  }
};

export const createUser = async user => {
  const {name, email, phone_number, password} = user;
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(email, jsonValue);
    return user;
  } catch (e) {
    throw {message: 'Error creating user'};
    // saving error
  }
};

export const logoutUser = async () => {
  try {
    await AsyncStorage.setItem('currentUser', '');
  } catch (e) {
    throw {message: 'Error Logging Out'};
    // saving error
  }
};
