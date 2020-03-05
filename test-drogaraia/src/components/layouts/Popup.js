import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import { Container } from './styles';
const PopupFrame = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PopupInner = styled.div`
  padding: 20px 20px;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;
const Button = styled.button`
color: 'white';
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
/* border: 2px solid green; */
border-radius: 3px;
float: right;
position: absolute;
top: -22px;
border: none;
right: -16px;
  
`;
export default function Popup({ ...props }) {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  function close() {
    props.onChange('teste');
    setShow('false');
  }

  return (
    <>
      {show == 'true' ? (
        <PopupFrame>
          <PopupInner>
            {props.text}
            <Button onClick={close}>X</Button>
          </PopupInner>
        </PopupFrame>
      ) : null}
    </>
  );
}