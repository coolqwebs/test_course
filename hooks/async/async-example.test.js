import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate token value", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should generate token value", () => {
    const testUserEmail = "test@test.com";

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it("should generate token value - async/await", async () => {
    const testUserEmail = "test@test.com";

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
  });
});
