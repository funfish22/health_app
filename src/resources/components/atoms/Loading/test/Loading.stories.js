import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Loading from '../Loading';


storiesOf('atoms|Loading', module).add('default', () => (
    <Loading/>
))