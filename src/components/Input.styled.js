import styled from 'styled-components';

const Input = styled.input`
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  outline-style: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  max-width: 230px;

  @media ${({ theme: { media } }) => media.tablet} {
    max-width: 300px;
  }
`;

export default Input;
