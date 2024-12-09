import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_widpywi', // Your EmailJS service ID
                'template_u0ei6ct', // Your EmailJS template ID
                form.current,
                '7XDNsM6Nz-ks9pzAi' // Your EmailJS public key
            )
            .then(
                (result) => {
                    console.log('Email sent:', result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.error('Error:', error.text);
                    alert('Failed to send message, please try again.');
                }
            );

        e.target.reset(); // Clear the form after sending the email
    };

    return (
        <div id='contact' className='container mb-5'>
            <div className="text-center mt-5 mb-5">
                <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>Get In Touch</p>
                <h2 style={{ color: '#4FB4F2' }}>Contact Me</h2>
            </div>
            <div className="row text-center">
                <div className="col-md-6">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className="card card-background mb-3" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <i className="fa-solid fa-envelope"></i>
                                <h5>Email</h5>
                                <p className='p-0'>sharmaashish082001@gmail.com</p>
                                <a href="mailto:sharmaashish082001@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        </div>
                        <div className="card card-background mb-3" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <i className="fa-brands fa-linkedin"></i>
                                <h5>LinkedIn</h5>
                                <p>Ashish Sharma</p>
                                <a href="https://www.linkedin.com/in/ashishsharma082001/" target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        </div>
                        <div className="card card-background mb-3" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <i className="fa-brands fa-whatsapp"></i>
                                <h5>WhatsApp</h5>
                                <p>+91-7027274782</p>
                                <a href="https://wa.me/917027274782" target="_blank" rel="noreferrer">Send a message</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-start">
                    <form ref={form} onSubmit={sendEmail} className='all-inputs'>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                            <input type="text" name='name' className="form-control from-design" id="exampleFormControlInput1" placeholder="Mr.X" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Your Email</label>
                            <input type="email" name='email' className="form-control from-design" id="exampleFormControlInput2" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea3" className="form-label">Your Message</label>
                            <textarea className="form-control from-design" name='message' id="exampleFormControlTextarea3" rows="8" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className='button2'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
