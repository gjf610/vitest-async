import { it, expect, describe, vi } from 'vitest'
import { User } from "./setTimeout";

describe('setTimeout', () => {
  it('should fetch User data', () => {
    vi.useFakeTimers()
    const user = new User("1")
    const callback = vi.fn()
    user.fetchDataV2(callback)
    // vi.advanceTimersByTime(100)
    // vi.advanceTimersToNextTimer()


    const userA = new User("1")
    const callbackA = vi.fn()
    userA.fetchDataV2(callbackA)

    vi.runAllTimers()

    expect(callback).toBeCalledWith('Data for user with id: 1')
    expect(callbackA).toBeCalledWith('Data for user with id: 1')
  })
})
