import React, { useState } from 'react';
import { PaginationStyled, PaginationButtonStyled, EllipsisStyled, PaginationIconeStyled } from './styles';
import pagiantionArrowLeft from '@/assets/icons/paginationArrowLeft.svg';
import pagiantionArrowRight from '@/assets/icons/paginationArrowRight.svg';

const Pagination = ({ count }) => {
  const [currentPages, setCurrentPages] = useState({
    start: 1,
    end: Math.min(4, count),
  });
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (e) => {
    const value = +e.target.innerText;
    setActivePage(value);
  };

  const handleNext = () => {
    if (currentPages.end < count) {
      setCurrentPages((prev) => ({
        start: prev.start + 1,
        end: Math.min(prev.end + 1, count),
      }));
      setActivePage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPages.start > 1) {
      setCurrentPages((prev) => ({
        start: prev.start - 1,
        end: prev.end - 1,
      }));
      setActivePage((prev) => prev - 1);
    }
  };

  const generateButtons = () => {
    const buttons = [];
    for (let i = currentPages.start; i <= currentPages.end; i++) {
      buttons.push(
        <PaginationButtonStyled onClick={handlePageClick} $active={i === activePage} key={i}>
          {i}
        </PaginationButtonStyled>
      );
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
          <PaginationButtonStyled onClick={handlePageClick} $active={activePage === count}>
            {count}
          </PaginationButtonStyled>
        </>
      )}

      <PaginationIconeStyled alt="next" src={pagiantionArrowRight} onClick={handleNext} />
    </PaginationStyled>
  );
};

export default Pagination;
