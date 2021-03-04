import blessed from 'blessed';
import Data from './Data';

/**
 * Types
 */
import { Widgets } from 'blessed';

class Log {
  static mainScreen(): Widgets.TextElement {
    const services = Data.getServices();

    return blessed.text({
      content:
        '='.repeat(process.stdout.columns) +
        'Services Informations\n\n\n' +
        services
          .map((e) => e.name + ': ' + e.status)
          .join()
          .replace(',', '\n') +
        '\n\n\n' +
        '='.repeat(process.stdout.columns) +
        'Quit on Escape, q, or Control-C.\n',
    });
  }
}

export default Log;
