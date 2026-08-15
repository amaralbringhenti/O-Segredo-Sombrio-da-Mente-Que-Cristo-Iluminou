import { renderHook } from "@testing-library/react";
import { usePersistFn } from "./usePersistFn";
import { describe, expect, it, vi } from "vitest";

describe("usePersistFn", () => {
  it("should return a function", () => {
    const { result } = renderHook(() => usePersistFn(() => {}));
    expect(typeof result.current).toBe("function");
  });

  it("should maintain the same function reference across re-renders", () => {
    let count = 0;
    const { result, rerender } = renderHook(() =>
      usePersistFn(() => { count++; })
    );

    const firstRef = result.current;

    rerender();
    const secondRef = result.current;

    expect(firstRef).toBe(secondRef);
  });

  it("should always call the latest provided function", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();

    const { result, rerender } = renderHook(({ fn }) => usePersistFn(fn), {
      initialProps: { fn: mock1 }
    });

    // Call the persisted function
    result.current();
    expect(mock1).toHaveBeenCalledTimes(1);
    expect(mock2).not.toHaveBeenCalled();

    // Update the provided function
    rerender({ fn: mock2 });

    // Call the persisted function again
    result.current();
    expect(mock1).toHaveBeenCalledTimes(1);
    expect(mock2).toHaveBeenCalledTimes(1);
  });

  it("should correctly pass arguments and return the value", () => {
    const add = (a: number, b: number) => a + b;
    const { result } = renderHook(() => usePersistFn(add));

    expect(result.current(2, 3)).toBe(5);
  });

  it("should maintain correct 'this' binding", () => {
    const context = { value: 42 };

    function getValue(this: any) {
      return this.value;
    }

    const { result } = renderHook(() => usePersistFn(getValue));

    expect(result.current.call(context)).toBe(42);
  });
});
