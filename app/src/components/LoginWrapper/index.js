import styled from 'styled-components';
import background from '../img/ecossistema-background.png';

const LoginWrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-image: url(${background});
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding-top: 120px;
    padding-bottom: 80px;
`;
//Display flex instancia flex
// flex wrap: posicionar no centro
//aling items: centralizar mas aonde?
// justify content: no meio!
export default LoginWrapper;





// import React from "react";
// import "./style.css"

// const LoginWrapper = () => <main className="login-wrapper"> </main>;

//export default LoginWrapper;