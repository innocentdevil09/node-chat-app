const expect = require('expect');
const {isRealString} = require('./validation');

describe('Test isRealString', () => {
  it('should not send non-string values', () => {
    var resp = isRealString(98);
    expect(resp).toBe(false);
  });

  it('should not send empty values', () => {
    var resp = isRealString('         ');
    expect(resp).toBe(false);
  });

  it('should send string values', () => {
    var resp = isRealString('     Andrew  ');
    expect(resp).toBe(true);
  });
});
