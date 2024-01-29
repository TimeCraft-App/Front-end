import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './OurStory.css';

const OurStory = () => {
  return (
    <>
      <Navbar />

      <div className="our-story">
        <div className="title-container">
          <hr className="separator" />
        </div>

        <div className="content">
          <div className="rectangle">
            <div className="text-container">
              <p className="text">
                Welcome to our TimeCraft Management application, where we are dedicated to unlocking the potential of learning and productivity. With a wide range of smart solutions tailored to meet the needs of companies, we aim to provide a world of innovative and efficient products. Join us on this journey as we revolutionize the way you work and study!
              </p>
            </div>
            <div className="rectangle-image"></div>
          </div>
        </div>
      </div>

      <div className="history-container">
        <h4 className="history-title">Our Story</h4>
        <div className="line"></div>
        <p className="history-text">
          Timecraft is like a superhero for your time. Imagine a friend who helps you stay on top of things without making it complicated. Our story began with a bunch of folks, just like you, wanting a tool to make daily life smoother. No tech jargon here—just a simple idea: Timecraft is your sidekick, making sure you use time wisely. It's more than an app; it's a buddy that helps you enjoy every moment. From tasks to time, we've got your back, making life a little bit easier, one day at a time. That's the Timecraft story – keeping it simple, just like you asked!
        </p>
      </div>

      <div className="big-picture-container"></div>

      <div className="values-container">
        <h4 className="values-title">Our Values</h4>
        <div className="line"></div>
        <h6 className="values-subtitle">Here are the four guidelines we stick to in order to protect you in these shifting environments:</h6>

        <div className="guidelines-container">
          <div className="guideline">
            <h2 className="guideline-title">Quality Assurance</h2>
            <p className="guideline-text">
              At TimeCraft, quality is our priority. Our rigorously tested and selected products provide reliable, durable, and high-performance school and office supplies. Trust TimeCraft to support your changing needs with satisfaction and peace of mind.
            </p>
          </div>

          <div className="guideline">
            <h2 className="guideline-title">Stay Ahead with Innovation</h2>
            <p className="guideline-text">
              At TimeCraft, we strive to stay ahead with innovation. Our continuously updated product range ensures that you have access to the latest and most advanced school and office supplies. Count on TimeCraft to empower your learning and work with cutting-edge solutions.
            </p>
          </div>

          <div className="guideline">
            <h2 className="guideline-title">Responsive Customer Support</h2>
            <p className="guideline-text">
              TimeCraft is dedicated to providing responsive customer support. Our friendly and knowledgeable team is here to assist you with any inquiries or concerns. Experience personalized assistance and prompt solutions from our customer support representatives.
            </p>
          </div>

          <div className="guideline">
            <h2 className="guideline-title">Adaptable Shopping Experience</h2>
            <p className="guideline-text">
              At TimeCraft, we offer an adaptable shopping experience. Our user-friendly platform and flexible options make it convenient for you to browse, select, and purchase your desired school and office supplies. Enjoy a seamless and personalized shopping journey with TimeCraft.
            </p>
          </div>
        </div>
      </div>

      <div className="team-container">
        <h4 className="team-title">Meet Our Team</h4>
        <div className="line-white"></div>
        <p className="team-subtitle">Meet our multi-talented team members who are passionate about their jobs in the field of TimeCraft website:</p>

        <div className="team-members">
          <div className="team-member">
            <div className="member-photo member1"></div>
            <h5 className="member-name">Albion Paçarizi</h5>
            <p className="member-job">TimeCraft Manager</p>
          </div>
          <div className="team-member">
            <div className="member-photo member2"></div>
            <h5 className="member-name">Bledion Krasniqi</h5>
            <p className="member-job">Content Writer</p>
          </div>
          <div className="team-member">
            <div className="member-photo member3"></div>
            <h5 className="member-name">Jeton Sllamniku</h5>
            <p className="member-job">Product Manager</p>
          </div>
          <div className="team-member">
            <div className="member-photo member4"></div>
            <h5 className="member-name">Jeton Sllamniku</h5>
            <p className="member-job">Ceo of TimeCraft</p>
          </div>
          <div className="team-member">
            <div className="member-photo member5"></div>
            <h5 className="member-name">Albion Paçarizi</h5>
            <p className="member-job">Digital Marketer</p>
          </div>
          <div className="team-member">
            <div className="member-photo member6"></div>
            <h5 className="member-name">Bledion Krasniqi</h5>
            <p className="member-job">Data Analyst</p>
          </div>
        </div>
      </div>

      <div className="trusted-companies-container">
        <h4 className="trusted-companies-title">Trusted with more than 100 Companies since 2012</h4>
        <div className="trusted-companies-photos">
          <div className="company-photo company1"></div>
          <div className="company-photo company2"></div>
          <div className="company-photo company3"></div>
          <div className="company-photo company4"></div>
          <div className="company-photo company5"></div>
          <div className="company-photo company6"></div>
        </div>
        <div className="additional-photos-container">
          <div className="additional-photo additional1"></div>
          <div className="additional-photo additional2"></div>
          <div className="additional-photo additional3"></div>
          <div className="additional-quote">
            <p><span>"</span>Empowering Minds, Inspiring Success: Fueling Education and Office Excellence<span>"</span></p>
          </div>
        </div>
      </div>
      <hr className="separator-line" />

      <Footer />
    </>
  );
};

export default OurStory;
