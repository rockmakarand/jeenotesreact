import React,{useEffect,useState} from 'react'
import firebase from 'firebase/compat/app';

import { signInWithGoogle,auth,db } from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import 'firebase/compat/firestore';
import './Profile.css'




const Profile = () => {
    const[nameData,setNameData]=useState([])
   

  

    const [user] = useAuthState(firebase.auth());
    
    

    // authenticated --> Gets all the details which we got from google
    // not --> undefined

    const onAuthStateChanged = async (userAuth) => {
        if (!userAuth) {
          return;
        }
       

      
        const userReference = db.collection("users").doc(userAuth.uid);
         const snapShot = await userReference.get();

         
        

       
       
      
        if (snapShot.exists) {
            console.log("User Exists")
        }
      
        if (!snapShot.exists) {
          const { displayName, email, photoURL, uid } = userAuth;
         
          try {

            userReference.set({
                displayName:displayName,
                email:email,
                uid:uid,
                photoURL:photoURL
            })

          }
          catch (error) {
            console.log(error);
          }
        }
      
        return () => userReference();
      };
     
     
  
      
      useEffect(() => {
        auth.onAuthStateChanged(onAuthStateChanged)
        console.log(user, "Authentication State Changed")
      }, [user]);

      
const firebaseLogout = () =>{
 firebase.auth().signOut();
}



    return (
        <div>
            <button onClick={signInWithGoogle} class="oyo">sign in with google</button>
            <br/>
            <br/>
            <div  style={{textAlign:'center'}}><p style={{textAlign:'center'}}>User Image:</p><img src= {user.photoURL}></img></div>
            <br/>
            <br/>
            <div  style={{textAlign:'center'}}><p style={{textAlign:'center'}}>User Name:</p> {user.displayName}</div>
            <br/>
            <br/>
            <div  style={{textAlign:'center'}}><p style={{textAlign:'center'}}>User Email:</p> {user.email}</div>
            <br/>
            <br/>
            
          
            
        </div>
        
    )
    
}

export default Profile;

