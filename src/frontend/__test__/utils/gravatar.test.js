import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = '2gmurillo@gmail.com';
  const gravatarUrl =
    'https://gravatar.com/avatar/7ca45fe6ed52f751c88df3f9bfa34da6';
  expect(gravatarUrl).toEqual(gravatar(email));
});
