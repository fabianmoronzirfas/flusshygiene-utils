import protocoolMessage from '../src/lib/protocool';

const defaultObjStr = '{"type":"DEFAULT"}';
describe('testing protocool', () => {
  test('should return default string', () => {
    expect(protocoolMessage()).toBe(defaultObjStr);
  });
  test('should return example string', () => {
    const obj = {type: 'foo', payload: {baz: 'bah'}};
    expect(protocoolMessage(obj)).toBe(JSON.stringify(obj));
  });
  test('should return empty payload string object', () => {
    const obj = {type: 'foo', payload: {}};
    expect(protocoolMessage(obj)).toBe(JSON.stringify(obj));
  });
  test('should return default object string even if empty', () => {
    const obj = {};
    expect(protocoolMessage(obj)).toBe(defaultObjStr);
  });
  test('should wrap a string into the  default object string', () => {
    const str = 'foo';
    const res = JSON.parse(defaultObjStr);
    res.payload = str;
    expect(protocoolMessage(str)).toBe(JSON.stringify(res));
  });
});
