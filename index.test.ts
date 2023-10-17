import app from "./index";
import { expect, describe, it } from "vitest";

describe("index", () => {
  it("should return hello world", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/",
      payload: {
        name: "test",
        slug: "test",
        description: "test",
        link: "https://test.com",
      },
    });

    expect(response.statusCode).toEqual(200);
    expect(response.json()).toEqual({ hello: "world" });
  });

  it("should return 400 error", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/",
      payload: {
        invalid: "test",
      },
    });

    expect(response.statusCode).toEqual(400);
    expect(response.json()).toEqual({
      code: "FST_ERR_VALIDATION",
      statusCode: 400,
      error: "Bad Request",
      message: 'body/link must match format "uri"',
    });
  });
});
