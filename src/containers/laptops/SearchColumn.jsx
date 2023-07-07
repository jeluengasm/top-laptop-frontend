import React, { useState } from "react";
import styles from "./styles/SearchColumn.module.css";
import SearchFilter from './SearchFilter';

function SearchColumn(props) {
    const brands = [...new Set(props.laptops.map(laptop => laptop.brand))].filter(valor => valor !== '');
    const screenSize = [...new Set(props.laptops.map(laptop => laptop.screensize))].filter(valor => valor !== '');
    const os = [...new Set(props.laptops.map(laptop => laptop.opsystem))].filter(valor => valor !== '');
    const processor = [...new Set(props.laptops.map(laptop => laptop.processor))].filter(valor => valor !== '');
    const ram = [...new Set(props.laptops.map(laptop => laptop.ram))].filter(valor => valor !== '');
    const hardDrive = [...new Set(props.laptops.map(laptop => laptop.harddrive))].filter(valor => valor !== '');
    const grapCard = [...new Set(props.laptops.map(laptop => laptop.grapcard))].filter(valor => valor !== '');

    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
    const [selectedOS, setSelectedOS] = useState([]);
    const [selectedProcessors, setSelectedProcessors] = useState([]);
    const [selectedRAMs, setSelectedRAMs] = useState([]);
    const [selectedHardDrives, setSelectedHardDrives] = useState([]);
    const [selectedGrapicCards, setSelectedGrapicCards] = useState([]);

    const handleClick = () => {
        props.setLaptopsFilter([...props.laptops]);
        if (selectedBrands.length) {
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedBrands.includes(laptop.brand))
            )
        }
        if (selectedScreenSizes.length) {
            console.log(selectedScreenSizes)
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedScreenSizes.includes(laptop.screensize))
            )
        }
        if (selectedOS.length) {
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedOS.includes(laptop.opsystem))
            )
        }
        if (selectedProcessors.length) {
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedProcessors.includes(laptop.processor))
            )
        }
        if (selectedRAMs.length) {
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedRAMs.includes(laptop.ram))
            )
        }
        if (selectedHardDrives.length) {
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedHardDrives.includes(laptop.harddrive))
            )
        }
        if (selectedGrapicCards.length) {
            props.setLaptopsFilter(
                (laptops=props.laptopsFilter) => 
                laptops.filter(laptop => selectedGrapicCards.includes(laptop.grapcard))
            )
        }
    }

    return (
        <div className={styles.column} id={styles.scrollbar}>
            <h2>Help us find the best option for you!</h2>
            <div className={styles.filters} id={styles.scrollbar}>
                <SearchFilter title='Brand' list={brands} selected={selectedBrands} setSelected={setSelectedBrands}/>
                <SearchFilter title='Screen Size' list={screenSize} selected={selectedScreenSizes} setSelected={setSelectedScreenSizes}/>
                <SearchFilter title='Operative System' list={os} selected={selectedOS} setSelected={setSelectedOS}/>
                <SearchFilter title='Processor' list={processor} selected={selectedProcessors} setSelected={setSelectedProcessors}/>
                <SearchFilter title='RAM' list={ram} selected={selectedRAMs} setSelected={setSelectedRAMs}/>
                <SearchFilter title='Hard Drive' list={hardDrive} selected={selectedHardDrives} setSelected={setSelectedHardDrives}/>
                <SearchFilter title='Graphic Card' list={grapCard} selected={selectedGrapicCards} setSelected={setSelectedGrapicCards}/>
            </div>
            <button className={styles.search} onClick={handleClick}>
                <b>Search</b>
            </button>
        </div>
    );
}

export default SearchColumn;