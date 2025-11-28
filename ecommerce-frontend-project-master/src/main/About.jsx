import React from 'react';


export default function About() {
  return (
    <div className="about-page">
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Welcome to [Your E-commerce Store Name]! Our journey began with a passion for [mention your product category or niche] and a desire to [mention your brand's core mission, e.g., provide high-quality, sustainable products; offer unique and handcrafted items; make [product type] accessible to everyone].
        </p>
        <p>
          [Expand on your brand's origins. You could talk about the founders, the inspiration behind the business, or a key moment that led to its creation. Be authentic and engaging!]
        </p>
        <p>
          Today, we are proud to serve a community of [mention your target audience or the impact you aim to make]. We are committed to [mention your ongoing commitments, e.g., sourcing ethically, providing excellent customer service, innovating our product line].
        </p>
      </section>

      <section className="our-team">
        <h2>Meet Our Team</h2>
        <p>
          Behind [Your E-commerce Store Name] is a dedicated team of individuals who are passionate about [mention your shared passion]. We work collaboratively to bring you the best possible products and shopping experience.
        </p>
    
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We are committed to offering products that meet the highest standards of quality and durability.</li>
          <li><strong>Sustainability:</strong> We strive to minimize our environmental impact through [mention specific practices like eco-friendly packaging or sourcing].</li>
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We are dedicated to providing excellent customer service and support.</li>
          
        </ul>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? We'd love to hear from you!
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:[Your Email Address]">fsadkluniversity.in</a></li>
          <li><strong>Phone:</strong> 9999999999</li>
          <li><strong>Address:</strong>  Kl University, Vaddeswaram</li>
        </ul>
        {/* You could also include a link to a dedicated Contact Us page */}
        <p>
          Follow us on social media: [Links to your social media profiles (Optional)]
        </p>
      </section>

      {/* Optional: Add an image or video section */}
      {/* <section className="our-visuals">
        <h2>Our Visual Story</h2>
        <img src="/images/about-us.jpg" alt="Our Store" />
        {/* Or a video: */}
        {/* <iframe width="560" height="315" src="[Your Video URL]" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      {/* </section> */}
    </div>
  );
}