import Image from "next/image";
import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
    background-color: var(--color-secondary-mon-yellow);
`

export const SubscriptionBlockStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary-dark-blue);
    margin-top: 5rem;
    padding: 2rem;
    border-radius: 1rem;
    gap: 2rem;

    @media (min-width: 92rem) {
        flex-direction: row;
    }
`

export const SubscriptionTextStyled = styled.h3`
    font-size: var(--font-size-heading-small-extra);
    color: var(--color-primary);
    line-height: 2.25rem;

`

export const SubscriptionInputWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 0.75rem;
    background-color: #fff;
    border-radius: 0.875rem;
    padding: 0.75rem;


    @media (min-width: 92rem) {
        flex-direction: row;
    }
`

export const SubscriptionInputStyled = styled.input`
    border-radius: 0.5rem;
    border: 1px solid var(--color-neutral-40);
    padding: 1rem 2rem;
    font-size: var(--font-size-body-medium-s);
    width: 100%;
    &::placeholder {
        color: var(--color-neutral-40);
    }
`

export const SubscriptionButtonStyled = styled.button`
    border-radius: 0.5rem;
    border: 1px solid var(--color-neutral-40);
    background-color: var(--color-primary-dark-blue);
    color: var(--color-neutral-00);
    font-size: var(--font-size-body-medium);
    font-weight: var(--font-weight-medium);
    padding: 1rem 2rem;
    white-space: nowrap;
`

export const FooterNavbarStyled = styled.nav`
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 92rem) {
        flex-direction: row;
    }
`

export const FooterNavItemTextWrapperStyled = styled.ul`
    display: flex;
    justify-content: center;
    gap: 3.75rem;
    color: var(--color-neutral-100);
    font-size: var(--font-size-body-medium);
`

export const FooterNavItemIconWrapperStyled = styled.ul`
    display: flex;
    gap: 2.5rem;
    justify-content: center;
`

export const FooterNavbarItemTextStyled = styled.li`
   
`

export const FooterNavbarItemIconStyled = styled(Image)`

`