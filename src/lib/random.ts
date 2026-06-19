export function randomInt(min: number, max: number): number {
  const range = max - min + 1
  // Reject values in the biased tail so every outcome is equally likely
  const maxUnbiased = Math.floor(0x100000000 / range) * range
  const buf = new Uint32Array(1)
  do {
    crypto.getRandomValues(buf)
  } while (buf[0] >= maxUnbiased)
  return min + (buf[0] % range)
}
