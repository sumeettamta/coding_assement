const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function deterministicPartitionKey(event) {
  if (!event) return TRIVIAL_PARTITION_KEY;
  let candidate = getCandidate(event);
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate)
  }
  return candidate;
};

function getCandidate(event) {
  if (!event) throw new Error(`event is required`);
  let candidate;
  if (event.partitionKey) {
    candidate = typeof event.partitionKey !== "string" ? JSON.stringify(event.partitionKey) : event.partitionKey;
  } else {
    candidate = createHash(JSON.stringify(event));
  }
  return candidate;
}

function createHash(toBeHasedInput) {
  if (!toBeHasedInput) throw new Error(`toBeHasedInput is required`);
  return crypto.createHash("sha3-512").update(toBeHasedInput).digest("hex");
}

module.exports = {
  deterministicPartitionKey,
  createHash,
  getCandidate
}
