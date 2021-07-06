import repeat from '../src/repeat';

for (const i of repeat('fee', 1e7)) {
  Boolean(i);
}
process.send?.(process.memoryUsage().rss);
