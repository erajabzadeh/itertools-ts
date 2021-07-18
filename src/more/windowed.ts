/**
 *
 * @param iterable Input iterable
 * @param n Window size
 * @param fillValue Fill value to use when window size larger than input length
 * @param step Number of elements to skip in successive windows
 */
export default function* windowed<T, F = any>(
  iterable: Iterable<T>,
  n = 1,
  fillValue?: T | F,
  step = 1
): Generator<(T | F | undefined)[], void, (T | F | undefined)[] & undefined> {
  const window: (T | F | undefined)[] = [];
  let windowFilled = false;
  let stepCounter = Math.max(step, 1);

  for (const element of iterable) {
    if (windowFilled && --stepCounter > 0) {
      window.shift();
      continue;
    }

    window.push(element);

    if (window.length < n) {
      continue;
    } else {
      windowFilled = true;
    }

    yield [...window];

    window.splice(0, step);
    stepCounter = 1 + Math.max(0, step - n);
  }

  if (!windowFilled) {
    while (window.length < n) {
      window.push(fillValue);
    }
    yield window;
  }
}
