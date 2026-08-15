import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("should merge standard classes", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should override tailwind classes correctly", () => {
    // Note: tailwind-merge re-orders classes in its output in a predictable way
    // (e.g., placing py-1 before px-4). We check for the exact merged string output.
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    expect(cn("text-sm", "text-lg")).toBe("text-lg");
  });

  it("should handle conditional classes", () => {
    expect(
      cn("base-class", {
        "bg-red-500": false,
        "bg-blue-500": true,
      })
    ).toBe("base-class bg-blue-500");
  });

  it("should handle undefined, null, false, and empty inputs", () => {
    expect(cn("class1", undefined, null, false, "", "class2")).toBe("class1 class2");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["class1", "class2"], "class3")).toBe("class1 class2 class3");
  });

  it("should handle complex nested structures", () => {
    expect(cn("class1", ["class2", { class3: true, class4: false }], "class5")).toBe(
      "class1 class2 class3 class5"
    );
  });
});
