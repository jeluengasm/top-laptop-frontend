import { useEffect, useState } from 'react'
import {getAllLaptops} from '../api/laptops/LaptopsCRUD'
// import LaptopsUL from '../components/laptops/LaptopsUL'
import ButtonGraphicContainer from '../containers/laptops/ButtonGraphicContainer';
import styles from './styles/LaptopsPage.module.css';

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

  const [showCardContainer, setShowCardContainer] = useState(false);

  const toggleDivs = () => {
    setShowCardContainer(!showCardContainer);
  };

  return (
    <div className={styles.laptopsPage}>
      <ButtonGraphicContainer toggleDivs={toggleDivs}/>
      {/* <h1>Laptops manager</h1>
      <div>
        <LaptopsUL laptops={laptops} />
      </div> */}
    </div>
  )
}
