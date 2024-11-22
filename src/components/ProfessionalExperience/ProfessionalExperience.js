import React from 'react';
import './ProfessionalExperience.css';
import pe from '../../images/professional.png';

const ProfessionalExperience = () => {
    return (
        <div className='container'>
            <div className="text-center mt-5 mb-5">
                <p style={{ textSize: '0.875em', marginBottom: '-2px' }} className='text-secondary'>Professional Experience?</p>
                <h2 style={{ color: '#4FB4F2' }}>My Professional Experience</h2>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-8 mb-3">
                    <div className="card pe-card">
                        <div className="card-body text-center">
                            <h2 className='mb-2 job-title'>Academically Global Pvt Ltd </h2>
                            <p>Software Engineer &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; June, 24 - Present</p>
                        </div>
                        <div className='d-flex justify-content-sm-center'>
                        <div className='d-flex flex-column justify-content-sm-center'>
                            <p>* Implement the Sales Dashboard using React, Tailwind CSS, CSS, JavaScript</p>
                            <p>* Used of Context API to provide Roles and Permission.</p>
                            <p>* Code Improvement and Bug Fix of CRM System</p>
                            <p>* Made a Responsive UI of CRM System using Media Query and Tailwind.</p>
                            </div>
                            </div>
                    </div>
                    <div className="card pe-card mt-3">
                        <div className="card-body text-center">
                            <h2 className='mb-2 job-title'>RoboMQ Pvt Ltd</h2>
                            <p>Associate Software Engineer  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; July, 23 - Dec, 23</p>
                        </div>
                        <div className='d-flex justify-content-sm-center'>
                        <div className='d-flex flex-column justify-content-sm-center'>
                            <p>* Learned and Implemented Core Java, React and Spring Framework.</p>
                            <p>* Build and Integrate the Microservice using Java and Spring Framework.</p>
                            <p>* Code Improvement and Bug Fix of Microservice.</p>
                            <p>* Made a Responsive UI and set the permission HTML5, CSS3, ReactJS in HR System</p>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <img className='img-fluid' src={pe} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default ProfessionalExperience;