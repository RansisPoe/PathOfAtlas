import Graph from 'node-dijkstra'
import { Buffer } from 'buffer'
import { skillList } from './tree'
import _ from 'lodash'

export const skillGraph = new Graph()
skillGraph.addNode('root', { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 })
skillList.forEach((skill, index) => {
  const children: any = {}
  skill.neighbors.forEach((neighbor) => {
    children[neighbor.toString()] = 1
  })
  skillGraph.addNode(index.toString(), children)
})

export function findShortestPath(toggles: boolean[], index: number) {
  const paths: any[] = []

  // toggling it to enabled, find minPath
  paths.push(skillGraph.path('root', index + ''))
  toggles.forEach((toggle, subIndex) => {
    if (toggle) {
      paths.push(skillGraph.path(subIndex + '', index + ''))
    }
  })

  const minPath = _.minBy(paths, 'length')

  return minPath
}

function disconnectedSearchHelper(index: number, toggles: boolean[], connected: boolean[], visited: boolean[]) {
  if (!toggles[index]) return
  if (visited[index]) return

  visited[index] = true
  connected[index] = true

  skillList[index].neighbors.forEach((neighborIndex) => {
    disconnectedSearchHelper(neighborIndex, toggles, connected, visited)
  })
}

export function disconnectedSearch(toggles: boolean[]): boolean[] {
  const connected = skillList.map((skill) => false)
  const visited = skillList.map((skill) => false)
  disconnectedSearchHelper(0, toggles, connected, visited)
  disconnectedSearchHelper(1, toggles, connected, visited)
  disconnectedSearchHelper(2, toggles, connected, visited)
  disconnectedSearchHelper(3, toggles, connected, visited)
  disconnectedSearchHelper(4, toggles, connected, visited)

  return connected
}

function bitGet(num: number, bit: number): number {
  return num & (1 << bit)
}
function bitSet(num: number, bit: number): number {
  return num | (1 << bit)
}

export function encodeBitList(bitlist: boolean[]): string {
  const u8Length = Math.floor(bitlist.length / 8) + 1
  const u8Arr = new Uint8Array(u8Length)

  bitlist.forEach((bit, index) => {
    const u8Index = Math.floor(index / 8)
    if (bit) {
      u8Arr[u8Index] = bitSet(u8Arr[u8Index], index % 8)
    }
  })

  return Buffer.from(u8Arr).toString('base64')
}

export function parseBitList(encodedBitList: string): boolean[] {
  const buf = Buffer.from(encodedBitList, 'base64')

  const bitList = [] as boolean[]

  buf.forEach((num, index) => {
    for (let i = 0; i < 8; i++) {
      bitList[index * 8 + i] = !!bitGet(num, i)
    }
  })

  return bitList.slice(0, skillList.length)
}

export function encodePoeCompatibleTree(bitlist: boolean[]): string {
  const originalTreeNodeIds: number[] = []

  // map each toggled node to its original node ID
  bitlist.forEach((toggled, index) => {
    if (toggled) {
      originalTreeNodeIds.push(skillList[index].originalTreeId)
    }
  })

  // sort by ascending nodeId
  originalTreeNodeIds.sort((a, b) => a - b)

  // write header, node data and a trailing \00\00 to the buffer
  const header = [0, 0, 0, 6, 0, 0, originalTreeNodeIds.length]
  const buf = Buffer.alloc(originalTreeNodeIds.length * 2 + header.length + 2)

  header.forEach((char, idx) => {
    buf.writeUInt8(char, idx)
  })

  originalTreeNodeIds.forEach((nodeId, index) => {
    buf.writeUInt16BE(nodeId, header.length + index * 2)
  })

  buf.writeUInt8(0, buf.length - 1)
  buf.writeUInt8(0, buf.length - 2)

  // base64-encode the result
  return buf.toString('base64').replaceAll('+', '-').replaceAll('/', '_')
}

// this receives everything past the '/' in a poe.com passive tree URL
export function decodePoeCompatibleTree(slug: string): boolean[] {
  const buf = Buffer.from(decodeURIComponent(slug.replaceAll('-', '+').replaceAll('_', '/')), 'base64')
  const treeNodeIdMap: { [key: number]: boolean } = {}

  // skip the header and start reading
  for (let i = 7; i < buf.length - 2; i += 2) {
    treeNodeIdMap[buf.readUInt16BE(i)] = true
  }

  return skillList.map((node) => node.originalTreeId in treeNodeIdMap)
}
