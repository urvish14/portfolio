import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="IntroContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Urvish</span><br />Full-Stack Developer</span>
            <p className="introPara">I am a skilled and passionate full-stack developer with experience in creating<br/> responsive and user-friendlly websites.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro