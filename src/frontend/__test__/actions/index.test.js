import { setFavorite, loginRequest } from '../../actions';
import playerMock from '../../__mocks__/playerMock';

describe('Actions', () => {
  test('set favorite', () => {
    const payload = playerMock;
    const expectedAction = {
      type: 'SET_FAVORITE',
      payload,
    };
    expect(setFavorite(payload)).toEqual(expectedAction);
  });

  test('Login', () => {
    const payload = {
      email: 'test@test.com',
      password: 'password',
    };
    const expectedAction = {
      type: 'LOGIN_REQUEST',
      payload,
    };
    expect(loginRequest(payload)).toEqual(expectedAction);
  });
});
