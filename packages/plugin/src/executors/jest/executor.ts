import { ExecutorContext } from '@nrwl/devkit';
import { jestExecutor } from '@nrwl/jest/src/executors/jest/jest.impl';

import { JestExecutorOptions } from './schema';

export default async function runExecutor(
  options: JestExecutorOptions,
  context: ExecutorContext
) {
  return await jestExecutor(options, context);
}
