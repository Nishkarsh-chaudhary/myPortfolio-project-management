import React from 'react'
import styles from "./AboutMe.module.css"
import Heading from '../utilityComponents/sectionHeading/Heading'
import { Button } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div id='aboutMe' className={`${styles.AboutMeContainer} containerBlockPadding text-center container align-content-center`}>
            <div className='mb-5'>
                <Heading heading="About Me" />
            </div>

            <div className="row justify-content-center align-items-center gap-5 gap-lg-3">
                <div className={`${styles.AboutMeContentContainer} col-12 col-lg-5 d-flex flex-column justify-content-between`}>
                    <h1 className='text-start mb-2 scrollReveal w-100 text-center text-lg-start'>Nishkarsh Chaudhary</h1>
                    <p className='text-start fadeUpAnimation text-center text-lg-start'>I am a highly motivated and results-driven Project Coordinator with expertise in project planning, scheduling, and cross-functional team collaboration. I excel in managing timelines, resources, and deliverables to ensure projects are completed efficiently and align with organizational goals. With a solid understanding of project management methodologies and tools, I am adept at transforming complex objectives into actionable plans that drive success. My passion for organization and continuous improvement motivates me to stay informed about the latest industry practices, ensuring the delivery of high-quality outcomes that support business growth and strategic initiatives.</p>
                    <div className="buttons d-flex align-items-center gap-2 justify-content-center justify-content-lg-start">
                        <a href="#contactMe">
                            <Button className="secondaryBtn fadeUpAnimation" type="button" size="lg">Contact Me</Button>
                        </a>
                        <a href="https://drive.google.com/file/d/1D9icpFOXbFByVFVxDrJCufVc0_Mk9ACd/view" target='_black' download>
                            <Button className="primaryBtn fadeUpAnimation" type="button" size="lg">Resume</Button>
                        </a>
                    </div>
                </div>
                <div className={`${styles.AboutMeImageContainer} fadeUpAnimation col-12 col-lg-5`}>
                    <img src="../../../public/images/about-nishkarsh.jpeg" alt="hero img" />
                </div>
            </div>

            <div className="animatedIcon">
                <img src="../../../public/images/plus.svg" alt="animated icon" />
            </div>
        </div>
    )
}

export default AboutMe
