import Button from '@/components/shared/Button';
import arrowRight from '@/assets/icons/btn-arrow-right-dark.svg';
import bannerImg from '@/assets/images/bannerImg.svg';

import {
  BannerStyled,
  BannerContentStyled,
  BannerHeaderStyled,
  BannerSubHeaderStyled,
  BannerParagraphStyled,
  BannerBtnsStyled,
  BannerImageContainerStyled,
} from './styles';
import Image from 'next/image';

const Banner = () => {
  return (
    <BannerStyled>
      <BannerContentStyled>
        <BannerHeaderStyled>One more friend</BannerHeaderStyled>
        <BannerSubHeaderStyled>Thousands more fun!</BannerSubHeaderStyled>
        <BannerParagraphStyled>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We
          have 200+ different pets that can meet your needs!
        </BannerParagraphStyled>
        <BannerBtnsStyled>
          <Button style={'outline'} icon={arrowRight}>
            View Intro
          </Button>
          <Button style={'primary'}>Explore Now</Button>
        </BannerBtnsStyled>
      </BannerContentStyled>
      <BannerImageContainerStyled>
        <Image alt="dog and human" src={bannerImg} />
      </BannerImageContainerStyled>
    </BannerStyled>
  );
};

export default Banner;
