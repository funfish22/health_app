import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../reset.css';
import '../../../../../storybook.css';
import Button from '../Button';


storiesOf('atoms|Button', module).add('default', () => (
    <Button>1234</Button>
))