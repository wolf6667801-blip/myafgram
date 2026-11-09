import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.myafgram.messenger',
  appName: 'Мяфграм',
  webDir: 'dist',
  android: {
    allowMixedContent: false
  }
};

export default config;
