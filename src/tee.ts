export default function tee<T>(
  iterable: Iterable<T>,
  n: number
): Iterable<T>[] {
  const values: T[] = [];
  const indices = Array(n).fill(0);
  const iterator = iterable[Symbol.iterator]();

  return Array(n)
    .fill(undefined)
    .map((_, i) => ({
      next: function (): IteratorResult<T> {
        while (indices[i] >= values.length) {
          const { value, done } = iterator.next();

          if (done) {
            return {
              value: undefined,
              done: true,
            };
          }

          values.push(value);
        }

        return {
          value: values[indices[i]++],
          done: false,
        };
      },
      [Symbol.iterator]: function (): Iterator<T> {
        return this;
      },
    }));
}
