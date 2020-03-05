import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  
`;

export const CardContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  section {
    h2 {
      color: #fff;
      font-size: 2rem;
      font-weight: normal;
      margin: 2rem 0;
      text-align: center;
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
