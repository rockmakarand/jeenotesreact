import React from 'react'
import img1 from './Images/gplay.png'
import img2 from './Images/youtube.png'
import img3 from './Images/apple.png'
import img4 from './Images/mission.png'
import './Home.css'
import { signInWithGoogle,auth,db } from './Firebase'



const Home = () => (
  
 
        <div >
        <br />
        
        <h1 style={{color: 'palevioletred',textAlign:'center',fontSize:50}}><b>JEE Notes APP</b></h1>      
          <h1 style={{color: 'cyan',textAlign:'center',fontSize:50}}><b>by the students of...</b></h1>
          <h1 style={{color: 'lime',textAlign:'center',fontSize:50}}><b>NIT Tiruchirapalli</b></h1>
          
        
        
        <br />
        <br />
        <div class="mkk">
            <div class="container">
                <h1 style={{textAlign:'center',color:'darkcyan'}}>Chemistry App</h1>
                <br />
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
              The Chemistry Notes App is our first project, since Chemistry is where
          a lot of notes are required. The app therefore is available on Android and IoS</h2>
          <br />
        <br />
         <div class="uuy" style={{display:'flex',justifyContent:'space-evenly'}}>
         <a href="https://play.google.com/store/apps/details?id=com.gauthamchemnotes" style={{alignItems:'center'}}><img src={img1} style={{height:70}} class="jee"></img></a>
          <br />
        <br />
        <a href="https://apps.apple.com/gm/app/jee-chemistry-note-nit-trichy/id1557500402" style={{alignItems:'center'}}><img src={img3} style={{height:70}} class="jee"></img></a>
        <br />
        <br />
         </div>
         <br />
        <br />
          <h2 style={{fontWeight:'500',textAlign:'center'}}>You can also watch our guide to use the APP efficiently!</h2>
          <a href="https://www.youtube.com/watch?v=zciygP464Oo"><img src={img2} style= {{height:130}} class="jee"></img></a>

            </div>
            <div class="container">
                <h1 style={{textAlign:'center',color:'orchid'}}>Physics App</h1>
                <br />
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
                The Physics Notes App is our second project. The app has notes combined 
              from institutes in Andhra Pradesh, Tamil Nadu and Telangana. The app is available 
          only in Google Playstore as of now</h2>
          <br />
        <br />
          <a href="https://play.google.com/store/apps/details?id=com.gauthamchemnotes" style={{alignItems:'center'}}><img src={img1} style={{height:70}} class="jee"></img></a>
          <br />
        <br />
          <h2 style={{fontWeight:'500',textAlign:'center'}}>You can also watch our guide to use the APP efficiently!</h2>
          <a href="https://www.youtube.com/watch?v=zciygP464Oo"><img src={img2} style= {{height:130}} class="jee"></img></a>

            </div>
            <div class="container">
                <h1 style={{textAlign:'center',color:'red'}}>Mathematics App</h1>
                <br />
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
                The Physics Notes App is our second project. The app has notes combined 
              from institutes in Andhra Pradesh, Tamil Nadu and Telangana. The app is available 
          only in Google Playstore as of now</h2>
          <br />
        <br />
          <a href="https://play.google.com/store/apps/details?id=com.gauthamchemnotes" style={{alignItems:'center'}}><img src={img1} style={{height:70}} class="jee"></img></a>
          <br />
        <br />
          <h2 style={{fontWeight:'500',textAlign:'center'}}>You can also watch our guide to use the APP efficiently!</h2>
          <a href="https://www.youtube.com/watch?v=zciygP464Oo"><img src={img2} style= {{height:130}} class="jee"></img></a>

            </div>
            
            
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="oir"  >
          <img src={img4} class="misss"></img>
          <br />
        <br />
          <h1 style={{textAlign:'center',color:'darkgreen'}}>
               Our Missions</h1>
               <br />
        <br />
               <h2 style={{textAlign:'center',fontWeight:500,color:'deeppink'}}>
               1. To provide QUALITY Notes to students who can not afford it</h2>
               <br />
        <br />
               <h2 style={{textAlign:'center',fontWeight:500,color:'darkcyan'}}>
               2. Also to provide Mock test for JEE MAIN and ADVANCED at AFFORDABLE PRICES!!</h2>
               <br />
        <br />
               <h2 style={{textAlign:'center',fontWeight:500,color:'blue'}}>
               3. To provide GOOD QUALITY QUESTIONS with VIDEO SOLUTIONS..</h2>
               <br />
        <br />
               <h2 style={{textAlign:'center',fontWeight:500,}}><b>
               4. To provide FREE Josaa and Csab Counselling..</b></h2>
               <br />
        <br />
          
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 style={{textAlign:'center',color:'darkcyan'}}>
               Please give us npFEEDBACK About the Apps and the Website in the form below:</h1>
       
               <br />
        <br />
        <br />
        
    
            
                <div class="oir" >
                    <form action="https://formspree.io/f/mzbyrpev" method="POST">
                        <div class="form-group" class="oij">
                            <label for="firstname" style={{color:'brown', textAlign:'center'}}><b> Name:</b></label>
                            <br/>
                            <input type="text"id="firstname"name="firstname" placeholder="XYZ" style={{textAlign:'center'}}></input>
                        </div>
                        <br/>
                        <br/>
    
                        
                        <div class="form-group" class="oij">
                            <label for="email" style={{color:'brown'}}><b>Email:</b></label>
                            <br/>
                            <input type="text"id="email"name="email" placeholder="ABC@yahoo.com"></input>
                        </div>
                        <br/>
                        <br/>
                        <div class="form-group" class="oij">
                            <label for="chaps" style={{color: 'brown'}}><b>Enter your Valuable Feedback:</b></label>
                            <br/>
                           
                            <textarea name="chaps"  placeholder="enter here..."></textarea>
    
                           
                        </div>
                        <br/>
                        <br/>
                        <button type="submit" style={{color:'white',height: 40,width: 150,backgroundColor:'darkorchid'}} class="oiii" >
                       <b> Submit</b></button> 
                        
                        
                       
                       
                      
                        </form>              
                        <br/>
                        <br/>
                       
                    
               
        
        
       
        </div>
        <br />
        <br />

       

    </div>
    
)

export default Home
