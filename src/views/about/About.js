import React from 'react'
import robot from '../../assets/background/robot.png'
import Fade from 'react-reveal/Fade';

export const About = () => {

    return (
        <section className='about-container' id='about'>
            <Fade duration={2000} delay={200}>
                <div className='about'>
                    <h4>About Erik Games</h4>
                    <h1>Creating Console & PC Games Played Across the Globe</h1>
                    <button>Learn More</button>
                </div>
            </Fade>
            <Fade left big duration={2000} distance="30%" delay={200}>
                <div className='form-container'>
                    <h2>Get in Touch</h2>
                    <p>Feel free to contact us for any inquiries or questions you may have.</p>
                    <form id='contact'>
                        <label>Email *</label>
                        <input type='email' required readOnly />
                        <label>Subject</label>
                        <input type='text' />
                        <label>Leave us a message...</label>
                        <textarea />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </Fade>
            <Fade bottom big duration={2000} distance="30%" delay={200}>
                <img src={robot} alt='robot' />
            </Fade>
        </section>
    )
}
