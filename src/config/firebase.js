/**
 * Import and initialize Firebase SDK that implements client-side libraries used by
 * applications using Firebase services.
 * 
 * See: https://github.com/firebase/firebase-js-sdk
 * Setup: https://firebase.google.com/docs/web/setup
 */

import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

/**
 * firebase.database() - access Realtime Database service
 * Get a reference to database service using the config object
 * that contains key/URL to database.
 * 
 * See: https://firebase.google.com/docs/database/web/start
 */
const databaseRef = firebase.database().ref();

/**
 * firebase.database.Reference
 *      .ref() returns reference of root
 *      .ref("child/path") returns reference of child location in Database
 *      .ref().child() gets a reference for location at specified relative path
 *                     e.g. .child("todos") gets simple child name in database ref
 * 
 * See: https://firebase.google.com/docs/reference/js/firebase.database.Reference
 */
export const todosRef = databaseRef.child("todos");