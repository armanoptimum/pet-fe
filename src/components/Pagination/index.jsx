import React, { useState } from 'react';
import { PaginationStyled, PaginationButtonStyled, EllipsisStyled, PaginationIconeStyled } from './styles';
import pagiantionArrowLeft from '@/assets/icons/paginationArrowLeft.svg';
import pagiantionArrowRight from '@/assets/icons/paginationArrowRight.svg';
import Image from 'next/image';

const Pagination = ({ count }) => {
  const [currentPages, setCurrentPages] = useState({
    start: 1,
    end: Math.min(4, count),
  });

  const handleNext = () => {
    if (currentPages.end < count) {
      setCurrentPages((prev) => ({
        start: prev.end + 1,
        end: Math.min(prev.end + 4, count),
      }));
    }
  };

  const handlePrev = () => {
    if (currentPages.start > 1) {
      setCurrentPages((prev) => ({
        start: prev.start - 4,
        end: prev.start - 1,
      }));
    }
  };

  const generateButtons = () => {
    const buttons = [];
    for (let i = currentPages.start; i <= currentPages.end; i++) {
      buttons.push(<PaginationButtonStyled $active={i === currentPages.start} key={i}>{i}</PaginationButtonStyled>);
    }
    return buttons;
  };

  return (
    <PaginationStyled>
      <PaginationIconeStyled alt="prev" src={pagiantionArrowLeft} onClick={handlePrev} />
      {generateButtons()}
      {currentPages.end !== count && (
        <>
          <EllipsisStyled>...</EllipsisStyled>
          <PaginationButtonStyled>{count}</PaginationButtonStyled>
        </>
      )}

      <PaginationIconeStyled alt="next" src={pagiantionArrowRight} onClick={handleNext} />
    </PaginationStyled>
  );
};

export default Pagination;
