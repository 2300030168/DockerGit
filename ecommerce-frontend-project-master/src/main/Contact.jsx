import React from 'react';


export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We're here to help! If you have any questions, feedback, or need assistance with your order, please don't hesitate to contact us.
        </p>
        <div className="contact-details">
            <div>
              <h4>Email:</h4>
              <p><a href="mailto:support@example.com">fsadkluniversity.com</a></p> {/* Replace with your actual email */}
            </div>
            <div>
              <h4>Phone:</h4>
              <p>+91 9865985263</p> {/* Replace with your actual phone number */}
            </div>
            <div>
              <h4>Address:</h4>
              <p>
                KL UNIVERSITY<br/>
                Vaddeswaram<br/>
                Andhra Pradesh.
              </p>  {/* Replace with your actual address */}
            </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="map-location">
         <h2>Our Location</h2>
         {/* Replace the URL with your actual Google Maps embed link. */}
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.941250428193!2d-122.08401148446173!3d37.42199907972722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba03e5b79c35%3A0x69cdc9a23995e968!2sGoogleplex!5e0!3m2!1sen!2sus!4v1699545893348!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
         </iframe>
       </section>
    </div>
  );
}