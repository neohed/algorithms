const dag_friends = new Map();

dag_friends.set('me', ['alice', 'bob', 'claire']);
dag_friends.set('bob', ['anuj', 'peggy']);
dag_friends.set('alice', ['peggy']);
dag_friends.set('claire', ['thom', 'johnny']);
dag_friends.set('anuj', []);
dag_friends.set('peggy', []);
dag_friends.set('thom', []);
dag_friends.set('johnny', []);

module.exports = {
  dag_friends
}
