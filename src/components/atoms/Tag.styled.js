import styled, { css } from 'styled-components';
import typography from '../../styles/typography';

const Tag = styled.a`
  font-size: 12px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.touch};
  padding: 2px 8px;
  border-radius: 10px;
  font-family: ${typography.robotoRegular}, 'Arial Narrow';
  cursor: pointer;
  border: 1px solid transparent;

  ${({ theme: { colors }, active }) => {
    const activeStyles = css`
      color: ${colors.darkest};
      background-color: ${colors.touch};
      border-color: ${colors.touch};
    `;

    return active
      ? activeStyles
      : css`
          background: ${colors.dark};
          color: ${colors.primary};
          border-color: ${colors.touch};
          &:hover {
            ${activeStyles}
          }
        `;
  }}
`;

Tag.defaultProps = {
  active: true,
};

export default Tag;
