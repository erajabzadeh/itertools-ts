export default function* splitInto<T>(
  iterable: Iterable<T>,
  sizes: [...number[], null] | [...number[]]
): Generator<T[], void, T[] | undefined> {
  let split: T[] = [];
  let capacity = sizes.shift();
  for (const element of iterable) {
    if (typeof capacity === 'number') {
      if (split.length < capacity) {
        split.push(element);
      } else {
        yield split;
        split = [element];
        capacity = sizes.shift();
      }
    } else if (capacity === null) {
      split.push(element);
    } else if (typeof capacity === 'undefined') {
      break;
    } else {
      throw new Error(`Invalid capacity '${capacity}'`);
    }
  }

  if (typeof capacity !== 'undefined' && split.length) {
    yield split;
  }

  while ((capacity = sizes.shift())) {
    yield [];
  }
}
