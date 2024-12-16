import React from 'react';
import {
  FooterStyled,
  SubscriptionBlockStyled,
  SubscriptionTextStyled,
  SubscriptionInputWrapperStyled,
  SubscriptionInputStyled,
  SubscriptionButtonStyled,
  FooterNavbarStyled,
  FooterNavItemTextWrapperStyled,
  FooterNavItemIconWrapperStyled,
  FooterNavbarItemTextStyled,
  FooterNavbarItemIconStyled,
  CopyRightWrapperStyled,
  CopyRightItemStyled,
  TermsPolicyWrapperStyled,
} from './styles';
import fbIcon from '@/assets/icons/fbSM.svg';
import twitterIcon from '@/assets/icons/twitterSM.svg';
import youtubeIcon from '@/assets/icons/youtubeSM.svg';
import instagramIcon from '@/assets/icons/igSM.svg';
import logo from '@/assets/icons/logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <FooterStyled>
      <SubscriptionBlockStyled>
        <SubscriptionTextStyled>Register now so you don't miss our programs</SubscriptionTextStyled>
        <SubscriptionInputWrapperStyled>
          <SubscriptionInputStyled placeholder="Enter your email" />
          <SubscriptionButtonStyled>Subscribe Now</SubscriptionButtonStyled>
        </SubscriptionInputWrapperStyled>
      </SubscriptionBlockStyled>
      <hr />
      <FooterNavbarStyled>
        <FooterNavItemTextWrapperStyled>
          <FooterNavbarItemTextStyled>Home</FooterNavbarItemTextStyled>
          <FooterNavbarItemTextStyled>Category</FooterNavbarItemTextStyled>
          <FooterNavbarItemTextStyled>About</FooterNavbarItemTextStyled>
          <FooterNavbarItemTextStyled>Contact</FooterNavbarItemTextStyled>
        </FooterNavItemTextWrapperStyled>

        <FooterNavItemIconWrapperStyled>
          <FooterNavbarItemIconStyled alt="facebook" src={fbIcon} />
          <FooterNavbarItemIconStyled alt="twitter" src={twitterIcon} />
          <FooterNavbarItemIconStyled alt="youtube" src={instagramIcon} />
          <FooterNavbarItemIconStyled alt="youtube" src={youtubeIcon} />
        </FooterNavItemIconWrapperStyled>
      </FooterNavbarStyled>

      <CopyRightWrapperStyled>
        <CopyRightItemStyled>© 2022 Monito. All rights reserved.</CopyRightItemStyled>

        <Image alt="logo" src={logo} />

        <TermsPolicyWrapperStyled>
          <CopyRightItemStyled>Terms of Service</CopyRightItemStyled>
          <CopyRightItemStyled>Privacy Policy</CopyRightItemStyled>
        </TermsPolicyWrapperStyled>
      </CopyRightWrapperStyled>
    </FooterStyled>
  );
};

export default Footer;
