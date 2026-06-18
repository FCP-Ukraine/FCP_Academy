// ==========================
// FIREBASE CONFIG
// ==========================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBGDyvM-V3SYTh8mLqWU9CBBjP-NxYbQOw",
    authDomain: "fcp-academy.firebaseapp.com",
    databaseURL: "https://fcp-academy-default-rtdb.firebaseio.com",
    projectId: "fcp-academy",
    storageBucket: "fcp-academy.firebasestorage.app",
    messagingSenderId: "641271454489",
    appId: "1:641271454489:web:3f150c8f7cdb07117ec388"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ==========================
// ЛІЧИЛЬНИК ПЕРЕГЛЯДІВ КУРСУ
// ==========================
// Збільшує лічильник переглядів для курсу з вказаним id
// та повертає нове значення (Promise<number>)
export async function incrementCourseViews(courseId) {
    const viewsRef = ref(db, `views/course-${courseId}`);

    try {
        const result = await runTransaction(viewsRef, (current) => (current || 0) + 1);
        return result.snapshot.val();
    } catch (err) {
        console.error("Помилка лічильника переглядів:", err);
        return null;
    }
}