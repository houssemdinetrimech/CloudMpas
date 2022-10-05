import './App.css';
import {Map, GoogleApiWrapper} from 'google-maps-react'
import { Component } from 'react';
import ContactSection from './components/contact-section/ContactSection'
import IntroSection from './components/intro/Intro'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'


class MapContainer extends Component {
  render(){
  return (
    <div >
      <IntroSection />
      <ContactSection/>
      <Map
      google={this.props.google}
      style={{width:"50%",height:"90%", margin:' 10px auto 0 auto'}}
      zoom={15}
      initialCenter={{
        lat: 35.8631575,
  lng: 10.5954338
      }}
      />
    <DisclaimerSection />
    <FooterSection />
    </div>
  );
}}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_GaCGI-jvAgE113Jd_tm2oWEi1IHCCLg'
})(MapContainer);