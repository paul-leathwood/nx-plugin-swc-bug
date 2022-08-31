import { JestExecutorSchema } from './schema';
import executor from './executor';

const options: JestExecutorSchema = {};

describe('Jest Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});