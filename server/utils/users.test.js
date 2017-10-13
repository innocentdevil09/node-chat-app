const expect = require('expect');
const {Users} = require('./users');

describe('Test users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users =[{
      id: '1',
      name: 'Jen',
      room: 'Node class'
    }, {
      id: '2',
      name: 'Mike',
      room: 'React class'
    }, {
      id: '3',
      name: 'Julie',
      room: 'React class'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'Node class'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should get all the users of a room', () => {
    var userArray = users.getUserList('React class');
    expect(userArray).toEqual(['Mike', 'Julie']);
  });
  it('should get all the users of a room', () => {
    var userArray = users.getUserList('Node class');
    expect(userArray).toEqual(['Jen']);
  });

  it('should get user of an id', () => {
    var user = users.getUser('1');
    expect(user.id).toBe('1');
  });
  it('should not return any user of bogus id', () => {
    var user = users.getUser('90');
    expect(user).toNotExist();
  });

  it('should remove user of given id', () => {
    var user = users.removeUser('3');
    expect(user.name).toEqual('Julie');
    expect(users.users.length).toBe(2);
  });
  it('should not remove any user using invalid id', () => {
    var user = users.removeUser('09');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });
});
