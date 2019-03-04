// import devlogGen from '../src/lib/devlog';
// import protocoolMessage from '../src/lib/protocool';
import {devlogger} from '../src/index';
import {protomessage} from '../src/index';

describe('all exports devlogGen', () => {
  test('what we have', () => {
    expect(devlogger).toBeInstanceOf(Function);
  });
  test('what we have in protocool', () => {
    expect(protomessage).toBeInstanceOf(Function);
  });
});
