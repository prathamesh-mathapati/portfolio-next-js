import React from 'react';
import Banner from '../assets/banner.png';
import Image from 'next/image';
import "./ManeSection.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaBootstrap ,FaHtml5} from "react-icons/fa";


const ManeSection = () => {
  return (

    <>
    <section className='mane-section'>
      <div className='mane-section-frist'>
        <h1>Hello I'm <span>Prathamesh</span>  <br /> <span>Web</span> Developer <br /> Best for <span>India</span></h1>
        <div className='botton-icons d-flex'>
            <Link href="https://github.com/prathamesh-mathapati" target='_blank' className='botton-icons-dark'><FaGithub /></Link>
            <Link href="mailto:prathamesh20@navgurukul.org" target='_blank'><MdEmail /></Link>
            <Link href="https://www.linkedin.com/in/prathamesh-mathapati-aaaa80263/?originalSubdomain=in" target='_blank'> <FaLinkedin/></Link>
            <Link href="https://www.instagram.com/prathamesh_mathapati/" target='_blank'> <BiLogoInstagramAlt/></Link>
          </div>
      </div>
      <div >
        <Image src={Banner} alt='none' className='banner-img' />
      </div>

    </section>

      <section className='main-skills-section'>
          <h3>My skills</h3>
          <div className='main-skills-icons'>
          <span>
            <RiNextjsFill/>
            <b>Next js</b>
          </span>
          <span>
            <FaReact/>
            <b>React js</b>
          </span>
          <span>
            <SiRedux/>
            <b>Redux</b>
            </span>
          <span>
            <DiJavascript1/>
            <b>Javascript</b>
          </span>
          <span>
            <SiTypescript/>
            <b>Typescript</b>
          </span>
          <span>
            <FaHtml5/>
            <b>HTML</b>  
          </span>
          <span>
            <FaCss3/>
            <b>CSS</b>  
          </span>
          <span>
            <FaWebflow/>
            <b>Webflow</b>  
          </span>
          <span>
            <FaWordpress/>
            <b>Wordpress</b>  
          </span>
          <span>
            <FaBootstrap/>
            <b>Bootstrap</b>  
            </span>

          </div>
    </section>
    </>
  );
}

export default ManeSection;