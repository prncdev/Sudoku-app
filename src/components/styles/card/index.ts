import Styled, { css } from 'styled-components';

export const Card = Styled.div`
  ${({ theme }) => css `
    background-color: ${theme.colors.white};
    border-radius: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: fit-content;
    padding-inline: 1rem;
    padding-block: 1rem;
  `}
`;