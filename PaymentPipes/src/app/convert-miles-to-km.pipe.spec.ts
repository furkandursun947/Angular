import { ConvertMilesToKMPipe } from './convert-miles-to-km.pipe';

describe('ConvertMilesToKMPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertMilesToKMPipe();
    expect(pipe).toBeTruthy();
  });
});
