import { initializeApp } from 'firebase/app';
import { getAuth, User, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
try {
  const app = initializeApp(firebaseConfig);
  getAuth(app);
} catch (error) {}

/**
 * Check user's current login state
 * @returns {object} Firebase user object
 */
export const checkLoginStatus = () => {};
new Promise((resolve) => {
  const unsubscribe = getAuth().onAuthStateChanged((user) => {
    unsubscribe();
    resolve(user);
  });
});

/**
 * Get user's firebase token
 * @param user Firebase user
 * @returns {object}
 */
export const getIdToken = (user: User) =>
  user
    .getIdToken()
    .then((token) => token)
    .catch((error) => {
      throw error;
    });

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>}
 */
export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(getAuth(), email, password)
    .then((user) => user)
    .catch((error) => {
      throw error;
    });

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<AuthCredential>}
 */
export const signUp = (email: string, password: string) =>
  createUserWithEmailAndPassword(getAuth(), email, password)
    .then((user) => user)
    .catch((error) => {
      throw error;
    });

/**
 * Signs the user out.
 * @returns {void}
 */
export const signOut = () =>
  getAuth()
    .signOut()
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
