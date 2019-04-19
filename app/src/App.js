import React, { Component } from 'react';
import LoginWrapper from './components/LoginWrapper';
import BtnBotcamp from './components/BtnBotcamp';
import LogoBotcamp from './components/LogoBotcamp';
import './components/styles/reset.css';

class App extends Component{
    render(){
        return(
            <LoginWrapper>
                <LogoBotcamp />
                <BtnBotcamp content="entrar" /> 
            </LoginWrapper >    
        );
    }   
}

export default App;
