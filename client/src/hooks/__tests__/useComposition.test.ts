import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useComposition } from "../useComposition";

describe("useComposition hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("should return isComposing as false initially", () => {
    const { result } = renderHook(() => useComposition());
    expect(result.current.isComposing()).toBe(false);
  });

  it("should set isComposing to true and call originalOnCompositionStart on composition start", () => {
    const originalOnCompositionStart = vi.fn();
    const { result } = renderHook(() =>
      useComposition({ onCompositionStart: originalOnCompositionStart })
    );

    const event = {} as any;

    act(() => {
      result.current.onCompositionStart(event);
    });

    expect(result.current.isComposing()).toBe(true);
    expect(originalOnCompositionStart).toHaveBeenCalledWith(event);
  });

  it("should set isComposing to false after timeouts and call originalOnCompositionEnd on composition end", () => {
    const originalOnCompositionEnd = vi.fn();
    const { result } = renderHook(() =>
      useComposition({ onCompositionEnd: originalOnCompositionEnd })
    );

    const event = {} as any;

    act(() => {
      result.current.onCompositionStart(event);
    });
    expect(result.current.isComposing()).toBe(true);

    act(() => {
      result.current.onCompositionEnd(event);
    });

    expect(originalOnCompositionEnd).toHaveBeenCalledWith(event);

    // Check it's still composing before timeouts run
    expect(result.current.isComposing()).toBe(true);

    act(() => {
      // Advance by both timeouts
      vi.runAllTimers();
    });

    expect(result.current.isComposing()).toBe(false);
  });

  it("should clear timeouts if another composition starts before timeouts complete", () => {
    const { result } = renderHook(() => useComposition());

    const event = {} as any;

    // Start
    act(() => {
      result.current.onCompositionStart(event);
    });

    // End (triggers timeouts)
    act(() => {
      result.current.onCompositionEnd(event);
    });

    // Start again immediately
    act(() => {
      result.current.onCompositionStart(event);
    });

    act(() => {
      vi.runAllTimers();
    });

    // Since we started again, it should remain true
    expect(result.current.isComposing()).toBe(true);
  });

  describe("onKeyDown", () => {
    it("should prevent propagation for Escape while composing", () => {
      const originalOnKeyDown = vi.fn();
      const { result } = renderHook(() =>
        useComposition({ onKeyDown: originalOnKeyDown })
      );

      act(() => {
        result.current.onCompositionStart({} as any);
      });

      const stopPropagation = vi.fn();
      const event = {
        key: "Escape",
        stopPropagation,
      } as any;

      act(() => {
        result.current.onKeyDown(event);
      });

      expect(stopPropagation).toHaveBeenCalled();
      expect(originalOnKeyDown).not.toHaveBeenCalled();
    });

    it("should prevent propagation for Enter (without shift) while composing", () => {
      const originalOnKeyDown = vi.fn();
      const { result } = renderHook(() =>
        useComposition({ onKeyDown: originalOnKeyDown })
      );

      act(() => {
        result.current.onCompositionStart({} as any);
      });

      const stopPropagation = vi.fn();
      const event = {
        key: "Enter",
        shiftKey: false,
        stopPropagation,
      } as any;

      act(() => {
        result.current.onKeyDown(event);
      });

      expect(stopPropagation).toHaveBeenCalled();
      expect(originalOnKeyDown).not.toHaveBeenCalled();
    });

    it("should allow propagation for Enter with shift while composing", () => {
      const originalOnKeyDown = vi.fn();
      const { result } = renderHook(() =>
        useComposition({ onKeyDown: originalOnKeyDown })
      );

      act(() => {
        result.current.onCompositionStart({} as any);
      });

      const stopPropagation = vi.fn();
      const event = {
        key: "Enter",
        shiftKey: true,
        stopPropagation,
      } as any;

      act(() => {
        result.current.onKeyDown(event);
      });

      expect(stopPropagation).not.toHaveBeenCalled();
      expect(originalOnKeyDown).toHaveBeenCalledWith(event);
    });

    it("should allow propagation for other keys while composing", () => {
      const originalOnKeyDown = vi.fn();
      const { result } = renderHook(() =>
        useComposition({ onKeyDown: originalOnKeyDown })
      );

      act(() => {
        result.current.onCompositionStart({} as any);
      });

      const stopPropagation = vi.fn();
      const event = {
        key: "a",
        stopPropagation,
      } as any;

      act(() => {
        result.current.onKeyDown(event);
      });

      expect(stopPropagation).not.toHaveBeenCalled();
      expect(originalOnKeyDown).toHaveBeenCalledWith(event);
    });

    it("should allow propagation for Escape when not composing", () => {
      const originalOnKeyDown = vi.fn();
      const { result } = renderHook(() =>
        useComposition({ onKeyDown: originalOnKeyDown })
      );

      const stopPropagation = vi.fn();
      const event = {
        key: "Escape",
        stopPropagation,
      } as any;

      act(() => {
        result.current.onKeyDown(event);
      });

      expect(stopPropagation).not.toHaveBeenCalled();
      expect(originalOnKeyDown).toHaveBeenCalledWith(event);
    });

    it("should allow propagation for Enter when not composing", () => {
      const originalOnKeyDown = vi.fn();
      const { result } = renderHook(() =>
        useComposition({ onKeyDown: originalOnKeyDown })
      );

      const stopPropagation = vi.fn();
      const event = {
        key: "Enter",
        shiftKey: false,
        stopPropagation,
      } as any;

      act(() => {
        result.current.onKeyDown(event);
      });

      expect(stopPropagation).not.toHaveBeenCalled();
      expect(originalOnKeyDown).toHaveBeenCalledWith(event);
    });
  });
});
