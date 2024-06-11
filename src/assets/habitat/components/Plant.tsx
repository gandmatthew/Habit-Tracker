import styles from './Plant.module.css'

export const Plant = (name: any) => {

    function handleClick () {
        console.log(name)
    }

    return (
        <div onClick={handleClick} className={styles.smallTree}></div>
    )
}