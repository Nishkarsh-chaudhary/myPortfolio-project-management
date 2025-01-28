import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import styles from './SocialMediaLinks.module.css'

const SocialMediaLinks = () => {
  return (
    <>
      <a href="https://github.com/Nishkarsh-chaudhary" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaLinkedin />
      </a>


      <a href="https://www.instagram.com/__.nishkarsh/" target='_black' className={`${styles.socialMediaLinks}`}>
        <AiFillInstagram />
      </a>

      <a href="https://www.facebook.com/nishkarsh.chohdhary" target='_black' className={`${styles.socialMediaLinks}`}>
        <FaFacebook />
      </a>
    </>
  )
}

export default SocialMediaLinks
