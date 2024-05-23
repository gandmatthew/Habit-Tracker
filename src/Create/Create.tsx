import { createContext } from "react";
import { Habitat } from "../assets/habitat/Habitat";
import { Plane } from "../assets/habitat/components/Plane";
import { Navbar } from "../assets/navbar/Navbar";
import styles from "./Create.module.css"

interface SaplingCoordinatesType {
    x: any;
    y: any;
  }
  
  export const SaplingCoordinates = createContext<SaplingCoordinatesType>({
    x: 0,
    y: 0
  });

export const Create = () => {

    function plantSapling(event: any) {
        console.log("x, y", event.clientX, event.clientY);
    }

    return (
        <div>
            <div className={styles.sticky}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.split} ${styles.left}`}>
                <Habitat containerHeight="100" containerWidth="150"></Habitat>
            </div>
            <div className={`${styles.split} ${styles.right}`}>
                Hello World
            </div>
        </div>
    )
}