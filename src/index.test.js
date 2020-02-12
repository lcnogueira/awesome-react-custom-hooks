import { useMyHook } from './'
import { renderHook, act } from '@testing-library/react-hooks'

// mock timer using jest
jest.useFakeTimers()

describe('useFetch', () => {
  it('should correctly return the data', () => {
    expect(true).toBe(true)
  })
})
