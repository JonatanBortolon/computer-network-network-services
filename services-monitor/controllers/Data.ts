import { execSync } from 'child_process';

class Data {
  static getServices() {
    const services = execSync(
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

    return services;
  }
}

export default Data;
