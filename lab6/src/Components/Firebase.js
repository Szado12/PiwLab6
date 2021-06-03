import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBu-KsvvWRb7yaItu_6-iMFGjrjsn_cRcs",
    authDomain: "piw-lab6.firebaseapp.com",
    projectId: "piw-lab6",
    storageBucket: "piw-lab6.appspot.com",
    messagingSenderId: "46440415553",
    appId: "1:46440415553:web:7cf2c841f25dbd710e61c0",
    measurementId: "G-HG8PQM2DEK"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}
export const firestore = firebase.firestore();

export const auth = firebase.auth();

export const registryUser = async(email, password) =>{
    return auth.createUserWithEmailAndPassword(email,password);
}
export const login = async (email, password) =>{
    return auth.signInWithEmailAndPassword(email,password);
}
export const getPizzas = async() =>{
    return firestore.collection("pizzas").get();
}
export const sendOrder = async(user,order,sumprice) =>{
    return firestore.collection("userHistory").add({
        owner: user.uid,
        order: order,
        price: sumprice
    });
}