import React from 'react';
import './About.css';
import aboutImg from '../../images/about-me.jpeg';

const About = () => {
    return (
        <div id='about' className='container'>
            <div className="text-center mt-5 mb-5">
                <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>Get To Know</p>
                <h2 style={{ color: '#4FB4F2' }}>About Me</h2>
            </div>
            <div className="row mb-5">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img className='img-fluid w-75 text-sm-center' src={aboutImg} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 mb-3">
                            <div className="card about-card text-center" >
                                <div className="card-body">
                                    <i style={{ color: '#4FB4F2' }} className="fa-solid fa-certificate"></i>
                                    <h5 className='mt-2'>Experience</h5>
                                    <p className='text-secondary'>1+ Years (WebDev)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 mb-3">
                            <div className="card about-card text-center" >
                                <div className="card-body">
                                <a
                                    href="https://leetcode.com/u/ashishsharma_99k/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2"
                                    >
                                    <i style={{ color: '#4FB4F2' }} className="fa-solid fa-link"></i>
                                    <h5>LeetCode</h5>
                                    <p className='text-secondary'>300+ Solved Question</p>
                                    </a>       
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 mb-3">
                            <div className="card about-card text-center">
                                <div className="card-body">
                                    <i style={{ color: '#4FB4F2' }} className="fa-solid fa-diagram-project"></i>
                                    <h5 className='mt-2'>Projects</h5>
                                    <p className='text-secondary'>20+ Completed projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <p className='pe-5 mt-4 mb-5'>
                            Recent NSIT Delhi graduate (2023) with 1.5 year of experience in React, Node.js, ,MongoDB and Express as an Associate Software Engineer at RoboMQ. Currently at Academically, I specialize in full-stack development and have honed my skills in JavaScript, HTML, CSS, Git, and RabbitMQ. With a passion for crafting efficient solutions, I’m seeking opportunities to contribute to innovative projects, grow my expertise, and make a meaningful impact in the software development field.</p>
                            <a className='button1' href="https://wa.me/917027274782">Let't Talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;