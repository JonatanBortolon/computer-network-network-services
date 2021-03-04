import blessed from 'blessed';
import Log from './controllers/log';

const screen = blessed.screen({
  smartCSR: true,
});

process.stdout.write('\x1Bc');
setInterval(() => {
  Log.services(screen);

  screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
  });

  screen.render();
}, 5);
