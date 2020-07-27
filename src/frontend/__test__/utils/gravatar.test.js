import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'jhon.electronica@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/15be35d14d880def7767866e79e748d0';
  expect(gravatarUrl).toEqual(gravatar(email));
});
