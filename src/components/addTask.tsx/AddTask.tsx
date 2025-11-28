import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

import FIREBASE_CONFIG from "../../constants";

//Setting up firebase instance

const app = initializeApp(FIREBASE_CONFIG)
const db = getFirestore(app)

try {
    const docRef = await addDoc(collection(db, "tasks"), {
        title: "test",
        dueDate: "test",
        notes: "test"
    });
    console.log("Document written with ID: ", docRef.id);
} catch (e) {
    console.error("Error adding document: ", e);
}
const AddTask = () => {
    return (
        <form action="">
            <input type="text" />
        </form>
    )
}

export default AddTask;