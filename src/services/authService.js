import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';

export const loginUser = async (credentials) => {
  const mockUser = { id: '1', name: 'Test User', email: credentials.email };
  Cookies.set(TOKEN_KEY, 'mock-token', { expires: 7 });
  return mockUser;
};

export const registerUser = async (userData) => {
  const mockUser = { id: '1', name: userData.name, email: userData.email };
  Cookies.set(TOKEN_KEY, 'mock-token', { expires: 7 });
  return mockUser;
};

export const logoutUser = async () => {
  Cookies.remove(TOKEN_KEY);
};

loginUser.checkSession = async () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    return { id: '1', name: 'Akash', email: 'akash@gmail.com' };
  }
  return null;
};