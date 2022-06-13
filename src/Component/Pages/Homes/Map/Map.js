import React from 'react';
import './Map.css'
const Map = () => {
    return (
        <div className="container p-4">
             <div class="bd ">
              <h2 className="mappings">Service Map</h2>
                <div className="row pb-5" style={{backgroundColor:"#F9F9F9",padding:"10px"}}>
                    <div className="col-lg-5 col-sm-12 col-md-6">
                       <h3 className='m-5 nons'style={{paddingTop:"15%"}}>IT consulting</h3>
                       
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-6 maps"style={{backgroundColor:""}}>
                      <ul>
                        <li style={{marginTop:"10%",padding:"5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam. </li>
                      </ul>
                    </div>
                </div>


                {/* software development  */}

                <div className="row pb-5 mt-5" style={{backgroundColor:"#F9F9F9",padding:"10px"}}>
                    <div className="col-lg-5 col-sm-12 col-md-6">
                       <h3 className='m-5 nons'style={{paddingTop:"14%"}}>Software <br></br> Development</h3>
                       
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-6 maps"style={{backgroundColor:""}}>
                      <ul>
                        <li style={{marginTop:"10%",padding:"5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam. </li>
                      </ul>
                    </div>
                </div>

                {/* testing  */}

                <div className="row pb-5 mt-5" style={{backgroundColor:"#F9F9F9",padding:"10px"}}>
                    <div className="col-lg-5 col-sm-12 col-md-6">
                       <h3 className='m-5 nons'style={{paddingTop:"15%"}}>Testing and QA</h3>
                       
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-6 maps"style={{backgroundColor:""}}>
                      <ul>
                        <li style={{marginTop:"10%",padding:"5px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam. </li>
                      </ul>
                    </div>
                </div>

                <div style={{textAlign:"center",marginTop:"35px"}}>
                  <a className='views'>View All Services </a>
                </div>
             </div>
        </div>
    );
};

export default Map;