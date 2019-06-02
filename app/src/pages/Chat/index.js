import React from 'react';
    
import HeaderWrapper from '../../components/HeaderWrapper';
import LogoBotcamp from '../../components/LogoBotcamp';
import LogoutBotcamp from '../../components/LogoutBotcamp';
import TextArea from '../../components/TextArea';

const Chat = () =>( 
    <HeaderWrapper>
        <LogoBotcamp small />
        <LogoutBotcamp />
        <TextArea  placeholder="Digite algo ae" />
    </HeaderWrapper>
);
export default Chat;