import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className=" container">
           
       <div className="back">
       <div className="fonts">
       <h2 className='contacts'>Contact Us</h2>
           <div className="subs">
                   <form style={{margin:"auto",maxWidth:"500px"}}>
                       <input style={{border:"1px solid white",padding:"8px",marginBottom:"8px"}} className='w-100' type="text" placeholder="Full Name"></input>
                       <br></br>
                       <input style={{border:"1px solid white",padding:"8px",marginBottom:"8px"}} className='w-100' type="text" placeholder="Email Address"></input>
                       <br></br>
                       <input style={{border:"1px solid white",padding:"8px",marginBottom:"8px"}} className='w-100' type="text" placeholder="Phone Number"></input>
                       <br></br>
                       <textarea placeholder="Have anything to say?" style={{border:"1px solid white",padding:"8px",marginBottom:"8px"}}  className='w-100' id="w3review" name="w3review" rows="4" cols="50">
</textarea>
<div style={{textAlign:"center"}}>
<input className='sends' style={{padding:"10px 55px",marginBottom:"8px",border:"1px solid white",textAlign:"center",backgroundColor:"#0048FF",color:"white",borderRadius:"8px",fontSize:"18px",fontWeight:600}} type="Submit" placeholder=""></input>
</div>
                       
                   </form>

               </div>
           </div>
       </div>
            
        </div>
    );
};

export default Contact;