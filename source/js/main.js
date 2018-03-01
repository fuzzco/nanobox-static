import App from './App.html';
import {bus}  from './helpers/bus';

const app = new App({
  target: document.querySelector('main'),
});

const handleMouseMove = (event = window.event) => {
 bus.emit('mouse:move', event.pageX, event.pageY)
}

document.onmousemove = handleMouseMove;