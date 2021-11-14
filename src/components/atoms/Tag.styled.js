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

  ${({ theme: { colors }, inactive }) => {
    const activeStyles = css`
      color: ${colors.darkest};
      background-color: ${colors.touch};
      border-color: ${colors.touch};
    `;

    return inactive
      ? css`
          background: ${colors.dark};
          color: ${colors.primary};
          border: 1px solid ${colors.touch};
          &:hover {
            ${activeStyles}
          }
        `
      : activeStyles;
  }}
`;

Tag.defaultProps = {
  inactive: false,
};

export default Tag;
