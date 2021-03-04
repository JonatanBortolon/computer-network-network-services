import { spawnSync } from 'child_process';
import os from 'os';
import servicesCommands from '../constants/servicesCommands';
import Apache from './Apache';

/**
 * Types
 */
import { IDataGetServicesReturn } from '../types/data';

class Data {
  static getServices(): IDataGetServicesReturn {
    const actualOs = os.platform();
    const apacheInstance = Apache.getInstance();
    let services: IDataGetServicesReturn = [];

    const servicesHandler = spawnSync(
      servicesCommands[actualOs],
      actualOs === 'win32'
        ? {
            shell: 'powershell.exe',
          }
        : {}
    )
      .stdout.toString()
      .replace(/\r\n/g, ' ')
      .replace(/[\r\n]/g, ' ')
      .split(' ')
      .filter((e) => e)
      .splice(4);

    for (let i = 0; i < servicesHandler.length; i += 2) {
      services.push({
        name: servicesHandler[i + 1],
        status: servicesHandler[i],
      });
    }

    if (
      !apacheInstance.isNgrokActive() &&
      services.filter((e) => e.name.indexOf('Apache') !== -1)[0].status ===
        'Running'
    ) {
      apacheInstance.startNgrok();
    }

    return services;
  }
}

export default Data;
