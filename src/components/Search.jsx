import { useEffect, useState } from "react";
import styles from './search.module.css'
import Text from './Text'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "287f4d2d90dd4375ac23d473ef38a1e7";

export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("biryani");

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    },[query])

    return (
        <div>
            <Text/>
            <div className={styles.searchContainer}>
                <input className={styles.searchInput} value={query} onChange={(e)=>setQuery(e.target.value)} type="text" />
                <button className={styles.searchbutton} ><span>Search</span><i></i></button>
            </div>
        </div>
    );
}