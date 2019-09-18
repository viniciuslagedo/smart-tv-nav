import React from 'react';
import withPageDefaultConfig from './withPageDefaultConfig';
import Trail from '../components/Trail/Trail';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Trail
          focusKey="destaque"
          keyMap={{
            left: 'sidemenu',
            right: 1,
            down: 'acao'
          }}
        />
        <Trail
          focusKey="acao"
          keyMap={{
            left: 'sidemenu',
            right: 1,
            up: 'destaque'
          }}
        />
      </div>
    );
  }
}

export default Home = withPageDefaultConfig(Home);
