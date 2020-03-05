import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    font-size: 5rem;
    font-weight: normal;
    color: #008157;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 20px;

    span {
      font-weight: bold;
    }
  }

  p {
    font-size: 2rem;
  }
`;
