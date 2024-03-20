import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>


function App() {
  const form = useRef(null);
  const [thankYouMessage, setThankYouMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gdznw7k', 'template_qgeu89n', form.current, {
        publicKey: 'ihuURRHtQ6axR2qDx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
       // Clear the form
       form.current.reset();

    // Display thank you message
    setThankYouMessage('Thank you for sending message your message has been sent.! ');
  };
  return (
    <div className="App">
      <section class="contact_us">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="contact_inner">
                <div class="row">
                  <div class="col-md-10">
                    <div class="contact_form_inner">
                      <div class="contact_field">
                        <h3>Jatin Sehgal</h3>
                        <h6>Feel Free to contact me any time. I will get back to you as soon as i can!.
                        </h6>
                        <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='user_name' class="form-control form-group" placeholder="Name" />
                        <input type="text" name='user_email' class="form-control form-group" placeholder="Email" />
                        <textarea class="form-control form-group" name='message' placeholder="Message"></textarea>
                        <button class="contact_form_submit" onClick={sendEmail}>Send</button></form>
                        <p className='ok'>{thankYouMessage}</p>

                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="right_conatct_social_icon d-flex align-items-end">
                      <div class="socil_item_inner d-flex">
                        <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="contact_info_sec">
                  <h4>Contact Info</h4>

                  <div class="d-flex info_single align-items-center">
                    <i class="fas fa-envelope-open-text"></i>
                    <span>Jatinsehgal466@gmail.com</span>
                  </div>
                  <div class="d-flex info_single align-items-center">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>Trusted by over 100+ customers for quality websites and service.</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="map_sec">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="map_inner">
                <h4>Find Me on Google Map</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda,
                  expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem
                  sequi ab porro, quia error.</p>

                <div class="map_bind">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55076.035213280134!2d76.73622691553187!3d30.372195641632807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb62a421e6f11%3A0xebd28a29f7258d14!2sAmbala%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710911685910!5m2!1sen!2sin"
                    width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""
                    aria-hidden="false" tabindex="0"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
