import blessed from 'blessed';
import Log from './controllers/log';

const screen = blessed.screen({
  smartCSR: true,
});

process.stdout.write('\x1Bc');
setInterval(() => {
  screen.append(Log.mainScreen());

  screen.key(['escape', 'q', 'C-c'], () => {
    return process.exit(0);
  });

  screen.render();
}, 5);
