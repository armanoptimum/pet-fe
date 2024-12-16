import Button from '@/components/shared/Button';
import arrowRight from '@/assets/icons/btn-arrow-right-dark.svg';
import bannerImg from '@/assets/images/bannerImg.svg';
import bannerImgSmall from '@/assets/images/bannerImg-small.svg';

import {
  BannerStyled,
  BannerContentStyled,
  BannerHeaderStyled,
  BannerSubHeaderStyled,
  BannerParagraphStyled,
  BannerBtnsStyled,
  BannerImageContainerStyled,
  ImageStyledLarge,
  ImageStyledSmall,
} from './styles';

const Banner = ({ heading, subHeading, paragraph, imgLarge, imgSmall, reversed = false }) => {
  return (
    <BannerStyled>
      <BannerContentStyled $reversed={reversed}>
        <BannerHeaderStyled>{heading}</BannerHeaderStyled>
        <BannerSubHeaderStyled>{subHeading}</BannerSubHeaderStyled>
        <BannerParagraphStyled>{paragraph}</BannerParagraphStyled>
        <BannerBtnsStyled>
          <Button style={'outline'} icon={arrowRight}>
            View Intro
          </Button>
          <Button style={'primary'}>Explore Now</Button>
        </BannerBtnsStyled>
      </BannerContentStyled>
      <BannerImageContainerStyled $reversed={reversed}>
        <ImageStyledLarge alt="dog and human" src={imgLarge} priority />
        <ImageStyledSmall alt="dog and human" src={imgSmall} priority />
      </BannerImageContainerStyled>
    </BannerStyled>
  );
};

export default Banner;
