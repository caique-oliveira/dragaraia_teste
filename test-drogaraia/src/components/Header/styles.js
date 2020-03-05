import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 120px;
  border-bottom: 1px solid #999;

  @media only screen and (max-width: 768px) {
    display: none;
  }

`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


  nav {
    img {
      height: 100%;
    }
   
  }

  aside {
    ul {
      list-style-type: none;
      display: flex;

      li {
        span {
          color: #008156;
          padding: 10px;
          font-size: 1.6rem;
        }
      }
    }
  }
`;
