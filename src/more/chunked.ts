export default function* chunked<T>(
  iterable: Iterable<T>,
  n: number
): Generator<T[], void, T[] & undefined> {
  let chunk: T[] = [];
  for (const item of iterable) {
    chunk.push(item);
    if (chunk.length >= n) {
      yield chunk;
      chunk = [];
    }
  }

  if (chunk.length) {
    yield chunk;
  }
}
