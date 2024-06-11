import styles from './CreateForm.module.css'

export const CreateForm = () => {

    return (
        <div>
            <h2>Create a Habit 📝</h2>
            <form>
                <p><input className={styles.form} type="text" placeholder="Jog at Aldrich Park" id="habit" required/></p>
            </form>
        </div>
    )
}