for (const i of new Array(1e7).fill('foo')) {
  Boolean(i);
}
process.send?.(process.memoryUsage().rss);
