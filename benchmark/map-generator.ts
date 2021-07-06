import repeat from '../src/repeat';
import starmap from '../src/starmap';

starmap((i) => i + 1, repeat([1], 1e7));
process.send?.(process.memoryUsage().rss);
