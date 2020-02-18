import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Navbar from '../Navbar';


storiesOf('atoms|Navbar', module).add('default', () => (
    <Navbar>123</Navbar>
))