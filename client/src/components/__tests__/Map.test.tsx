import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { MapView } from "../Map";
import React from "react";

describe("MapView", () => {
  let mockMapConstructor: any;
  let originalAppendChild: typeof document.head.appendChild;
  let appendedScripts: HTMLScriptElement[] = [];

  beforeEach(() => {
    // Mock the Google Maps API
    mockMapConstructor = vi.fn().mockImplementation(() => ({}));
    window.google = {
      maps: {
        Map: mockMapConstructor,
      } as any,
    };

    // Intercept document.head.appendChild to automatically trigger script load
    originalAppendChild = document.head.appendChild;
    document.head.appendChild = vi.fn((node: Node) => {
      if (node instanceof HTMLScriptElement) {
        appendedScripts.push(node);
        // Trigger onload on the next tick so the promise resolves
        setTimeout(() => {
          if (node.onload) {
            (node.onload as any)();
          }
        }, 0);
      }
      return originalAppendChild.call(document.head, node);
    });
  });

  afterEach(() => {
    document.head.appendChild = originalAppendChild;
    delete window.google;
    appendedScripts = [];
    vi.clearAllMocks();
  });

  it("renders without crashing and initializes map with default props", async () => {
    const onMapReadyMock = vi.fn();

    render(<MapView onMapReady={onMapReadyMock} />);

    // Wait for the map constructor to be called
    await waitFor(() => {
      expect(mockMapConstructor).toHaveBeenCalledTimes(1);
    });

    // Verify it was called with default center and zoom
    const expectedContainer = expect.any(HTMLDivElement);
    expect(mockMapConstructor).toHaveBeenCalledWith(expectedContainer, expect.objectContaining({
      zoom: 12,
      center: { lat: 37.7749, lng: -122.4194 },
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
      mapId: "DEMO_MAP_ID",
    }));

    expect(onMapReadyMock).toHaveBeenCalled();
  });

  it("initializes map with custom props", async () => {
    const onMapReadyMock = vi.fn();
    const customCenter = { lat: 40.7128, lng: -74.0060 };
    const customZoom = 15;

    render(
      <MapView
        initialCenter={customCenter}
        initialZoom={customZoom}
        onMapReady={onMapReadyMock}
      />
    );

    // Wait for the map constructor to be called
    await waitFor(() => {
      expect(mockMapConstructor).toHaveBeenCalledTimes(1);
    });

    expect(mockMapConstructor).toHaveBeenCalledWith(expect.any(HTMLDivElement), expect.objectContaining({
      zoom: customZoom,
      center: customCenter,
    }));

    expect(onMapReadyMock).toHaveBeenCalled();
  });

  it("applies the custom className", () => {
    const { container } = render(<MapView className="custom-map-class" />);

    // First element in container should have the class
    expect(container.firstChild).toHaveClass("custom-map-class");
    expect(container.firstChild).toHaveClass("w-full h-[500px]"); // default classes
  });

  it("handles script load failure", async () => {
    // Override the appendChild to call onerror
    document.head.appendChild = vi.fn((node: Node) => {
      if (node instanceof HTMLScriptElement) {
        setTimeout(() => {
          if (node.onerror) {
            (node.onerror as any)(new Event("error"));
          }
        }, 0);
      }
      return originalAppendChild.call(document.head, node);
    });

    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<MapView />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith("Failed to load Google Maps script");
    });

    consoleErrorSpy.mockRestore();
  });
});
