import React from 'react';
import './AboutCompany.css'
const AboutCompany = () => {
    return (
        <div className="container p-4">
             <div class="bd ">
                <div className="row" style={{backgroundColor:"#EDF7FF",borderBottomRightRadius:"85px",borderTopRightRadius:"85px",padding:"10px",borderTopLeftRadius:"85px",borderBottomLeftRadius:"85px"}}>
                    <div className="col-lg-3 col-sm-12 col-md-6">
                       <h3 style={{width:"",height:"160px",backgroundColor:"white",margin:"5%",textAlign:"center",borderBottomLeftRadius:"70px",borderTopLeftRadius:"70px",alignItems:"center",padding:"15px"}}><h6 style={{fontSize:"35px",marginTop:"",textAlign:"left",margin:"25px",color:"#0048FF",fontFamily: 'GT Walsheim Pro',fontWeight:"700"}}>About <br></br> Company</h6></h3>
                    </div>
                    <div className="col-lg-9 col-sm-12 col-md-6"style={{backgroundColor:""}}>
                       <div style={{maxWidth:"700px"}}>
                       <p className='container-fluid' style={{textAlign:"justify",marginTop:"8%",marginLeft:"",backgroundColor:"",fontFamily: 'GT Walsheim Pro',fontWeight: 400,lineHeight:"25px",fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis mi nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc accumsan, viverra enim. Mi.</p>
                       </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default AboutCompany;