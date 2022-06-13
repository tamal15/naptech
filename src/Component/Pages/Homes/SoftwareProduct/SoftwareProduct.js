import React from 'react';
import './SoftwareProduct.css'
const SoftwareProduct = () => {
    return (
        <div className="container p-4">
             <div class="bd ">
                <div className="row pb-5" style={{backgroundColor:"#F5F8FF",borderTopLeftRadius:"135px",borderBottomLeftRadius:"135px",padding:"10px"}}>

                <div className="col-lg-5 col-sm-12 col-md-6"style={{backgroundColor:""}}>
                      <img style={{width:"65%",marginTop:"45px",padding:"8px",margin:"37px"}} src="https://i.ibb.co/7NpQKj2/9.png" alt="" srcset="" />
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-6">
                       <h3 className='m-5 non'>Software product companies</h3>
                       <p className='its m-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.</p>

                       <a className='mores m-5' style={{color:"#0048FF"}}>Learn More <i style={{color:"#B2BAFF",marginTop:"4px"}} class="fas fa-arrow-right"></i></a>
                    </div>
                  
                </div>
             </div>
        </div>
    );
};

export default SoftwareProduct;