import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import SettingsScene from './settings-scene';
import { CELL_SIZE, X_TILES, Y_TILES, SCENES } from './constants';

const style = {
  minHeight: CELL_SIZE * Y_TILES,
  minWidth: CELL_SIZE * X_TILES,
  background: '#E0E0E0',
  padding: CELL_SIZE / 10,
};

class FillerShooting extends React.Component {
  constructor() {
    super();

    this.state = {
      currentScene: SCENES.SETTINGS,
      level: 1,
      speed: 1,
    };
  }

  handleLevelChange(level) { this.setState({ level }); }

  handleSpeedChange(speed) { this.setState({ speed }); }

  handleStartGame() { this.setState({ currentScene: SCENES.GAME }); }

  render() {
    const { currentScene, level, speed } = this.state;

    return (
      <div style={style}>
        { currentScene === SCENES.GAME && <Game speed={speed} level={level} /> }
        { currentScene != SCENES.GAME &&
          <SettingsScene
            showOverScene={currentScene === SCENES.OVER}
            showSettingsScene={currentScene === SCENES.SETTINGS}
            onRequestLevelChange={::this.handleLevelChange}
            onRequestSpeedChange={::this.handleSpeedChange}
            onRequestStartGame={::this.handleStartGame}
            level={level}
            speed={speed}
          />
        }
      </div>
    );
  }
}

ReactDOM.render(<FillerShooting />, document.getElementById('app'));
