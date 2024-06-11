import { useSelector } from "react-redux";
import { Habitat } from "../assets/habitat/Habitat";
import { Navbar } from "../assets/navbar/Navbar";
import styles from "./Create.module.css"
import { RootState } from "../store";
import { CreateForm } from "./components/CreateForm";


export const Create = () => {

    const x = useSelector((state: RootState) => state.plane.x)
    const y = useSelector((state: RootState) => state.plane.y)

    return (
        <div>
            <div className={styles.sticky}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.split} ${styles.left}`}>
                <Habitat containerHeight={100} containerWidth={150}></Habitat>
            </div>
            <div className={`${styles.split} ${styles.right}`}>
                <CreateForm></CreateForm>
            </div>
        </div>
    )
}