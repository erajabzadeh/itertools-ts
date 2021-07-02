import { Readable, pipeline } from 'stream';
import { writableNoopStream } from 'noop-stream';

import repeat from '../src/repeat';

pipeline(Readable.from(repeat('foo', 1e7)), writableNoopStream(), () =>
  process.send?.(process.memoryUsage().rss)
);
