import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Card from '../Card';


storiesOf('atoms|Card', module).add('default', () => (
    <Card/>
))