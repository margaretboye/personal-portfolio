import React from 'react'
import { FaLinkedin, FaGithub, FaWordpress, FaDiscord } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/stephen-owusu-boakye-ankrah-76944b158/" target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/Steev-vhoo" target='_blank'><FaGithub/></a>
            <a href="https://lastreetsagesteev.wordpress.com/" target='_blank'><FaWordpress/></a>
            <a href="https://discord.com/Steev-Vhoo" target='_blank'><FaDiscord/></a>
        </div>
    )
}

export default HeaderSocials