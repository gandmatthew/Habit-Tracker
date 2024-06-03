import { createContext, useRef } from "react";
import { Habitat } from "../assets/habitat/Habitat";
import { Plane } from "../assets/habitat/components/Plane";
import { Navbar } from "../assets/navbar/Navbar";
import styles from "./Create.module.css"
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, serverTimestamp, FieldValue, addDoc, CollectionReference, DocumentData, DocumentReference} from "firebase/firestore"; 
import { collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCWWqVfktZnAW3fze74sODCxmvIMVdkw5Y",
    authDomain: "habit-tracker-92d90.firebaseapp.com",
    projectId: "habit-tracker-92d90",
    storageBucket: "habit-tracker-92d90.appspot.com",
    messagingSenderId: "793800474652",
    appId: "1:793800474652:web:b92787bce57fe7860b9fd9",
    measurementId: "G-FB176MYZR7",
    databaseURL: "https://DATABASE_NAME.firebaseio.com"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();



interface SaplingCoordinatesType {
    x: any;
    y: any;
  }
  
  export const SaplingCoordinates = createContext<SaplingCoordinatesType>({
    x: 0,
    y: 0
  });

  async function add_habit(user: any, data: { habit: { habit_name: any; creation_date: any; habit_length: number; }; }, userHabitref: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>) {
    alert("before adding");
    try {
        await setDoc(userHabitref, data, { merge: true });
        alert("added")
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error adding document");
    }
}

export const Create = () => {
    const habit = useRef<HTMLInputElement>(null);

    const plantSapling = async (event: any) => {
        event.preventDefault();
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const userHabitref = doc(db, user.email, "user_data");
            const habit_name = "habit : "+habit.current.value;
            const data = {
                [habit_name]: {
                    habit_name: habit.current ? habit.current.value : "", 
                    creation_date: serverTimestamp(),
                    habit_length: 0
                }
            };
            alert("adding habit")
            await add_habit(user, data, userHabitref);
        } else {
            alert("error while planting");
        }
        console.log("x, y", event.clientX, event.clientY);
    };


    return (
        <div>
            <div className={styles.sticky}>
                <Navbar></Navbar>
            </div>
            <div className={`${styles.split} ${styles.left}`}>
                <Habitat containerHeight="100" containerWidth="150"></Habitat>
            </div>
            <div className={`${styles.split} ${styles.right}`}>
            <form>
                <p>
                    <input className="createForm__form" type="text" placeholder="Habit Name" name="habit" ref={habit} required/>
                </p>

                <p>
                    <button onClick={plantSapling}>Add Habit</button>
                </p>
            </form>
            </div>
        </div>
    )
}

