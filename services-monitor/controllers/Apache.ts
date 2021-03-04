import { exec as callbackExec } from 'child_process';
import util from 'util';
const exec = util.promisify(callbackExec);

class Apache {
  private static _instance: Apache = new Apache();

  private _ngrokActive: boolean = false;

  constructor() {
    if (Apache._instance) {
      throw '';
    }
    Apache._instance = this;
  }

  static getInstance(): Apache {
    return this._instance;
  }

  public isNgrokActive(): boolean {
    return this._ngrokActive;
  }

  public startNgrok() {
    this._ngrokActive = true;

    exec(`start cmd @cmd /k; npm run ngrok`)
      .then(() => (this._ngrokActive = false))
      .catch(() => (this._ngrokActive = false));
  }
}

export default Apache;
