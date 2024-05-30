import { createContext, useRef } from "react";
import { Habitat } from "../assets/habitat/Habitat";
import { Plane } from "../assets/habitat/components/Plane";
import { Navbar } from "../assets/navbar/Navbar";
import styles from "./Create.module.css"
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, serverTimestamp, FieldValue, addDoc, CollectionReference, DocumentData} from "firebase/firestore"; 
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



interface SaplingCoordinatesType {
    x: any;
    y: any;
  }
  
  export const SaplingCoordinates = createContext<SaplingCoordinatesType>({
    x: 0,
    y: 0
  });

async function add_habit(user: User, data: { habit: { habit_name: any; creation_date: FieldValue; habit_length: number; }; }, userHabitref: CollectionReference<DocumentData, DocumentData> | CollectionReference<{ habit: { habit_name: any; creation_date: FieldValue; habit_length: number; }; }, DocumentData>){
    await addDoc(userHabitref, data);
    //const usersCollectionRef = collection(db, 'users');
}

export const Create = () => {
    const auth = getAuth();
    const habit = useRef(null);
    


    function plantSapling(event: any) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
                const userHabitref = collection(db, user.email);
              
                const data = {habit: {"habit_name": habit.current.value, 
                            "creation_date": serverTimestamp(),
                            "habit_length": 0}}
                add_habit(user, data, userHabitref);
                user.email;
            } else {
                alert("error while planting")
            }
          });
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

