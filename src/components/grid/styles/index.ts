import Style, { css } from 'styled-components';

export const GridContainer = Style.div`
  display: flex;
  flex-direction: column;
  // gap: .25rem;
  margin-block: 10px;
  `;

export const Row = Style.div`
  ${({ theme }) => css`
    display: flex;
    // gap: .25rem;
    flex-flow: row; // I think it's redundant
    
    // This did the same thing as below code does. This means select all the direct children div element of first div element.
    // &:nth-child(1) > div {
    //   border: solid 0.25rem ${theme.colors.black};
    // }

    & {transition: border, box-shadow ${theme.transition};}
    & > div:hover {
      // border: solid 2px ${theme.colors.gray};
      box-shadow: -2px 0px 18px -12px ${theme.colors.black};
    }

    &:nth-child(1) {
      border: solid 2px ${theme.colors.black};
      border-inline-end: 0;
      border-bottom: none;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;

      div:nth-child(9) {
        border-top-right-radius: 6px;
      }
    }

    &:nth-child(2n),
    &:nth-child(2n+1){
      border-inline-start: solid 2px ${theme.colors.black};
    }

    &:nth-child(3n) {
      border-block-end: solid 2px ${theme.colors.black};
    }

    &:nth-child(9) {
      border: solid 2px ${theme.colors.black};
      border-inline-end: 0;
      border-top: none;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;

      div:nth-child(9) {
        border-bottom-right-radius: 6px;
      }
    }

    & > div:nth-child(3n) {
      border-inline-end: solid 2px ${theme.colors.black};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `}
`;
