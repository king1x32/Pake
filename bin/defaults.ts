import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 780,
  width: 1200,
  fullscreen: false,
  resizable: true,
  hideTitleBar: false,
  alwaysOnTop: false,
  appVersion: '1.0.0',
  darkMode: true,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: '',
  showSystemTray: true,
  multiArch: false,
  targets: 'appimage',
  useLocalFile: false,
  systemTrayIcon: '',
  proxyUrl: '',
  debug: false,
  inject: [],
  installerLanguage: 'vi-VN',
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'https://www.facebook.com/',
  name: 'Facebook',
  hideTitleBar: true,
};
