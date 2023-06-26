import { useEffect, useState } from 'react'
import {getAllLaptops} from '../api/laptops/LaptopsCRUD'
import LaptopsUL from '../components/laptops/LaptopsUL'

export function LaptopsPage() {
  const [laptops, setLaptops] = useState([])

  useEffect(() => {
    async function getLaptops() {
      await getAllLaptops()
        .then((result) => {
          setLaptops(result.data)
        })
    }
    getLaptops()
  }, [])

  return (
    <div>
      <h1>Laptops manager</h1>
      <div>
        <LaptopsUL laptops={laptops} />
      </div>
    </div>
  )
}
