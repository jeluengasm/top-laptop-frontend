import React from 'react'
import LaptopLI from './LaptopLI'

function LaptopsUL({laptops}) {

  return (
        <div>
            { laptops.map(laptop => <LaptopLI key={laptop.id} laptop={laptop} />) }
        </div>
  )
}

export default LaptopsUL
