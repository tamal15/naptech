import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <div className="container p-4">
             <div class="bd ">
                <h2 className="services">Our Services</h2>
                <div className="row pb-5" style={{backgroundColor:" #FFF5FF",borderBottomRightRadius:"130px",borderTopRightRadius:"130px",padding:"10px"}}>
                    <div className="col-lg-7 col-sm-12 col-md-6">
                       <h3 className='m-5 non'>Non-IT enterprises</h3>
                       <p className='its m-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat bibendum sit felis, sollicitudin et. Nulla aliquet integer hac ac morbi.</p>

                       <a className='mores m-5' style={{color:"#0048FF"}}>Learn More <i style={{color:"#B2BAFF",marginTop:"4px"}} class="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-6"style={{backgroundColor:""}}>
                      <img style={{width:"70%",marginTop:"45px"}} src="https://i.ibb.co/BPNQVKt/4.png" alt="" srcset="" />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Service;