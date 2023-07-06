import { useEffect, useState } from 'react'
import {getAllLaptops} from '../api/laptops/LaptopsCRUD'
// import LaptopsUL from '../components/laptops/LaptopsUL'
import ListCards from '../containers/laptops/ListCards'
import ButtonGraphicContainer from '../containers/laptops/ButtonGraphicContainer';
import styles from './styles/LaptopsPage.module.css';

import { examples } from './examples';

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
      {showCardContainer && (
        <>
          {/* <SearchColumn /> */}
          <ListCards laptops={examples} />
        </>
      )}
      <ButtonGraphicContainer toggleDivs={toggleDivs}/>
      {/* <h1>Laptops manager</h1>
      <div>
        <LaptopsUL laptops={laptops} />
      </div> */}
    </div>
  )
}
