import React,{useEffect,useState} from 'react'
import firebase from 'firebase/compat/app';

import { signInWithGoogle,auth,db,signInWithFacebook } from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import 'firebase/compat/firestore';
import './Profile.css'
import img1 from './Images/g signin.png'



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
          const { displayName, email, photoURL, uid, phoneno } = userAuth;
         
          try {

            userReference.set({
                displayName:displayName,
                email:email,
                uid:uid,
                photoURL:photoURL,
                phoneno:phoneno
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
           <br/>
            
            <img src={img1} onClick={signInWithGoogle}class="ppp"></img>

           
           <br/>
           <div class="oir">
           <br/>
            <br/>
            <h2 style={{textAlign:'center'}}>User Image:</h2>
            <br/>
             <div><img src={user && user.photoURL} class="jj"></img> </div>
             <br/>
             <br/>
             <h2 style={{textAlign:'center'}}>User Name:</h2>
            <br/>
           <div>{user && user.displayName}</div>
           <br/>
             <br/>
             <h2 style={{textAlign:'center'}}>User Email-ID:</h2>
            <br/>
           <div> {user.email}</div>
           <br/>
             <br/>
             
           </div>
           <br/>
             <br/>
            
            
           <br/>
             <br/>
            
          
            
        </div>
        
    )
    
}

export default Profile;

