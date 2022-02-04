import { decodePoeCompatibleTree, encodeBitList, encodePoeCompatibleTree } from './utils'
import { skillList } from './tree'

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

describe('encodeCompatible', () => {
  it('empty', () => {
    const encoded = encodePoeCompatibleTree([])

    expect(encoded).toEqual('AAAABgAAAAAA')
  })
  it('one elem', () => {
    const encoded = encodePoeCompatibleTree([true])

    expect(encoded).toEqual('AAAABgAAAa7nAAA=')
  })
})

describe('decodeCompatible', () => {
  it('empty', () => {
    const encoded = decodePoeCompatibleTree('AAAABgAAAAAA')
    const toggles = skillList.map((skill) => false)

    expect(encoded).toEqual(toggles)
  })
  it('one elem', () => {
    const encoded = decodePoeCompatibleTree('AAAABgAAAa7nAAA=')
    const toggles = skillList.map((skill) => false)
    toggles[0] = true

    expect(encoded).toEqual(toggles)
  })
})
