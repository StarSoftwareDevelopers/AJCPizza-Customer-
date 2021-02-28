import React from 'react';
import Logo from './../../assets/AJC Pizza Logo.png';
import './style.scss';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconsLink
} from './FooterElem';


const Footer = props => {
    return (
       <FooterContainer>
           <FooterWrap>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo>
                       <img src={Logo} alt="AJC Logo" />
                       </SocialLogo>
                       <SocialIconsLink href="/" target="_blank" aria-label="Facebook" rel="moopener noreferrer">
                           <FaFacebook />
                       </SocialIconsLink>
                       <SocialIconsLink href="/" target="_blank" aria-label="Instagram" rel="moopener noreferrer">
                           <FaFacebook />
                       </SocialIconsLink>
                       <SocialIconsLink href="/" target="_blank" aria-label="Twitter" rel="moopener noreferrer">
                           <FaFacebook />
                       </SocialIconsLink>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
       </FooterContainer>
                 
                    
    );
}

export default Footer;