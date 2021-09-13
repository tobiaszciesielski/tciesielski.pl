import styled from 'styled-components';

const Input = styled.input`
  border: none;
  outline-style: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 10px;
  height: 40px;
  width: 100%;
  max-width: 350px;
  color: ${({ theme }) => theme.colors.dark};
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media ${({ theme: { media } }) => media.tablet} {
    max-width: 300px;
  }
`;

export default Input;
