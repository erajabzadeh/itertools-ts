export default function* count(
  start = 0,
  step = 1
): Generator<number, void, number> {
  for (; ; start += step) {
    yield start;
  }
}
