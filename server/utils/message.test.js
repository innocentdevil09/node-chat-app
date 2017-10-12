const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');
describe('Test generateMessage', () => {
  it('should return message', () => {
    var from = 'Andrew';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from: from,
      text: text
    });
  });
});
describe('Test generateLocationMessage', () => {
  it('should return valid location object', () => {
    var from = 'Jen';
    var latitude = 12;
    var longitude = 9;
    var url = 'https://www.google.com/maps?q=12,9';
    var location = generateLocationMessage(from, latitude, longitude);
    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({
      from: from,
      url: url
    });
  });
});
