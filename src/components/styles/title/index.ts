import Styled, { css } from 'styled-components';

// h1 tag can align itself by doing this `text-align: center`
export const Title = Styled.h1`
  ${({theme}) => css `
    color: ${theme.colors.white};
    text-align: center;
    margin-block-start: 0;
  `}
`;