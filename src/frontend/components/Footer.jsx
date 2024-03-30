import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="foot">
        <h1><u>OUR NGOs</u></h1>
        <br/><br/>
        <div className="container ">
            <div className="row">
                <div className="col col-sm-12 col-lg-4"><b>RAMESHBHAI CHOTALIYA</b><br/>
               <u>Address:</u> "Ram Krupa Complex",<br/>
               Raiya Road,Rajkot.<br/>
                <u>Phone:</u>+91 1234567890

                </div>
                <div className="col col-sm-12 col-lg-4"><b>PRATHNABEN GAGLANI</b><br/>
                <u>Address:</u> "Chamunda Complex",<br/>
               Amin Marg,Rajkot.<br/>
                <u>Phone:</u>+91 1234569990
                
                </div>
                <div className="col col-sm-12 col-lg-4"><b>RAMABEN PATEL</b><br/>
                <u>Address:</u> "Jai Shree Krishna Complex",<br/>
               Nana Mava Road,Rajkot.<br/>
                <u>Phone:</u>+91 1234557890
                
                </div>
            </div>
        </div>
        <br/><br/>
        <h3>FOLLOW US ON:</h3>
      <br />
        <a href="https://www.instagram.com/"><i className="bi bi-instagram l1" ></i></a>
        <a href="https://www.facebook.com/"><i className="bi bi-facebook l2" ></i></a>
        <a href="https://www.whatsapp.com/"><i className="bi bi-whatsapp l3" ></i></a>
        <a href="https://twitter.com/"><i className="bi bi-twitter-x l4" ></i></a>
        <a href="https://telegram.com/"><i className="bi bi-telegram l5" ></i></a>
        <br />
        <br />

    </div>
  )
}

export default Footer
