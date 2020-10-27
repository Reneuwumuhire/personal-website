import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import './SocialMedia.css';

function SocialMedia() {
    return (
        <div className="social__medias">
            <a href="https://www.facebook.com/rene.uwumuhire" target="blank">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/reneuwumuhire/" target="blank">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/uwumuhire-rene-6190a711a/" target="blank">
                <FaLinkedinIn />

            </a>
            <a href="https://dribbble.com/Uwumuhire" target="blank">
                <FaDribbble />

            </a>
            <a href="https://www.youtube.com/channel/UClhh7aS2-pCegVvJhvX0sSA" target="blank">
                <FaYoutube />

            </a>


        </div>
    )
}

export default SocialMedia
