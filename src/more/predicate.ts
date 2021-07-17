/**
 * Takes an iterable and a predicate, returning an array of iterables
 * first element of the resulting iterables array is an iterable of values
 * that matched the (predicate was true) and the second is an iterable of values
 * that did not match (predicate was false)
 * @param iterable Input Iterable<T>
 * @param predicate Predicate
 * @returns [Iterable<T>, Iterable<T>]
 */
export default function predicate<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean
): [Iterable<T>, Iterable<T>] {
  const iterators = [iterable[Symbol.iterator](), iterable[Symbol.iterator]()];

  const predicateIterator = function (inverted: boolean) {
    const iterator = iterators[Number(!inverted)];
    let done = false;

    return function () {
      return {
        next: (): IteratorResult<T> => {
          while (!done) {
            const element = iterator.next();
            if (element.done) {
              done = true;
              break;
            } else if (inverted !== predicate(element.value)) {
              return {
                value: element.value,
                done: false,
              };
            }
          }

          return {
            value: undefined,
            done: true,
          };
        },
      };
    };
  };

  return [
    {
      [Symbol.iterator]: predicateIterator(false),
    },
    {
      [Symbol.iterator]: predicateIterator(true),
    },
  ];
}
