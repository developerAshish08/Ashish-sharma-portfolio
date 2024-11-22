import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <p className='text-secondary mt-3'>Hello, I'm</p>
                <h1>Ashish Sharma</h1>
                <p className='mb-4'>Full Stack Developer</p>
                <a className='button1 me-2' href="https://drive.google.com/file/d/1vwzCdZANEa84oPfOy3-OKo0Fr9__rxXG/view?usp=sharing" target="_blank" rel="noreferrer">Download CV</a>
                <a className='button2' href="https://wa.me/917027274782" target="_blank" rel="noreferrer">Let's Talk</a>
            </div>
            <div>
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-12 position-relative">
                        <div className='position-absolute bottom-0 start-0'>
                            <a style={{ color: '#4FB4F2' }} href="https://www.linkedin.com/in/ashishsharma082001/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a> <br />
                            <a style={{ color: '#4FB4F2' }} href="https://github.com/developerAshish08" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a> <br />
                            <div className="vl"></div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center">
                    </div>
                    <div className="col-md-4 col-sm-12 position-relative">
                        <a className='vertical-button position-absolute bottom-0 end-0 fs-6' href="#footer">ScrollDown-</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;