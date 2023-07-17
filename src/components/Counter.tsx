import {useState} from "react";
import styles from './counter.module.scss'

export const Counter = () => {
    const [number, setNumber] = useState(0);

    const inc = () => {
        setNumber(number + 1);
    }
    
    return (
        <div className={styles.btn}>
            <h1>{number}</h1>
            <button onClick={inc}>Click me</button>
        </div>
    );
};

