import axios from 'axios'
import './pay.css'

function App() {

  //vanilla 

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

 
async function displayRazorpay()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
 

  const response = await axios.get("http://localhost:3000/")

  console.log(response.data)


  const options = {
      key: "rzp_test_hu9bMQ1099R5TW", // Enter the Key ID generated from the Dashboard
      amount: 65000,
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
     description: "Chemistry Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
async function displayRazorpay1()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
 

  const response = await axios.get("https://jeenotesbynittstudents.netlify.app/")

  console.log(response.data)


  const options = {
      key: "rzp_live_0cOzXqRsTktmG6", // Enter the Key ID generated from the Dashboard
      amount: 65000,
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
      description: "Physics Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
async function displayRazorpay3()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
 

  const response = await axios.get("https://jeenotesbynittstudents.netlify.app/")

  console.log(response.data)


  const options = {
      key: "rzp_live_0cOzXqRsTktmG6", // Enter the Key ID generated from the Dashboard
      amount: 65000,
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
      description: "Mathematics Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
async function displayRazorpay4()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
  <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_IPSIWsv3jIsp00" async> </script> </form>
 

  const response = await axios.get("http://localhost:3000/")

  console.log(response.data)


  const options = {
      key: "rzp_live_0cOzXqRsTktmG6", 
      //amount:"65000",
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
      description: "Selected Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
async function displayRazorpay5()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
  <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_IPSIWsv3jIsp00" async> </script> </form>
 

  const response = await axios.get("https://jeenotesbynittstudents.netlify.app/")

  console.log(response.data)


  const options = {
      key: "rzp_live_0cOzXqRsTktmG6", 
      amount:"25000",
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
      description: "Physical Chemistry Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
async function displayRazorpay6()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
  <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_IPSIWsv3jIsp00" async> </script> </form>
 

  const response = await axios.get("https://jeenotesbynittstudents.netlify.app/")

  console.log(response.data)


  const options = {
      key: "rzp_live_0cOzXqRsTktmG6", 
      amount:"25000",
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
      description: "Organic Chemistry Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
async function displayRazorpay7()
{
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"  
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }
  <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_IPSIWsv3jIsp00" async> </script> </form>
 

  const response = await axios.get("https://jeenotesbynittstudents.netlify.app/")

  console.log(response.data)


  const options = {
      key: "rzp_live_0cOzXqRsTktmG6", 
      amount:"25000",
      order_id: response.data.id,
      currency: "INR",
      name: "JEE Notes by NIT Trichy Students",
      description: "Inorganic Chemistry Notes",
      handler: async function (response) {
          const data = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };
          console.log(data)
      },
     
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

return (
   
    <div className="App">
        <br/>
        <br/>
        <br/>
        <div className="conn">
            <h1 style={{color:'coral',textAlign:'center'}}><b>Buy Notes and Also Get Access to FREE Doubt Solving Sessions!...</b></h1>
        <br/>
        <br/>
     <h2 style={{color:'purple',textAlign:'center'}}><b>Please Note after the Payment is done, we will verify and send the notes to your email id provided within 1 day.</b></h2>
        <br/>
        
     
        <br/>
        <br/>
     </div> 
     <br/>
        <br/>
        <br/>
        
        

        <br/>
        <br/>
        <br/>
    <div className="mm">
        
    <div className="con">
      <h2>If you want to Buy all Notes in Chemistry, click Here !</h2>
        <br/>
        
        <button onClick={displayRazorpay} class="ouu"><p style={{color:'white'}}>Make a Payment</p></button>
        <br/>
        <br/>
        <br/>
     </div>
     <div className="con">
      <h2>If you want to Buy all Notes in Physics, click Here !</h2>
        <br/>
        
      <button onClick={displayRazorpay1} class="ouz"><p style={{color:'white'}}>Make a Payment</p></button>
      <br/>
        <br/>
        <br/>
     </div>
     <div className="con">
     <h2>If you want to Buy all Notes in Mathematics, click Here !</h2>
        <br/>
        
      <button onClick={displayRazorpay3} class="ouy"><p style={{color:'white'}}>Make a Payment</p></button>
      <br/>
        <br/>
        <br/>
     </div>
        </div> 
        <br/>
        <br/>
        <br/>
        <div className="mm">
        <div className="con">
     <h2>If you want to Buy all Notes of Physical Chemistry, Click Here!</h2>
        <br/>
        
      <button onClick={displayRazorpay5} class="oup" style={{backgroundColor:'orchid'}}><p style={{color:'white'}}>Make a Payment</p></button>
      <br/>
        <br/>
        <br/>
     </div> 
     <div className="con">
     <h2>If you want to Buy all Notes in Organic Chemistry , click Here !</h2>
        <br/>
        
      <button onClick={displayRazorpay6} class="ouy" style={{backgroundColor:'brown'}}><p style={{color:'white'}}>Make a Payment</p></button>
      <br/>
        <br/>
        <br/>
     </div>
     <div className="con">
      <h2>If you want to Buy Notes of Inorganic Chemistry , click Here !</h2>
        <br/>
        
      <button onClick={displayRazorpay7} class="ouy" style={{backgroundColor:'darkcyan'}}><p style={{color:'white'}}>Make a Payment</p></button>
      <br/>
        <br/>
        <br/>
     </div>
    
        </div>
        <div className="mm">
        <div className="con">
    <h2>If you want to Buy Notes of Selected Chapters , click Here !</h2>
        <br/>
        
      <a href="https://rockmakarand.github.io/razorr/"><button  class="oup" style={{backgroundColor:'royalblue'}}><p style={{color:'white'}}>Make a Payment</p></button></a>
      <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_IQCVjfV1HrqH3R" async> </script> </form>
      <br/>
        <br/>
        <br/>
     </div> 
     </div>


        </div>
  
  );
}

export default App;
