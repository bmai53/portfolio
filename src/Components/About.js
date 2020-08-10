import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      if (this.props.data) {
         var networks = this.props.data.social.map(function (network) {
            return <span key={network.name}><a href={network.url}><i className={network.className}></i></a></span>
         })
      }

      const aboutRowStyles = {
         row: {
            margin: "auto"
         },
         button: {
            width: 225,
            textAlign: "left"
         }
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <div className="row">
                     <img className="profile-pic" src={profilepic} alt="Profile Pic" />
                  </div>
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">

                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>
                              {city} {state}
                           </span><br />
                           <span><a href={`mailto:${email}`}> {email}</a></span>
                        </p>
                     </div>

                     <div className="download" style={aboutRowStyles.row}>
                        <span>
                           <a href={resumeDownload} className="button" style={aboutRowStyles.button} target="_blank">
                              <i className="fa fa-download"></i>
                              Download Resume
                           </a>
                        </span>
                        <span>
                           <a href={`mailto:${email}`} className="button" style={aboutRowStyles.button}>
                              <i className="fa fa-envelope"></i>
                              Contact Me
                           </a>
                        </span>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
