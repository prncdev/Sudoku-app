import Style, { css } from "styled-components";

export const Block = Style.div`
  ${({theme}) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    height: auto;
    background: ${theme.colors.white};
    border: solid .5px ${theme.colors.gray};
    border-radius: 6px;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: background ${theme.transition};
    user-select: none;

    &:before {
      padding-block-start: 100%;
      content: '';
      float: left;
      background: red;
    }
    &:hover {
      background: ${theme.colors.lightBlue};
    }
    
    &:active {
      background: ${theme.colors.blue};
    }
  `}
`;