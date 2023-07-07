import { useEffect, useState } from 'react'
import { getAllLaptops } from '../api/laptops/LaptopsCRUD'
// import LaptopsUL from '../components/laptops/LaptopsUL'
import SearchColumn from '../containers/laptops/SearchColumn'
import ListCards from '../containers/laptops/ListCards'
import ButtonGraphicContainer from '../containers/laptops/ButtonGraphicContainer';
import styles from './styles/LaptopsPage.module.css';

// import { examples } from './examples';

export function LaptopsPage() {
  const [laptops, setLaptops] = useState([])
  const [laptopsFilter, setLaptopsFilter] = useState([])

  useEffect(() => {
    async function getLaptops() {
      await getAllLaptops()
        .then((result) => {
          setLaptops(result.data)
          setLaptopsFilter(result.data)
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
          <SearchColumn laptops={laptops} laptopsFilter={laptopsFilter} setLaptopsFilter={setLaptopsFilter}/>
          <ListCards laptops={laptopsFilter} />
        </>
      )}
      <ButtonGraphicContainer toggleDivs={toggleDivs}/>
    </div>
  )
}
