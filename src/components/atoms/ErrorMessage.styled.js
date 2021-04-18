import styled from 'styled-components';

const ErrorMessage = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.83em;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  width: 100%;
  bottom: 60px;
`;

export default ErrorMessage;
