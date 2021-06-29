import count from "../src/count";

describe("count", () => {
  test("starting from default, with default step", () => {
    const result = count();
    for (let i = 0; i < 1000; ++i) {
      expect(result.next()).toMatchObject({ done: false, value: i });
    }
  });

  test("starting from 1, default step", () => {
    const result = count(1);
    for (let i = 1; i < 1000; ++i) {
      expect(result.next()).toMatchObject({ done: false, value: i });
    }
  });

  test("starting from 1, steps of 2", () => {
    const result = count(1, 2);
    for (let i = 1; i < 1000; i += 2) {
      expect(result.next()).toMatchObject({ done: false, value: i });
    }
  });

  test("starting from 1, steps of -1", () => {
    const result = count(1, -1);
    for (let i = 1; i > -1000; i += -1) {
      expect(result.next()).toMatchObject({ done: false, value: i });
    }
  });
});
