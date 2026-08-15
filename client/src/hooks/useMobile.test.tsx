import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "./useMobile";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

describe("useIsMobile", () => {
  let mockMatchMedia: any;
  let listeners: any[] = [];

  beforeEach(() => {
    listeners = [];
    mockMatchMedia = vi.fn().mockImplementation(query => {
      const mql = {
        matches: query === "(max-width: 767px)",
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn().mockImplementation((event, listener) => {
          if (event === "change") {
            listeners.push(listener);
          }
        }),
        removeEventListener: vi.fn().mockImplementation((event, listener) => {
          if (event === "change") {
            listeners = listeners.filter(l => l !== listener);
          }
        }),
        dispatchEvent: vi.fn(),
      };
      return mql;
    });

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: mockMatchMedia,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return false when window width is greater than or equal to 768", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("should return true when window width is less than 768", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("should update when window is resized across the breakpoint", () => {
    // Start desktop
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    // Simulate resize to mobile
    act(() => {
      window.innerWidth = 500;
      // Fire the change event on all registered listeners
      listeners.forEach(listener => listener({ matches: true }));
    });

    expect(result.current).toBe(true);

    // Simulate resize back to desktop
    act(() => {
      window.innerWidth = 800;
      // Fire the change event on all registered listeners
      listeners.forEach(listener => listener({ matches: false }));
    });

    expect(result.current).toBe(false);
  });

  it("should remove event listener on unmount", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });

    const { unmount } = renderHook(() => useIsMobile());

    expect(listeners.length).toBe(1); // Added on mount

    unmount();

    expect(listeners.length).toBe(0); // Removed on unmount
  });
});
