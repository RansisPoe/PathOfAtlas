import { encodeBitList } from './utils'

describe('encode', () => {
  it('empty', () => {
    const encoded = encodeBitList([])

    expect(encoded).toEqual('AA==')
  })
  it('one elem', () => {
    const encoded = encodeBitList([true])

    expect(encoded).toEqual('AQ==')
  })
})
