import React from 'react'
import img1 from './Images/in2.png'
import img2 from './Images/what.png'
import img3 from './Images/telll.png'
import img4 from './Images/gmaii.png'
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <br/>
            <br/>
            <h1 style={{textAlign:'center',color:'yellowgreen'}}>
           Social Media Links:</h1>
            <br/>
            <br/>

            <div class="mkk">
            <div class="container">
            <h2 style={{textAlign:'center',fontWeight:500}}>
            Follow us at our INSTAGRAM page to get frequent updates about the App!</h2>
            
            <br/>
            <br/>
          
            <a href="https://instagram.com/rock_n_crack_jee?utm_medium=copy_link" style={{alignItems:'center'}}><img src={img1} style={{height:70}} class="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
                <div class="container" >
            <h2 style={{textAlign:'center',fontWeight:500}}>
            Join our Whatsapp Group to get New Notes(suggestions) in the APP and free Counselling(JOSAA)</h2>
            <br/>
            <br/>
            <a href="https://chat.whatsapp.com/IzmbGyR608mKao4vsSoora" style={{alignItems:'center'}}><img src={img2} style={{height:70}}  class="oii"></img></a>
            <br/>
            <br/>
                </div>
               
                <div class="container">
            <h2 style={{textAlign:'center',fontWeight:500}}>
            Join our Telegram Group to get New Notes(suggestions) in the APP and free Counselling(JOSAA)</h2>
            <br/>
            <br/>
            <a href="https://t.me/jee_notes_by_nitt" style={{alignItems:'center'}}><img src={img3} style={{height:70}}  class="oii"></img></a>
            <br/>
            <br/>
              
                </div>
            </div>
            <br/>
            <br/>
            <h1 style={{textAlign:'center',color:'tomato'}}>
           Email Links:</h1>

            <br/>
            <br/>
            <div class="mkk">
            <div class="container" >
            <h2 style={{textAlign:'center',fontWeight:500}}>
           Email us if you have any queries and Doubts (Email to Neeraj Reddy)</h2>
            
            <br/>
            <br/>
          
            <a href="mailto:neeraj.k.reddy9@gmail.com" style={{alignItems:'center'}}><img src={img4} style={{height:70}}  class="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
                <div class="container">
            <h2 style={{textAlign:'center',fontWeight:500}}>
           Email us if you have any queries and Doubts (Email to Makarand)</h2>
            
            <br/>
            <br/>
          
            <a href="mailto:makarandrao0@gmail.com" style={{alignItems:'center'}}><img src={img4} style={{height:70}}  class="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
                <div class="container">
            <h2 style={{textAlign:'center',fontWeight:500}}>
           Email us if you have any queries and Doubts (Email to Gautham Vijayan)</h2>
            
            <br/>
            <br/>
          
            <a href="mailto:kinggautham495@gmail.com" style={{alignItems:'center'}}><img src={img4} style={{height:70}}  class="oii"></img></a>
            <br/>
            <br/>
            <br/>
                </div>
        </div>
        </div>
    )
}

export default Contact
