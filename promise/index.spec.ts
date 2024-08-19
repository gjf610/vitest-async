import { it, expect, describe, vi } from 'vitest'
import { delay, fetchUserData } from './index'

describe('Promise', () => {
  it('normal', async () => {
    const result = await fetchUserData()
    expect(result).toBe("1")
  })
  it('delay', () => {
    vi.useFakeTimers()

    const result = delay(1000)
    vi.advanceTimersToNextTimer()
    expect(result).resolves.toBe("ok")
  })
})