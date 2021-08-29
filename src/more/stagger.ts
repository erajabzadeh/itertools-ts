import { strict as assert } from 'assert';
/**
 *
 * @param iterable
 * @param offsets
 * @param longest
 * @param fillValue
 * @returns
 */
export default function* stagger<T, F>(
  iterable: Iterable<T>,
  offsets = [-1, 0, 1],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _longest = false,
  fillValue?: F
): Generator<(T | F | undefined)[], void, (T | F)[] & undefined> {
  assert.ok(iterable, `'iterable' cannot be falsy`);
  assert.ok(offsets, `'offsets' cannot be falsy`);

  const maxOffset = Math.max(...offsets);
  const minOffset = Math.min(...offsets);
  const window: T[] = [];

  if (!offsets.length) {
    return;
  }

  for (let i = maxOffset; i < 0; i += 1) {
    yield new Array(offsets.length).fill(fillValue);
  }

  for (const iterator = iterable[Symbol.iterator](); ; ) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }

    window.push(value);

    const slack = window.length - Math.max(maxOffset, 0) - 1;
    if (slack < 0) {
      continue;
    } else if (slack > Math.abs(minOffset)) {
      window.shift();
    }

    yield offsets.map(
      (offset) =>
        window[offset + Math.max(window.length - maxOffset - 1, 0)] || fillValue
    );
  }
}
