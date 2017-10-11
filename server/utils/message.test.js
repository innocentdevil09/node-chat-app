const expect = require('expect');

const {generateMessage} = require('./message');
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
