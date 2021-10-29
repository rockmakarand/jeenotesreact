import React,{useEffect,useState} from 'react'

import firebase from '@firebase/app-compat'; 
import 'firebase/compat/firestore';

import Login from '../Login';

import { db } from '../Firebase';
import { doc } from '@firebase/firestore';
import Logout from '../Logout';





const Firestore = () => {
    <Login/>

    const[nameData,setNameData]=useState([])
    const [firestoreData,setFirestoreData] = useState(" ")
    const firestorechange=(e)=>{


    }
   
    const getData=async()=>{
        let nameArray=[]
        const names=await db.collection('names').get();
        names.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            nameArray.push(doc.data())
          });
          setNameData(nameArray)
          console.log(nameData);
          
    }
    useEffect(() => {
        getData();
       
    }, []);
    return  <div>
            fireeuuuu
            <input type="text" value={firestoreData} onChange={(e)=>firestorechange(e)} placeholder= "type here.."></input>
            <div>{nameData.map((doc)=>{
                return(
                    <div>
                        {doc.name}
                    </div>
                )

            })}</div>
          
        </div>;
       
        
    
}

export default Firestore;
