import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    display: none;
  }

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
        color: #008156;
        padding: 10px;
        font-size: 2rem;
        text-shadow: 2px 1px 1px #ffffff;
      }
    }
  }
`;
