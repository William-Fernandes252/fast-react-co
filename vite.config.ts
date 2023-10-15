import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  let locale = 'en-US';
  let currencyCode = 'USD';
  try {
    const ipGetResponse = await fetch('https://api.ipify.org?format=json');
    if (ipGetResponse.ok) {
      const ip = (await ipGetResponse.json())['ip'];
      const userLocaleGetResponse = await fetch(
        `http://usercountry.com/v1.0/json/${ip}`,
      );
      if (userLocaleGetResponse.ok) {
        const userLocale = await userLocaleGetResponse.json();
        currencyCode = userLocale['currency']['code'];
        console.log(currencyCode);
      }
    }
  } catch (error) {
    console.error(error);
  }

  return {
    plugins: [react()],
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '#', replacement: path.resolve(__dirname, '.') },
      ],
    },
    define: {
      DEFAULT_LOCALE: JSON.stringify(locale),
      DEFAULT_CURRENCY_CODE: JSON.stringify(currencyCode),
    },
  };
});
