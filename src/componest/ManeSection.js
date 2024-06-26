import React, { useState } from 'react';
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
import { Dark } from './Dark';
import { companyProject,experience } from './projectDel';
import { MdOpenInNew } from "react-icons/md";
import contactUs from '../assets/contact-us.png'
import emailjs from '@emailjs/browser';
import { ColorRing } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ParticleEffectButton from 'react-particle-effect-button';
import { TiTick } from "react-icons/ti";


const ManeSection = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [message,setMessage]=useState('')
  const [btnDesable,setBtnDesable]=useState(false)
  const [darkMode, setDark] = useState(false);
  const [showmeg, setShowmeg] = useState(false);


  const notifyError = (error) => toast.error(`${error}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    const notifyDone = () => toast.success(`Thank you for contact me !`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  const sendEmail = async() => {
    let emaiValidation= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!name) return notifyError("Fill the name ")
    if(!email) return notifyError("Fill the Email ")
    if(!message) return notifyError("Fill the  Message")
    if(!email.match(emaiValidation)) return notifyError("Fill the  vaild Email")
    setBtnDesable(true)
 
    const templateFrom={
      from_name:name,
      from_email:email,
      to_name:"Prathamesh mathapati",
      number,
      message:message
    }
    let headers={Accept: "application/json",}
    try {
     await axios.post('/api',templateFrom,{headers}).then((res)=>{
            notifyDone()
            setBtnDesable(false)
            setTimeout(()=>{
              setShowmeg(false)
            },3000)
        
            setName('') 
            setEmail('')
            setNumber('')
            setMessage('')

     }).catch((error)=>{
      notifyError(JSON.stringify(error))
      setBtnDesable(false)
      setShowmeg(false)
     })

      
    } catch (error) {
      setBtnDesable(false)
      setShowmeg(false)
    }
    
 
    
  };
  
  return (

    <>
      <section className={`mane-section   ${darkMode ?"bg-black ":"w-pm-80"}`} id='home'>
        <div className='mane-section-frist '>
          <h1>Hello I'm <span>Prathamesh</span>  <br /> <span>Web</span> Developer <br /> Best in <span>India</span></h1>
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

        <section className='main-skills-section w-pm-80 ' id='Skills'>
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

        <section className='main-express-section' id='Experience'>
          <div className='w-pm-80'>
          <h3>My <strong>Experience</strong></h3>
          {experience.map((ele,index)=>{
            return ( 
          <div className='experience-details' key={index}>
            <div className='experience-details-heading'>
              <div className='experience-sub-heading'>
              <Image src={ele.ImgUrl} width={60} height={60}/>
              <Link href={ele.projectDetails} target='_blnk'>{ele.titel}</Link> 
              </div>
              <p>Date {ele.Date}</p>
            </div>
            <p className='company-details'>{ele.descripation}</p>
          </div>)
          })}
         

         
          </div>
        </section>

        <section className='main-projects-section' id='Project'> 
          <div className='w-pm-80'>
          <h3>My <strong>Projects</strong></h3>

        
        {
          companyProject.map((item,index)=>{
            return( 
            <div className='projects-left' key={index}>
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

        <section className='contact-us-section' id='Contact me'>
          <div className='w-pm-80'>
            <h4>Let’s discuss about an project!</h4>
            <div className='contact-us-form-main'>
              <div className='from-contect-us'>
                <p>Connect use</p>
                <input placeholder='Your name ' type='text' onChange={e=>(setName(e.target.value))} value={name}/>
                <input placeholder='Your Email' type='email' onChange={e=>setEmail(e.target.value)} value={email}/>
                <input placeholder='Your Number ' type='number' onChange={e=>setNumber(e.target.value)} value={number}/>
                <textarea placeholder='Your messges ' onChange={e=>setMessage(e.target.value)} value={message} height='64'/>
                
                   <ParticleEffectButton
                  color='black'
                  hidden={btnDesable}
                  type="triangle"
                  direction="right"
                  
                 >
                    {showmeg&& <div className='thank-you-msg'>
                   <TiTick />

                    Thank you 
                   </div>}
                <button className='sub-btn' onClick={()=>sendEmail()} disabled={btnDesable}>
                    <ColorRing
                       visible={btnDesable}
                      height="30"
                       width="30"
                      ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />Submit
                        </button>
                   </ParticleEffectButton>


                
              </div>
             
              <div className='map-contect-us'>
                <Image src={contactUs} alt="contact us" height={484} />
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
   
        <Dark darkMode={darkMode} setDark={setDark}/>    
      </>
  );
}

export default ManeSection;
