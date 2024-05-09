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
import { FaBootstrap ,FaHtml5} from "react-icons/fa"
import navgurukul from "../assets/navgurukul_logo.jpg";
import { Dark } from './Dark';
import { companyProject } from './projectDel';
import { MdOpenInNew } from "react-icons/md";
import contactUs from '../assets/contact-us.png'

const ManeSection = () => {
  return (

    <>
    <section className='mane-section w-pm-80'>
      <div className='mane-section-frist '>
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

      <section className='main-skills-section w-pm-80'>
          <h3>My <strong> Skills</strong></h3>
          <div className='main-skills-icons'>
          <span>
            <RiNextjsFill/>
            <b>Next js</b>
          </span>
          <span className='main-skills-icons-link'>
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

      <section className='main-express-section'>
        <div className='w-pm-80'>
        <h3>My <strong>Experience</strong></h3>
        <div className='experience-details'>
          <div className='experience-details-heading'>
            <div className='experience-sub-heading'>
            <Image src={navgurukul} width={60} height={60}/>
            <Link href="https://www.navgurukul.org/" target='_blnk'>Learn web Development at Navgurukul</Link> 
            </div>
            <p>Date </p>
          </div>
          <p className='company-details'>have handled the post of mentor and teacher of 10+ students free of cost I am making some demo projects like an E-commerce website, clone of omani food ect.</p>
        </div>

        <div className='experience-details'>
          <div className='experience-details-heading'>
            <div className='experience-sub-heading'>
            <Image src={navgurukul} width={60} height={60}/>
            <Link href="https://www.navgurukul.org/" target='_blnk'>Learn web Development at Navgurukul</Link> 
            </div>
            <p>Date </p>
          </div>
          <p className='company-details'>have handled the post of mentor and teacher of 10+ students free of cost I am making some demo projects like an E-commerce website, clone of omani food ect.</p>
        </div>
        <div className='experience-details'>
          <div className='experience-details-heading'>
            <div className='experience-sub-heading'>
            <Image src={navgurukul} width={60} height={60}/>
            <Link href="https://www.navgurukul.org/" target='_blnk'>Learn web Development at Navgurukul</Link> 
            </div>
            <p>Date </p>
          </div>
          <p className='company-details'>have handled the post of mentor and teacher of 10+ students free of cost I am making some demo projects like an E-commerce website, clone of omani food ect.</p>
        </div>
        <div className='experience-details'>
          <div className='experience-details-heading'>
            <div className='experience-sub-heading'>
            <Image src={navgurukul} width={60} height={60}/>
            <Link href="https://www.navgurukul.org/" target='_blnk'>Learn web Development at Navgurukul</Link> 
            </div>
            <p>Date </p>
          </div>
          <p className='company-details'>have handled the post of mentor and teacher of 10+ students free of cost I am making some demo projects like an E-commerce website, clone of omani food ect.</p>
        </div>
        </div>
      </section>

      <section className='main-projects-section'>
        <div className='w-pm-80'>
        <h3>My <strong>Projects</strong></h3>

      
       {
        companyProject.map((item,index)=>{
          return( 
          <div className='projects-left'>
          <div className='w-100'><Image src={item.ImgUrl} alt={item.titel} className='project-img'/></div>
            <div className='w-100'>
              <h4>0{index+1}</h4>
              <p>{item.titel}</p>
              <span>{item.descripation}</span>
               <Link href={item.projectDetails.projectLogingPageUrl} target="_blank"><MdOpenInNew className='md-opne-new'/></Link>
              
            </div>
        </div>)
        })
       }
      
        </div>
      </section>

      <section className='contact-us-section'>
        <div className='w-pm-80'>
          <h4>Let’s discuss about an project!</h4>
          <div className='contact-us-form-main'>
            <div className='from-contect-us'>
              <p>Connect use</p>
              <input placeholder='Your name ' type='text'/>
              <input placeholder='Your Email' type='email'/>
              <input placeholder='Your Number ' type='number'/>
              <input placeholder='Your Website ' type='Website'/>
              <button className='sub-btn'>Submit</button>
            </div>
            <div className='map-contect-us'>
              <Image src={contactUs} alt="contact us" height={484} />
            </div>
          </div>
        </div>
      </section>

      <Dark/>    </>
  );
}

export default ManeSection;
