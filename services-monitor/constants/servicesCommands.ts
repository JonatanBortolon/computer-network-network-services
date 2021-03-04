const servicesCommands: { [key in NodeJS.Platform]: string } = {
  aix: '',
  android: '',
  darwin: '',
  freebsd: '',
  linux: '',
  openbsd: '',
  sunos: '',
  win32: 'Get-Service -Name Apache*,mysql | select-object status, name',
  cygwin: '',
  netbsd: '',
};

export default servicesCommands;
