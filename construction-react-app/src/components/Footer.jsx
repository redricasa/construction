// TODO socials, created by
import React from "react";
import { Envelope, Github, Linkedin, Briefcase } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <>
        <nav className="navbar  navbar-light bg-light">
        
        <button className="btn btn-outline-warning me-2" type="button">
            <a href='https://github.com/redricasa' target="_blank" >
            <Github size={30} />
            </a>
        </button>
        <button className="btn btn-outline-warning me-2" type="button">
            <a href='https://www.linkedin.com/in/fredericasblissett/' target="_blank" >
            <Linkedin size={30} />
            </a>
        </button>
        <button className="btn btn-outline-warning me-2" type="button">
            <a href="mailto:fredeb26@gmail.com" target="_blank">
            <Envelope size={30} />
            </a>
        </button>
        <button className="btn btn-outline-warning me-2" type="button">
            <a href='https://redricasa.dev/' target="_blank" >
            <Briefcase size={30} /> 
            </a>
        </button >
            
        <span className="navbar-text">
            <a className="brown-text text-lighten-3" >copyright &copy; Frederica (Samri) Blissett 2023</a>
        </span>
        </nav>
        </>
    )

}

export default Footer;
