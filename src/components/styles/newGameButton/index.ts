import Styled, { css } from "styled-components";

export const NewGameButton = Styled.button`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    min-height: 2.5rem;
    color: ${theme.colors.white};
    background: ${theme.colors.black};
    border: solid 2px ${theme.colors.black};
    border-radius: 4px;
    padding-inline: 0;
    padding-block: 0;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    opacity: .9;
    transition: all ${theme.transition};

    &:hover {
      color: ${theme.colors.black};
      background-color: ${theme.colors.lightBlue};
      border-color: ${theme.colors.blue};
    }

    &:active {
      color: ${theme.colors.black};
      background-color: ${theme.colors.blue};
      border-color: ${theme.colors.lightBlue};
    }
  `}
`;