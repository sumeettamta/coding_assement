const { deterministicPartitionKey, createHash, getCandidate } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns hash value when given a string -testing", () => {
    const trivialKey = deterministicPartitionKey("testing");
    expect(trivialKey).toEqual("016b2505a17c72bf41a2a675115e399f1365b72bff7018229b5baf2d46a6892bab1b712d9cb0260d47d8f856d777e55e864b59f5806e8ccbd0734ee94c228111");
  });

  it("Returns testing value when given a partitionKey with vaule string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey :  "testing"});
    expect(trivialKey).toEqual("testing");
  });
});

describe("createHash", () => {
  it("Returns hash value when given a string - test", () => {
    const trivialKey = createHash("test");
    expect(trivialKey).toEqual("9ece086e9bac491fac5c1d1046ca11d737b92a2b2ebd93f005d7b710110c0a678288166e7fbe796883a4f2e9b3ca9f484f521d0ce464345cc1aec96779149c14");
  });
});

describe("getCandidate", () => {

  it("Returns hash value when given a string -   testing", () => {
    const trivialKey = getCandidate("testing");
    expect(trivialKey).toEqual("016b2505a17c72bf41a2a675115e399f1365b72bff7018229b5baf2d46a6892bab1b712d9cb0260d47d8f856d777e55e864b59f5806e8ccbd0734ee94c228111");
  });

  it("Returns testing value when given a partitionKey with value string", () => {
    const trivialKey = getCandidate({ partitionKey :  "testing"});
    expect(trivialKey).toEqual("testing");
  });
});
