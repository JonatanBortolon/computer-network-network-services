import blessed, { Widgets } from 'blessed';
import Data from './Data';

class Log {
  static services(screen: Widgets.Screen) {
    const border = blessed.text({
      content: '='.repeat(process.stdout.columns),
      style: {
        fg: 'white',
        bold: true,
      },
    });

    const title = blessed.text({
      content: 'Services Informations',
      style: {
        fg: 'white',
        bold: true,
      },
    });

    const breakLine = blessed.text({
      content: '\n\n\n',
    });

    const services = Data.getServices();

    let servicesHandler = [];
    for (let i = 0; i < services.length; i += 2) {
      servicesHandler.push({
        name: services[i + 1],
        status: services[i],
      });
    }

    screen.append(
      blessed.text({
        content:
          '='.repeat(process.stdout.columns) +
          'Services Informations\n\n\n' +
          servicesHandler
            .map((e, index) => [e.name + ': ' + e.status])
            .join()
            .replace(',', '\n') +
          '\n\n\n' +
          '='.repeat(process.stdout.columns) +
          'Quit on Escape, q, or Control-C.\n',
      })
    );
  }
}

export default Log;
