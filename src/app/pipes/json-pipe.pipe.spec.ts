import { JsonPipePipe } from './json-pipe.pipe';

describe('JsonPipePipe', () => {
  it('create an instance', () => {
    const pipe = new JsonPipePipe();
    expect(pipe).toBeTruthy();
  });
});
