import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName="Lily" 
    lastName="Kaufman"
    AvatarUrl="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/29/1468960520-mewtwo.jpg?resize=480:*"
    jobTitle="Front Enginner" 
    twitter="sin twitter" />, container);
