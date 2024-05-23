import styles from "./Grid.module.css"

interface GridProps {
    habitats: Array<any>
}

export const Grid = (props : GridProps) => {

    let habitats = props.habitats;
    
    return (
        <div className={styles.container}>
            {habitats.map((habitat, key) => {
                return (
                    <div className={styles.item} key={key}>
                        <p>
                            {habitat}
                        </p>
                        <p>
                            <button>Visit "name"</button>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}