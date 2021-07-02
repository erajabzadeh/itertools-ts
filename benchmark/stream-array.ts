import { Readable, pipeline } from 'stream';
import { writableNoopStream } from 'noop-stream';

pipeline(Readable.from(new Array(1e7).fill('foo')), writableNoopStream(), () =>
  process.send?.(process.memoryUsage().rss)
);
