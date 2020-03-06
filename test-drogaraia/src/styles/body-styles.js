import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  h1 {
    font-size: 6rem;
    font-weight: 300;
    color: #008157;
    text-align: center;
    line-height: 1em;
    letter-spacing: -2.5px;
    margin-bottom: 20px;
    text-shadow: 2px 1px 1px #ffffff;

    span {
      font-weight: 800;
    }
  }

`;

export const TextContent = styled.div`
  width: 58%;
  font-size: 3rem;
  font-weight: 300;
  color: #858585;
  text-align: center;
  line-height: 1em;
  letter-spacing: -1px;
  margin-bottom: 20px;
  text-shadow: 2px 1px 1px #ffffff;

  p {
    line-height: 1em;
  }
`
