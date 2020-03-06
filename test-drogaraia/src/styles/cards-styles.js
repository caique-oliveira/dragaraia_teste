import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;


`;

export const TextContent = styled.div`
  width: 100%;
  min-height: 15vh;
  background-color: #ffffff;
  padding: 2px;

  p {
    font-size: 2em;
    color: #aaaaaa;
  }
`

export const CardContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 25vh;
    padding: 25px;
    background-color: ${props => props.bgColor || '#dddddd'};

    h2 {
      font-weight: 300;
      color: #fff;
      font-size: 3rem;
      margin: 2rem 0;
      letter-spacing: -2px;
    }
  }

  div {
    text-justify: distribute-all-lines;
    background: #fff;
    width: 100%;
    padding: 9px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 1.4rem;
    }

    button {
      width: 30%;
      align-self: flex-end;
      border: 0;
      color: #fff;
      padding: 5px;
      margin-top: 15px;
    }
    @media only screen and (max-width: 768px) {

        display: block;

  }

  }
`;
