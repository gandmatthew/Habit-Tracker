import styles from './Habitat.module.css';
import { Plane } from './components/Plane';
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, serverTimestamp, FieldValue, addDoc, CollectionReference, DocumentData, DocumentReference} from "firebase/firestore"; 
import { collection, getDocs, query, where, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';


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

interface HabitatProps {
    containerWidth: string;
    containerHeight: string;
    contentWidth: string;
    contentHeight: string;
}

async function view_habits() {
    try {
        const user = auth.currentUser;
        if (user) {
            alert("In the try: " + user.email);
            // Corrected collection path
            const habitsCollection = collection(db, user.email);
            alert("Collection path: " + user.email + "/userdata/habits");
            const snapshot = await getDocs(habitsCollection);
            alert("After snap, document count: " + snapshot.size);
            if (snapshot.empty) {
                alert("No habits found");
            } else {
                snapshot.forEach(doc => {
                    alert("Doc ID: " + doc.id + ", Data: " + JSON.stringify(doc.data()));
                });
            }
        } else {
            alert("No user is currently signed in.");
        }
    } catch (error) {
        console.error("Error retrieving habits: ", error);
        alert("Error retrieving habits: " + error.message);
    }
}

export const Habitat = (props: HabitatProps) => {
    
    let containerWidth = props.containerWidth;
    let containerHeight = props.containerHeight;

    let contentWidth = props.contentWidth;
    let contentHeight = props.contentHeight;

    // const querySnapshot = await getDocs(collection(db, "cities", "SF", "landmarks"));
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // });

    

    return (    
        <div className={styles.container} style={{width: `calc(var(--plane-height, ${containerWidth}) * 1vmin)`, height: `calc(var(--plane-height, ${containerHeight}) * 1vmin)`}}>
            <Plane contentWidth={contentWidth} contentHeight={contentHeight}></Plane>
            <button onClick={view_habits}>view</button>
        </div>
        

    )
}

Habitat.defaultProps = {
    containerWidth: '60',
    containerHeight: '60',
    contentWidth: '45',
    contentHeight: '45'
}