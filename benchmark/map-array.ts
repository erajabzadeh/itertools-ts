new Array(1e7).fill(1).map((i) => i + 1);
process.send?.(process.memoryUsage().rss);
