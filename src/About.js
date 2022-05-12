import React,{ useEffect} from 'react'
import img1 from './Images/in2.png'
import img2 from './Images/git.png'

import img3 from './Images/link.png'
import img4 from './Images/mak.jpeg'
import img5 from './Images/gg.jpg'

import img6 from './Images/neeraj.jpeg'
import Aos from "aos"
import "aos/dist/aos.css"



import './About.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration:3000});
      },[]);
    return (
        <div>
             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>

            <br />
            <br />
            <h1 style={{textAlign:'center',color:'violet'}}><b>Persons involved in the Development</b></h1>
           <div className='mkk1'>
           <div class="card3">
        <div class="card-front">
            <img src={img4} style={{height:400,width:300}}></img>

        </div>
        <div class="card-back">
            <h2>Makarand, a Junior Developer </h2>
            <div class="social-icons" >
           
                <a href="#" class="fa fa-twitter" aria-hidden="true" style={{height:25,width:25}}></a>
                <a href="https://github.com/rockmakarand" class="fa fa-github" aria-hidden="true"style={{height:25,width:25}}></a>
              
                <a href="https://www.linkedin.com/in/makarand-rao-451aa6200/" class="fa fa-linkedin" aria-hidden="true"style={{height:25,width:25}}></a>
                <a href="https://www.instagram.com/rockrockymakarand/" class="fa fa-instagram" aria-hidden="true"style={{height:25,width:25}}></a>
            </div>
        </div>
        <br />
        <br />
        
        <br />
        <br />
        <br />
        
        <br />
         
    </div>  
    <div class="card2" >
        <div class="card-front">
            <img src={img5} style={{height:400,width:300}}></img>

        </div>
        <div class="card-back">
            <h2>Gautham Vijayan, a 
                Senior Developer
            </h2>
           
            <div class="social-icons23" >
           
                <a href="#" class="fa fa-twitter"  style={{height:25,width:25}}></a>
                <a href="https://github.com/rockmakarand" class="fa fa-github" aria-hidden="true"style={{height:25,width:25}}></a>
              
                <a href="https://www.linkedin.com/in/makarand-rao-451aa6200/" class="fa fa-linkedin" aria-hidden="true"style={{height:25,width:25}}></a>
                <a href="https://www.instagram.com/rockrockymakarand/" class="fa fa-instagram" aria-hidden="true"style={{height:25,width:25}}></a>
            </div>
        </div>
        <br />
        <br />
        
        <br />
        <br />
        <br />
        
        <br />
         
    </div>  
           </div>

           <div class="mkk">
   
            <div class="container1">
                <br/>
                <br/>
            <img src={img5} style={{height:200,width:200}} className="aqw"></img>
            <br/>

               
                <h2 style={{fontWeight:'500',textAlign:'center'}}>
                Gautham Vijayan, a Senior Developer </h2>
          <br />
        <br />
         <div class="ioe">
         <a href="https://instagram.com/gautham_vijay___?utm_medium=copy_link" style={{alignItems:'center'}}><img src={img1} style={{height:70}}></img></a>
          <a href="https://github.com/Gautham495" style={{alignItems:'center'}}><img src={img2} style={{height:70}}></img></a>
          <a href="https://www.linkedin.com/in/gautham-vijayan" style={{alignItems:'center'}}><img src={img3} style={{height:70}}></img></a>
          <br />
         </div>
        <br />
         

            </div>
            <div class="container1">
                <br/>
                <img src={img4} style={{height:200,width:200}} className="aqw"></img>
            <br/>
                <h2 style={{textAlign:'center'}}>Makarand, a Junior Developer</h2>
                <br />
                
          <br />
        <br />
         <div class="ioe">
         <a href="https://instagram.com/rockrockymakarand___?utm_medium=copy_link" style={{alignItems:'center'}}><img src={img1} style={{height:70}}></img></a>
          <a href="https://rockmakarand/github.io" style={{alignItems:'center'}}><img src={img2} style={{height:70}}></img></a>
          <a href="social-linkedin-circle-512.webp" style={{alignItems:'center'}}><img src={img3} style={{height:70}}></img></a>
          <br />
         </div>
        <br />
         

            </div>
            
        </div>
        </div>
       
        

       

        
    )
}

export default About
