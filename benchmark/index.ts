import { fork } from 'child_process';
import { once } from 'events';

const megaBytes = (n: number): number => Math.trunc(n / 1024 / 1024);

async function runGroup(label: string, scriptPath: string) {
  console.group(label);
  const benchmark = fork(scriptPath);
  const [bytesUsed] = await once(benchmark, 'message');
  console.log(`memory = ${megaBytes(bytesUsed)}MB`);
  console.groupEnd();
}

async function run() {
  console.log('running benchmarks...');

  await runGroup('loop-array', `${__dirname}/loop-array.js`);
  await runGroup('loop-generator', `${__dirname}/loop-generator.js`);
  console.log();

  await runGroup('map-array', `${__dirname}/map-array.js`);
  await runGroup('map-generator', `${__dirname}/map-generator.js`);
  console.log();

  await runGroup('stream-array', `${__dirname}/stream-array.js`);
  await runGroup('stream-generator', `${__dirname}/stream-generator.js`);
  console.log();
}

run().then(() => console.log('done'));
