import React from 'react';
import ReactDOM from 'react-dom';
import {MainName, HeaderDiv, Slogan, Input} from './compo';

class MainPage extends React.Component{
    render(){
        return (
            <HeaderDiv>
                <MainName>HULTON</MainName>
            </HeaderDiv>
        );
    }
};

ReactDOM.render(<MainPage />, document.getElementById('root'));
