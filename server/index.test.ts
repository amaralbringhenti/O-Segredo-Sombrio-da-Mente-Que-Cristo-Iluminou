import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { setupApp } from "./index";
import express from "express";
import fs from "fs";
import path from "path";
import os from "os";

describe("Express Server Integration", () => {
  let app: express.Express;
  let tempDir: string;
  let mockIndexHtmlPath: string;

  beforeAll(() => {
    // Create a temporary directory and mock index.html for testing without affecting actual artifacts
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "express-test-"));
    mockIndexHtmlPath = path.join(tempDir, "index.html");
    fs.writeFileSync(mockIndexHtmlPath, "<html><body>Mock index.html</body></html>");

    // Pass the custom static path to setupApp
    app = setupApp(tempDir);
  });

  afterAll(() => {
    // Clean up the temporary directory after tests
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it("should return index.html for client-side routing on arbitrary paths", async () => {
    const response = await request(app).get("/some/random/path");

    expect(response.status).toBe(200);
    // Since we'll create a mock index.html with known content
    expect(response.text).toContain("Mock index.html");
  });

  it("should serve static files", async () => {
    const response = await request(app).get("/index.html");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Mock index.html");
  });
});
