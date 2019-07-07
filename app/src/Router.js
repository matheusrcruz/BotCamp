import React from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';
const Router = () =>{
    const routers = [];
    routers['/chat'] = <Chat />;
    
    return routers[window.location.pathname] || <Login />;
};

export default Router;