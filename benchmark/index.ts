import { fork } from 'child_process';
import { once } from 'events';

const megaBytes = (n: number): number => Math.trunc(n / 1024 / 1024);

async function runGroup(label: string, scriptPath: string) {
  console.group(label);
  const process = fork(scriptPath);
  const [bytesUsed] = await once(process, 'message');
  console.log(`memory usage = ${megaBytes(bytesUsed)}MB`);
  console.groupEnd();
}

async function run() {
  console.log('running benchmarks...');
  await runGroup('stream-array', `${__dirname}/stream-array.js`);
  await runGroup('stream-generator', `${__dirname}/stream-generator.js`);
}

run().then(() => console.log('done'));
