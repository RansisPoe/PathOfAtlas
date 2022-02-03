import React, { useEffect, useState } from 'react'
import { parseBitList } from '../utils'

interface SavedTreeProps {
  name: string
  currentBits: string
  treeBits: string
  id: string
  loadTree: (bits: string) => void
  deleteTree: (id: string) => void
}

const SavedTree: React.FC<SavedTreeProps> = (props) => {
  const [allocatedNodes, setAllocatedNodes] = useState(0)
  const [refundsNeeded, setRefundsNeeded] = useState(0)

  const updateTrees = () => {
    const parsedCurrent = parseBitList(props.currentBits.slice(props.currentBits.indexOf('#')))
    const parsedSaved = parseBitList(props.treeBits.slice(1))

    let allocatedNodes = 0
    let refundsNeeded = 0

    for (let i = 0; i < parsedSaved.length; i++) {
      if (parsedCurrent[i] === true && parsedSaved[i] === false) {
        refundsNeeded++
      }

      if (parsedSaved[i] === true) {
        allocatedNodes++
      }
    }

    setAllocatedNodes(allocatedNodes)
    setRefundsNeeded(refundsNeeded)
  }

  useEffect(() => {
    updateTrees()
  }, [props.treeBits, props.currentBits])

  return (
    <div>
      <h4>{props.name}</h4>
      <p>Allocated nodes: {allocatedNodes}/ 128</p>
      <p>Refunds required: {refundsNeeded}</p>

      <button style={{ marginRight: 10 }} onClick={() => props.loadTree(props.treeBits)}>
        Load
      </button>
      <button onClick={() => props.deleteTree(props.id)}>Delete</button>
    </div>
  )
}

export default SavedTree
