import React from 'react'

function LaptopLI({laptop:{ id, brand, processor, ram, harddrive, grapcard, opsystem } }) {
  return (
    <ul>
      <li key={id}>Internal ID: {id}</li>
      <li>Brand: {brand}</li>
      <li>Processor: {processor}</li>
      <li>RAM: {ram}</li>
      <li>Hard drive: {harddrive}</li>
      <li>Graphic card: {grapcard}</li>
      <li>OS: {opsystem}</li>
    </ul>
  )
}
export default LaptopLI
