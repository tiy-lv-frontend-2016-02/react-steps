import React from 'react';
import { render } from 'react-dom';

// Components
import Nav from 'ui/nav';
import Anchor from 'ui/anchor';

render(
  <Nav>
    <Anchor goto="http://google.com" text="Googles"/><br />
    <Anchor goto="http://twitter.com" text="Twitters"/>
  </Nav>
, document.getElementById('app'));