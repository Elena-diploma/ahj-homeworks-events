import Timeout from './Timeout';
import Handlers from './handlers';

const status = document.body.querySelector('#status');
const dead = status.querySelector('#dead');
const lost = status.querySelector('#lost');
const gameField = document.body.querySelector('#game-field');
const handlers = new Handlers(dead, gameField);
const timeout = new Timeout(dead, lost, gameField);

handlers.assign();
timeout.run();
