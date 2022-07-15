// import React from "react"
import photo from '../images/oakesthumbnailCropped.jpg';
import email from '../images/envelope-solid-grey-svg.svg';
import linkedIn from '../images/linkedin-brands-white-svg.svg';

export default function Info() {
    return (
        <div className="info">
            <img src={photo} alt="Jill Oakes" className="photo"/>
            <h1 className='myName'>Jill Oakes</h1>
            <h2 className='myTitle'>Full Stack Developer</h2>
            <h3 className='myWebsite'>jilloakes.website</h3>
            <div className='buttonRow'>
                <button className='emailButton'>
                    <img src={email} alt="email" />
                    <p>Email</p>
                </button>
                <button className='linkedInButton'>
                    <img src={linkedIn} alt="LinkedIn" />
                    <p>LinkedIn</p>
                </button>
            </div>
        </div>
    )
}