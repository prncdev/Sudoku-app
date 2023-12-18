import Style, { css } from "styled-components";

type Props = {
  active?: boolean;
  puzzle?: boolean;
}


export const Block = Style.div<Props>`
  ${({theme, active, puzzle}) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 0;
    height: auto;
    background: ${active ? theme.colors.blue : theme.colors.white};
    border: solid .5px ${active ? theme.colors.lightBlue : theme.colors.gray};
    border-radius: 6px;
    font-size: 1.25rem;
    font-weight: ${puzzle ? 'normal' : 'bold' };
    font-style: ${puzzle ? 'normal' : "'Merriweather', serif" };
    cursor: pointer;
    transition: background, border ${theme.transition};
    user-select: none;

    &:before {
      padding-block-start: 100%;
      content: '';
      float: left;
      background: red;
    }
    &:hover {
      background: ${theme.colors.lightBlue};
      border-color: ${theme.colors.blue};
    }
    
    // &:active {
    //   background: ${theme.colors.blue};
    // }
  `}
`;