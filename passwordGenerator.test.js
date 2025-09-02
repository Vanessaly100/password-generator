
const generatePassword = require("./script");

describe("Password Generator", () => {
  // Password Length Validation
  test("generates password of correct length", () => {
    expect(generatePassword(8, "lowPassword")).toHaveLength(8);
    expect(generatePassword(12, "mediumPassword")).toHaveLength(12);
    expect(generatePassword(16, "highPassword")).toHaveLength(16);
  });

  //  Strength Validation
  test("generates only letters for low strength", () => {
    const pwd = generatePassword(10, "lowPassword");
    expect(pwd).toMatch(/^[a-zA-Z]+$/); 
  });

  test("generates letters and numbers for medium strength", () => {
    const pwd = generatePassword(12, "mediumPassword");
    expect(pwd).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test("generates letters, numbers, and symbols for high strength", () => {
    const pwd = generatePassword(14, "highPassword");
    expect(pwd).toMatch(/^[a-zA-Z0-9!@#$%^&*()_\-+=<>?/{}~|]+$/);
  });

  //  Error handling
  test("throws error for invalid length", () => {
    expect(() => generatePassword(0, "lowPassword")).toThrow(
      "Password length must be a number between 4 and 50"
    );
  });

  test("throws error for invalid strength", () => {
    expect(() => generatePassword(10, "wrong")).toThrow(
      "Invalid password strength"
    );
  });
});
