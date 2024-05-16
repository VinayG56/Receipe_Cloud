import FoodItem from "./FoodItem";
import styles from './foodlist.module.css';

export default function FoodList({setFoodId,foodData}){
    return (
        <div className={styles.list}>
            {foodData.map((food)=>
                <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
            )}
        </div>
    );
}