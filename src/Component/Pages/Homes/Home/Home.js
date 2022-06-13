import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import Navigation from '../Navigation/Navigation';
import Provide from '../Provide/Provide';
import Service from '../Service/Service';
import Service2 from '../Service2/Service2';
import SoftwareProduct from '../SoftwareProduct/SoftwareProduct';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
          <div className='mt-5'>
          <Provide></Provide>
          </div>
          <div className='mt-5'>
          <AboutCompany></AboutCompany>
          </div>
          <div className='mt-5'>
           <Service></Service>
          </div>
          <div className='mt-5'>
           <SoftwareProduct></SoftwareProduct>
          </div>
           <div className='mt-5'>
           <Service2></Service2>
          </div>
           <div className='mt-5'>
           <Map></Map>
          </div>
           <div className='mt-5'>
           <Contact></Contact>
          </div>
           <div className='mt-5'>
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Home;