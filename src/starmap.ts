export default function* starmap<T, R = unknown>(
  func: (...args: T[]) => R,
  iterable: Iterable<T[]>
): Generator<R, void, R & undefined> {
  for (const element of iterable) {
    yield func(...element);
  }
}
