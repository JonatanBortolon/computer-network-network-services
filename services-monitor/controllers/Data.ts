import { execSync } from 'child_process';

/**
 * Types
 */
import { IDataGetServicesReturn } from '../types/data';

class Data {
  static getServices(): IDataGetServicesReturn {
    let services: IDataGetServicesReturn = [];

    const servicesHandler = execSync(
      'Get-Service -Name Apache*,mysql | select-object status, name',
      {
        shell: 'powershell.exe',
      }
    )
      .toString()
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

    return services;
  }
}

export default Data;
